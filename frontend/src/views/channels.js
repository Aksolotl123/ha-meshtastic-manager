import { LitElement, html, css } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import qrcode from "qrcode-generator";
import { shared } from "../styles.js";
import { byteLength, channelName, pskKind, randomKey } from "../util.js";

const NAME_MAX_BYTES = 11;
// Position precision bits -> approximate radius shown by the Meshtastic apps.
const PRECISIONS = [
  [0, "off"],
  [10, "23 km"],
  [11, "12 km"],
  [12, "5.8 km"],
  [13, "2.9 km"],
  [14, "1.5 km"],
  [15, "730 m"],
  [16, "360 m"],
  [17, "180 m"],
  [18, "90 m"],
  [19, "45 m"],
  [32, "precise"],
];
const DEFAULT_PRECISION = 13;

function keyBytes(b64) {
  try {
    return atob(b64 || "").length;
  } catch {
    return -1;
  }
}

function emptyDraft() {
  return {
    name: "",
    keyMode: "random",
    psk: randomKey(),
    uplink: false,
    downlink: false,
    precision: DEFAULT_PRECISION,
    muted: false,
  };
}

// Channel list with add / join-from-link / edit / share / delete.
class MmChannels extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    channels: { attribute: false },
    lora: { attribute: false },
    _dialog: { state: true },
    _draft: { state: true },
    _busy: { state: true },
    _share: { state: true },
    _importUrl: { state: true },
    _importReplace: { state: true },
  };

  get t() {
    return this.panel.t;
  }

  get _connected() {
    // Channel commands are admin-only (share links contain the keys).
    return this.panel.data?.status?.connected && this.panel.isAdmin;
  }

  updated() {
    const action = this.panel?.pendingChannelAction;
    if (action && this._connected) {
      this.panel.pendingChannelAction = null;
      if (action === "add") this._openAdd();
      else if (action === "import") this._openImport();
    }
  }

  _active() {
    return (this.channels || []).filter((c) => c.role && c.role !== "DISABLED");
  }

  render() {
    const t = this.t;
    const active = this._active();
    const full = active.length >= 8;
    return html`
      <div class="card">
        <div class="row head">
          <h2 class="grow">${t("channels")} <span class="muted small">${active.length}/8</span></h2>
          <button class="btn" ?disabled=${!this._connected} @click=${() => this._openShare(null)}>
            <ha-icon icon="mdi:share-variant"></ha-icon>${t("share_all")}
          </button>
          <button class="btn" ?disabled=${!this._connected || full} @click=${this._openImport}>
            <ha-icon icon="mdi:link-plus"></ha-icon>${t("join_link")}
          </button>
          <button class="btn primary" ?disabled=${!this._connected || full} @click=${this._openAdd}>
            <ha-icon icon="mdi:plus"></ha-icon>${t("add_channel")}
          </button>
        </div>
        ${full ? html`<div class="muted small">${t("channels_full")}</div>` : ""}
        ${this.panel.isAdmin ? "" : html`<div class="muted small">${t("admin_only")}</div>`}
        <div class="list">${active.map((c) => this._renderChannel(c))}</div>
      </div>
      ${this._renderDialog()}
    `;
  }

  _renderChannel(c) {
    const t = this.t;
    const s = c.settings || {};
    const kind = pskKind(s.psk);
    const precision = s.module_settings?.position_precision ?? 0;
    return html`<div class="channel">
      <div class="avatar ${c.role === "PRIMARY" ? "primary" : ""}"><ha-icon icon="mdi:pound"></ha-icon></div>
      <div class="grow">
        <div class="name">${channelName(c, this.lora, t)} <span class="chip">${c.role === "PRIMARY" ? t("primary") : t("secondary")}</span></div>
        <div class="muted small">
          #${c.index} ·
          <ha-icon class="mini ${kind === "psk_custom" ? "ok" : kind === "psk_none" ? "err" : "warn"}"
            icon=${kind === "psk_none" ? "mdi:lock-open-variant" : "mdi:lock"}></ha-icon>
          ${t(kind)}
          ${s.uplink_enabled || s.downlink_enabled ? html` · MQTT ${s.uplink_enabled ? "↑" : ""}${s.downlink_enabled ? "↓" : ""}` : ""}
          · ${t("position")}: ${this._precisionLabel(precision)}
          ${s.module_settings?.is_muted ? html` · ${t("muted")}` : ""}
        </div>
      </div>
      <button class="icon" title=${t("share")} ?disabled=${!this._connected} @click=${() => this._openShare(c.index)}>
        <ha-icon icon="mdi:qrcode"></ha-icon>
      </button>
      <button class="icon" title=${t("edit")} ?disabled=${!this._connected} @click=${() => this._openEdit(c)}>
        <ha-icon icon="mdi:pencil"></ha-icon>
      </button>
      ${c.role === "SECONDARY"
        ? html`<button class="icon danger" title=${t("delete")} ?disabled=${!this._connected} @click=${() => this._delete(c)}>
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>`
        : html`<span class="icon-space"></span>`}
    </div>`;
  }

  _precisionLabel(bits) {
    const item = PRECISIONS.find(([b]) => b === bits);
    const label = item ? item[1] : `${bits}`;
    return label === "off" ? this.t("off") : label === "precise" ? this.t("precise") : `~${label}`;
  }

  // ------------------------------------------------------------ dialogs

  _openAdd() {
    this._draft = emptyDraft();
    this._dialog = { mode: "add" };
  }

  _openEdit(c) {
    const s = c.settings || {};
    const kind = pskKind(s.psk);
    this._draft = {
      name: s.name || "",
      keyMode: kind === "psk_none" ? "none" : kind === "psk_default" ? "default" : "keep",
      psk: s.psk || "",
      original: s,
      uplink: !!s.uplink_enabled,
      downlink: !!s.downlink_enabled,
      precision: s.module_settings?.position_precision ?? 0,
      muted: !!s.module_settings?.is_muted,
    };
    this._dialog = { mode: "edit", index: c.index, role: c.role };
  }

  _openImport() {
    this._importUrl = "";
    this._importReplace = false;
    this._dialog = { mode: "import" };
  }

  async _openShare(index) {
    this._share = null;
    this._dialog = { mode: "share", index };
    try {
      const { url } = await this.panel.ws("channel_url", index == null ? {} : { index });
      this._share = url;
    } catch (err) {
      this._fail(err);
      this._dialog = null;
    }
  }

  _close() {
    this._dialog = null;
  }

  _fail(err) {
    this.panel.toast(`${this.t("error")}: ${err.message || err}`, true);
  }

  _psk(d) {
    switch (d.keyMode) {
      case "none":
        return "";
      case "default":
        return "AQ==";
      case "keep":
        return d.original?.psk || "";
      default:
        return d.psk;
    }
  }

  _settingsFromDraft(d) {
    const settings = {
      ...(d.original || {}),
      name: d.name.trim(),
      psk: this._psk(d),
      uplink_enabled: d.uplink,
      downlink_enabled: d.downlink,
      module_settings: {
        ...(d.original?.module_settings || {}),
        position_precision: Number(d.precision),
        is_muted: d.muted,
      },
    };
    return settings;
  }

  _draftError(d, requireName) {
    const t = this.t;
    const name = d.name.trim();
    if (requireName && !name) return t("err_name_required");
    if (byteLength(name) > NAME_MAX_BYTES) return t("err_name_long");
    if (requireName && this._active().some((c) => c.index !== this._dialog?.index && c.settings?.name === name)) {
      return t("err_name_taken");
    }
    const len = keyBytes(this._psk(d));
    if (![0, 1, 16, 32].includes(len)) return t("err_key");
    return null;
  }

  async _submitChannel() {
    const p = this.panel;
    const d = this._draft;
    const editing = this._dialog.mode === "edit";
    const settings = this._settingsFromDraft(d);
    this._busy = true;
    try {
      if (editing) {
        await p.ws("channel_set", { index: this._dialog.index, role: this._dialog.role, settings });
      } else {
        await p.ws("channel_add", { settings });
      }
      p.toast(this.t(editing ? "saved_channel" : "channel_added"));
      this._dialog = null;
    } catch (err) {
      this._fail(err);
    }
    this._busy = false;
  }

  async _submitImport() {
    const p = this.panel;
    const t = this.t;
    if (this._importReplace && !(await p.confirm(t("replace_warning")))) return;
    this._busy = true;
    try {
      const result = await p.ws("channel_import", { url: this._importUrl.trim(), replace: this._importReplace });
      const parts = [];
      if (result.added.length) parts.push(`${t("added")}: ${result.added.join(", ")}`);
      if (result.skipped.length) parts.push(`${t("skipped")}: ${result.skipped.join(", ")}`);
      if (result.lora_changed) parts.push(t("lora_applied"));
      p.toast(parts.join(" · ") || t("done"));
      this._dialog = null;
    } catch (err) {
      this._fail(err);
    }
    this._busy = false;
  }

  async _delete(c) {
    const p = this.panel;
    const t = this.t;
    if (!(await p.confirm(`${t("delete_channel_q")} „${channelName(c, this.lora, t)}”? ${t("delete_channel_note")}`))) return;
    try {
      await p.ws("channel_delete", { index: c.index });
      p.toast(t("channel_deleted"));
    } catch (err) {
      this._fail(err);
    }
  }

  async _copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.panel.toast(this.t("copied"));
    } catch {
      this.renderRoot.querySelector(".share-url")?.select();
    }
  }

  _renderDialog() {
    if (!this._dialog) return "";
    const mode = this._dialog.mode;
    let body;
    if (mode === "share") body = this._renderShare();
    else if (mode === "import") body = this._renderImport();
    else body = this._renderForm();
    return html`<div class="backdrop" @click=${this._close}></div>
      <div class="dialog" role="dialog">${body}</div>`;
  }

  _renderForm() {
    const t = this.t;
    const d = this._draft;
    const isPrimary = this._dialog.role === "PRIMARY";
    const set = (k, v) => (this._draft = { ...d, [k]: v });
    const error = this._draftError(d, !isPrimary);
    // Do not nag about the empty name before the user typed anything.
    const shownError = error === t("err_name_required") && !d.touched ? null : error;
    const bytes = byteLength(d.name.trim());
    const keyLen = keyBytes(this._psk(d));
    return html`
      <h2>${this._dialog.mode === "edit" ? `${t("edit_channel")} #${this._dialog.index}` : t("add_channel")}</h2>
      <label class="field">
        <span>${t("name")} <span class="small ${bytes > NAME_MAX_BYTES ? "err" : "muted"}">${bytes}/${NAME_MAX_BYTES} ${t("bytes")}</span></span>
        <input
          .value=${d.name}
          placeholder=${isPrimary ? t("primary_name_hint") : ""}
          @input=${(e) => (this._draft = { ...d, name: e.target.value, touched: true })}
        />
      </label>
      <div class="field">
        <span>${t("psk")}</span>
        <div class="segmented">
          ${[
            ...(this._dialog.mode === "edit" && pskKind(d.original?.psk) === "psk_custom" ? [["keep", t("key_keep")]] : []),
            ["random", t("generate_key")],
            ["default", t("default_key")],
            ["none", t("no_key")],
            ["custom", t("key_custom")],
          ].map(
            ([value, label]) => html`<button
              type="button"
              class=${d.keyMode === value ? "active" : ""}
              @click=${() => (this._draft = { ...d, keyMode: value, psk: value === "random" ? randomKey() : value === "custom" ? d.psk : d.psk })}
            >
              ${label}
            </button>`
          )}
        </div>
        ${d.keyMode === "random" || d.keyMode === "custom"
          ? html`<div class="row">
              <input
                class="grow mono"
                .value=${d.psk}
                ?readonly=${d.keyMode === "random"}
                placeholder="base64"
                @input=${(e) => set("psk", e.target.value.trim())}
              />
              ${d.keyMode === "random"
                ? html`<button class="icon" title=${t("generate_key")} @click=${() => set("psk", randomKey())}>
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </button>`
                : ""}
            </div>
            <span class="small muted">${keyLen >= 0 ? `${keyLen} ${t("bytes")} (AES-${keyLen === 16 ? "128" : keyLen === 32 ? "256" : "?"})` : ""}</span>`
          : html`<span class="small ${d.keyMode === "none" ? "err" : "muted"}">${t(`key_hint_${d.keyMode}`)}</span>`}
      </div>
      <label class="field">
        <span>${t("position_precision")}</span>
        <select @change=${(e) => set("precision", Number(e.target.value))}>
          ${PRECISIONS.map(
            ([bits]) => html`<option value=${bits} ?selected=${Number(d.precision) === bits}>${this._precisionLabel(bits)}</option>`
          )}
        </select>
      </label>
      <label class="row"><input type="checkbox" .checked=${d.uplink} @change=${(e) => set("uplink", e.target.checked)} />${t("mqtt_uplink")}</label>
      <label class="row"><input type="checkbox" .checked=${d.downlink} @change=${(e) => set("downlink", e.target.checked)} />${t("mqtt_downlink")}</label>
      <label class="row"><input type="checkbox" .checked=${d.muted} @change=${(e) => set("muted", e.target.checked)} />${t("muted")}</label>
      ${shownError ? html`<div class="err small">${shownError}</div>` : ""}
      <div class="buttons">
        <button class="btn" @click=${this._close}>${t("cancel")}</button>
        <button class="btn primary" ?disabled=${!!error || this._busy} @click=${this._submitChannel}>
          ${this._dialog.mode === "edit" ? t("save") : t("add_channel")}
        </button>
      </div>
    `;
  }

  _renderImport() {
    const t = this.t;
    const url = this._importUrl || "";
    const valid = /^https?:\/\/[^#]*#[A-Za-z0-9_\-+/=]+$/.test(url.trim());
    return html`
      <h2>${t("join_link")}</h2>
      <div class="muted small">${t("join_link_hint")}</div>
      <textarea
        rows="3"
        class="mono"
        placeholder="https://meshtastic.org/e/#…"
        .value=${url}
        @input=${(e) => (this._importUrl = e.target.value)}
      ></textarea>
      <label class="row"><input type="radio" name="mode" .checked=${!this._importReplace} @change=${() => (this._importReplace = false)} />${t("import_add")}</label>
      <label class="row"><input type="radio" name="mode" .checked=${this._importReplace} @change=${() => (this._importReplace = true)} />${t("import_replace")}</label>
      ${this._importReplace ? html`<div class="warn small">${t("replace_warning")}</div>` : ""}
      <div class="buttons">
        <button class="btn" @click=${this._close}>${t("cancel")}</button>
        <button class="btn primary" ?disabled=${!valid || this._busy} @click=${this._submitImport}>${t("join")}</button>
      </div>
    `;
  }

  _renderShare() {
    const t = this.t;
    const index = this._dialog.index;
    const channel = index == null ? null : (this.channels || []).find((c) => c.index === index);
    let svg = "";
    if (this._share) {
      const qr = qrcode(0, "M");
      qr.addData(this._share);
      qr.make();
      svg = qr.createSvgTag({ cellSize: 5, margin: 3, scalable: true });
    }
    return html`
      <h2>${t("share")}: ${channel ? channelName(channel, this.lora, t) : t("all_channels")}</h2>
      <div class="muted small">${t(index == null ? "share_all_hint" : "share_hint")}</div>
      <div class="qr">${this._share ? unsafeSVG(svg) : t("connecting")}</div>
      ${this._share
        ? html`<div class="row">
            <input class="grow mono share-url" readonly .value=${this._share} @focus=${(e) => e.target.select()} />
            <button class="btn" @click=${() => this._copy(this._share)}><ha-icon icon="mdi:content-copy"></ha-icon>${t("copy")}</button>
          </div>`
        : ""}
      <div class="buttons"><button class="btn" @click=${this._close}>${t("close")}</button></div>
    `;
  }

  static styles = [
    shared,
    css`
      .head {
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .head h2 {
        margin: 0;
      }
      .list {
        display: flex;
        flex-direction: column;
      }
      .channel {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        border-top: 1px solid var(--divider-color);
      }
      .channel .avatar {
        background: var(--secondary-text-color);
      }
      .channel .avatar.primary {
        background: var(--primary-color);
      }
      .name {
        font-weight: 500;
      }
      ha-icon.mini {
        --mdc-icon-size: 14px;
        vertical-align: -2px;
      }
      .icon.danger {
        color: var(--error-color, #db4437);
      }
      .icon-space {
        width: 32px;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 100;
      }
      .dialog {
        position: fixed;
        z-index: 101;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(480px, 94vw);
        max-height: 90vh;
        overflow-y: auto;
        box-sizing: border-box;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .dialog h2 {
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .field > span:first-child {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .segmented {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .segmented button {
        font: inherit;
        font-size: 0.85em;
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid var(--divider-color);
        background: none;
        color: inherit;
        cursor: pointer;
      }
      .segmented button.active {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
      textarea {
        resize: vertical;
        width: 100%;
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .qr {
        align-self: center;
        width: min(260px, 70vw);
        background: #fff;
        border-radius: 8px;
        padding: 4px;
        color: #000;
        text-align: center;
      }
      .qr svg {
        display: block;
        width: 100%;
        height: auto;
      }
    `,
  ];
}

customElements.define("mm-channels", MmChannels);
