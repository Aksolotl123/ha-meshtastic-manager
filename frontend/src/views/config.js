import { LitElement, html, css } from "lit";
import { shared } from "../styles.js";
import { position } from "../util.js";
import "./proto-form.js";
import "./channels.js";

class MmConfig extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    _cfg: { state: true },
    _section: { state: true },
    _draft: { state: true },
    _dirty: { state: true },
    _saving: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this._section = "owner";
    this._draft = null;
    this._dirty = false;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.panel) this.panel.configStale = false;
    if (this.panel?.isAdmin && this.panel?.data?.status?.connected) this._load();
  }

  updated(changed) {
    const connected = this.panel?.data?.status?.connected;
    if (this.panel?.configStale && this._cfg && !this._dirty && connected) {
      this.panel.configStale = false;
      this._cfg = null;
    }
    if (changed.has("rev") && connected && !this._cfg && !this._loading && this.panel.isAdmin) this._load();
  }

  async _load() {
    this._loading = true;
    try {
      this._cfg = await this.panel.ws("config_get");
      this._error = null;
      this._select(this._section, true);
    } catch (err) {
      this._error = err.message || String(err);
    }
    this._loading = false;
  }

  async _select(section, force = false) {
    if (!force && this._dirty && !(await this.panel.confirm(`${this.panel.t("unsaved")}. ${this.panel.t("cancel")}?`))) return;
    this._section = section;
    this._dirty = false;
    const cfg = this._cfg;
    if (!cfg) return;
    if (section === "owner") {
      const o = cfg.owner || {};
      this._draft = {
        long_name: o.longName || "",
        short_name: o.shortName || "",
        is_licensed: !!o.isLicensed,
        is_unmessagable: !!o.isUnmessagable,
      };
    } else if (section === "channels") {
      this._draft = {};
    } else if (section === "fixed") {
      const pos = position(this.panel.myNode);
      this._draft = { latitude: pos?.lat ?? "", longitude: pos?.lon ?? "", altitude: pos?.alt ?? 0 };
    } else {
      const [kind, name] = section.split(":");
      this._draft = structuredClone(cfg.values[kind][name]);
    }
  }

  _change(value) {
    this._draft = value;
    this._dirty = true;
  }

  async _run(fn) {
    const p = this.panel;
    this._saving = true;
    try {
      await fn();
      this._dirty = false;
      p.toast(p.t("saved"));
    } catch (err) {
      p.toast(`${p.t("error")}: ${err.message || err}`, true);
    }
    this._saving = false;
  }

  async _save() {
    const p = this.panel;
    const s = this._section;
    if (s === "owner") {
      await this._run(() => p.ws("owner_set", this._draft));
      const me = p.myNode;
      if (me?.user) {
        me.user = { ...me.user, longName: this._draft.long_name, shortName: this._draft.short_name };
        p.bump();
      }
      this._cfg.owner = {
        ...this._cfg.owner,
        longName: this._draft.long_name,
        shortName: this._draft.short_name,
        isLicensed: this._draft.is_licensed,
        isUnmessagable: this._draft.is_unmessagable,
      };
      return;
    }
    const [kind, name] = s.split(":");
    await this._run(() => p.ws("config_set", { sections: [{ kind, section: name, values: this._draft }] }));
    this._cfg.values[kind][name] = structuredClone(this._draft);
  }

  render() {
    const p = this.panel;
    const t = p.t;
    if (!p.isAdmin) return html`<div class="card">${t("admin_only")}</div>`;
    if (!p.data.status.connected && !this._cfg) return html``;
    if (this._error) return html`<div class="card err">${t("error")}: ${this._error}</div>`;
    if (!this._cfg) return html`<div class="muted">${t("connecting")}</div>`;
    const cfg = this._cfg;
    const nav = (id, label, icon) =>
      html`<button class="nav ${this._section === id ? "active" : ""}" @click=${() => this._select(id)}>
        ${icon ? html`<ha-icon icon=${icon}></ha-icon>` : ""}<span>${label}</span>
      </button>`;
    return html`
      <div class="layout">
        <div class="sidebar card">
          ${nav("owner", t("owner"), "mdi:account")}
          ${nav("channels", t("channels"), "mdi:pound")}
          ${nav("fixed", t("fixed_position"), "mdi:map-marker")}
          <div class="group">${t("config_sections")}</div>
          ${Object.keys(cfg.schema.config).map((s) => nav(`config:${s}`, t.section(s)))}
          <div class="group">${t("module_sections")}</div>
          ${Object.keys(cfg.schema.module).map((s) => nav(`module:${s}`, t.section(s)))}
        </div>
        <div class="editor">${this._renderEditor()}</div>
      </div>
    `;
  }

  _renderEditor() {
    const p = this.panel;
    const t = p.t;
    const s = this._section;
    if (!this._draft) return html``;
    if (s === "channels") return this._renderChannels();
    if (s === "fixed") return this._renderFixed();
    let body;
    let title;
    if (s === "owner") {
      title = t("owner");
      const d = this._draft;
      body = html`<div class="owner">
        <label class="field"><span>${t("long_name")}</span>
          <input maxlength="39" .value=${d.long_name} @input=${(e) => this._change({ ...d, long_name: e.target.value })} />
        </label>
        <label class="field"><span>${t("short_name")}</span>
          <input maxlength="4" .value=${d.short_name} @input=${(e) => this._change({ ...d, short_name: e.target.value })} />
        </label>
        <label class="row"><input type="checkbox" .checked=${d.is_licensed} @change=${(e) => this._change({ ...d, is_licensed: e.target.checked })} />${t("licensed")}</label>
        <label class="row"><input type="checkbox" .checked=${d.is_unmessagable} @change=${(e) => this._change({ ...d, is_unmessagable: e.target.checked })} />${t("unmessagable")}</label>
      </div>`;
    } else {
      const [kind, name] = s.split(":");
      title = t.section(name);
      body = html`<mm-proto-form
        .schema=${this._cfg.schema[kind][name]}
        .value=${this._draft}
        @value-changed=${(e) => this._change(e.detail.value)}
      ></mm-proto-form>`;
    }
    return html`<div class="card">
      <div class="row head">
        <h2 class="grow">${title}</h2>
        ${this._dirty ? html`<span class="warn small">${t("unsaved")}</span>` : ""}
        <button class="btn primary" ?disabled=${!this._dirty || this._saving || !p.data.status.connected} @click=${this._save}>
          <ha-icon icon="mdi:content-save"></ha-icon>${t("save")}
        </button>
      </div>
      ${s.startsWith("config:") ? html`<div class="muted small note">${t("reboot_warning")}</div>` : ""}
      ${body}
    </div>`;
  }

  _renderChannels() {
    const p = this.panel;
    return html`<mm-channels
      .panel=${p}
      .rev=${this.rev}
      .channels=${p.data.channels}
      .lora=${p.data.lora}
    ></mm-channels>`;
  }

  _renderFixed() {
    const p = this.panel;
    const t = p.t;
    const d = this._draft;
    const set = (k, v) => this._change({ ...d, [k]: v });
    const valid = d.latitude !== "" && d.longitude !== "" && !isNaN(d.latitude) && !isNaN(d.longitude);
    return html`<div class="card">
      <h2>${t("fixed_position")}</h2>
      <div class="owner">
        <label class="field"><span>${t("latitude")}</span>
          <input type="number" step="any" .value=${String(d.latitude)} @input=${(e) => set("latitude", e.target.value)} />
        </label>
        <label class="field"><span>${t("longitude")}</span>
          <input type="number" step="any" .value=${String(d.longitude)} @input=${(e) => set("longitude", e.target.value)} />
        </label>
        <label class="field"><span>${t("altitude")} (m)</span>
          <input type="number" step="1" .value=${String(d.altitude)} @input=${(e) => set("altitude", e.target.value)} />
        </label>
      </div>
      <div class="row actions">
        <button
          class="btn"
          @click=${() =>
            this._change({
              latitude: p.hass.config.latitude,
              longitude: p.hass.config.longitude,
              altitude: Math.round(p.hass.config.elevation || 0),
            })}
        >
          <ha-icon icon="mdi:home-map-marker"></ha-icon>${t("use_home")}
        </button>
        <button
          class="btn primary"
          ?disabled=${!valid || this._saving || !p.data.status.connected}
          @click=${() =>
            this._run(() =>
              p.ws("fixed_position", {
                latitude: Number(d.latitude),
                longitude: Number(d.longitude),
                altitude: Number(d.altitude) || 0,
              })
            )}
        >
          <ha-icon icon="mdi:map-marker-check"></ha-icon>${t("set_fixed")}
        </button>
        <button
          class="btn danger"
          ?disabled=${this._saving || !p.data.status.connected}
          @click=${() => this._run(() => p.ws("device_action", { action: "remove_fixed_position" }))}
        >
          <ha-icon icon="mdi:map-marker-remove"></ha-icon>${t("remove_fixed")}
        </button>
      </div>
    </div>`;
  }

  static styles = [
    shared,
    css`
      .layout {
        display: flex;
        gap: 16px;
        align-items: flex-start;
        max-width: 1300px;
        margin: 0 auto;
      }
      .sidebar {
        width: 230px;
        flex: none;
        padding: 8px 0;
        position: sticky;
        top: 0;
        max-height: calc(100vh - 160px);
        overflow-y: auto;
      }
      .editor {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      @media (max-width: 760px) {
        .layout {
          flex-direction: column;
        }
        .sidebar {
          width: 100%;
          position: static;
          max-height: 220px;
        }
      }
      .nav {
        font: inherit;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 8px 16px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
      }
      .nav ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .nav.active {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
        color: var(--primary-color);
        font-weight: 500;
      }
      .group {
        padding: 12px 16px 4px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
      .head {
        margin-bottom: 12px;
      }
      .head h2 {
        margin: 0;
      }
      .note {
        margin-bottom: 12px;
      }
      .owner {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px 16px;
        align-items: end;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .field > span {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .psk {
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .actions {
        flex-wrap: wrap;
        margin-top: 16px;
      }
      .url input {
        width: 100%;
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
    `,
  ];
}

customElements.define("mm-config", MmConfig);
