import { LitElement, html, css } from "lit";
import { makeT } from "./i18n.js";
import { shared } from "./styles.js";
import "./views/radio.js";
import "./views/messages.js";
import "./views/nodes.js";
import "./views/map.js";
import "./views/config.js";
import "./views/node-dialog.js";
import "./views/confirm-dialog.js";

const DOMAIN = "meshtastic_manager";
const TABS = [
  ["radio", "mdi:radio-handheld"],
  ["messages", "mdi:message-text"],
  ["nodes", "mdi:account-group"],
  ["map", "mdi:map"],
  ["config", "mdi:cog"],
];

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode */
  }
}

class MeshtasticManagerPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    panel: { attribute: false },
    route: { attribute: false },
    _entries: { state: true },
    _entryId: { state: true },
    _tab: { state: true },
    _rev: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _dialogNode: { state: true },
    _toast: { state: true },
  };

  constructor() {
    super();
    this._entries = null;
    this._entryId = storageGet("meshtastic_manager.entry");
    this._tab = storageGet("meshtastic_manager.tab") || "radio";
    this._rev = 0;
    this.data = null;
    this.nodes = new Map();
    this.messages = new Map(); // conversation key -> array
    this.traceroutes = [];
    this.openConversation = null;
    this._unsub = null;
  }

  get t() {
    const lang = this.hass?.locale?.language || this.hass?.language;
    if (!this._t || this._t.forLang !== lang) {
      this._t = makeT(lang);
      this._t.forLang = lang;
    }
    return this._t;
  }

  get isAdmin() {
    return !!this.hass?.user?.is_admin;
  }

  get myNum() {
    return this.data?.status?.my_num ?? null;
  }

  get myNode() {
    return this.myNum != null ? this.nodes.get(this.myNum) : null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hass && this._entries === null) this._loadEntries();
    else if (this._entryId && !this._unsub && this._entries) this._selectEntry(this._entryId);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribe();
  }

  updated(changed) {
    if (changed.has("hass") && this.hass && this._entries === null && !this._loadingEntries) {
      this._loadEntries();
    }
  }

  ws(type, params = {}) {
    return this.hass.callWS({ type: `${DOMAIN}/${type}`, entry_id: this._entryId, ...params });
  }

  bump() {
    this._rev++;
  }

  toast(text, error = false) {
    this._toast = { text, error };
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => (this._toast = null), error ? 8000 : 4000);
  }

  async _loadEntries() {
    this._loadingEntries = true;
    try {
      this._entries = await this.hass.callWS({ type: `${DOMAIN}/entries` });
    } catch (err) {
      this._error = err.message || String(err);
      this._entries = [];
    }
    this._loadingEntries = false;
    const loaded = this._entries.filter((e) => e.state === "loaded");
    const pick = loaded.find((e) => e.entry_id === this._entryId) || loaded[0];
    if (pick) await this._selectEntry(pick.entry_id);
  }

  async _selectEntry(entryId) {
    this._unsubscribe();
    this._entryId = entryId;
    storageSet("meshtastic_manager.entry", entryId);
    this.messages = new Map();
    this.traceroutes = [];
    this.data = null;
    await this.reload();
    try {
      this._unsub = await this.hass.connection.subscribeMessage((ev) => this._onEvent(ev), {
        type: `${DOMAIN}/subscribe`,
        entry_id: entryId,
      });
    } catch (err) {
      this._error = err.message || String(err);
    }
  }

  _unsubscribe() {
    if (this._unsub) {
      this._unsub().catch?.(() => {});
      this._unsub = null;
    }
  }

  async reload() {
    this._loading = true;
    try {
      const data = await this.ws("snapshot");
      this.data = data;
      this.nodes = new Map(data.nodes.map((n) => [n.num, n]));
      this.traceroutes = await this.ws("traceroutes");
      // The radio may have rebooted (e.g. after a config change): reload settings.
      this.configStale = true;
      this._error = null;
    } catch (err) {
      this._error = err.message || String(err);
    }
    this._loading = false;
    this.bump();
  }

  async refreshConversations() {
    try {
      const data = await this.ws("snapshot");
      this.data = { ...this.data, conversations: data.conversations };
      this.bump();
    } catch {
      /* ignore */
    }
  }

  _onEvent(ev) {
    if (ev.entry_id !== this._entryId) return;
    switch (ev.type) {
      case "status": {
        const was = this.data?.status?.connected;
        if (this.data) this.data.status = ev.status;
        if (!was && ev.status.connected) this.reload();
        break;
      }
      case "snapshot":
      case "channels":
        this.reload();
        return;
      case "node":
        if (ev.node) this.nodes.set(ev.node.num, ev.node);
        break;
      case "node_removed":
        this.nodes.delete(ev.num);
        break;
      case "message":
        this._onMessage(ev.message);
        break;
      case "message_status": {
        for (const list of this.messages.values()) {
          const m = list.find((x) => x.dir === "out" && x.id === ev.id);
          if (m) {
            m.status = ev.status;
            m.error = ev.error;
          }
        }
        break;
      }
      case "traceroute":
        this.traceroutes = [...this.traceroutes, ev.traceroute];
        this.toast(this._tracerouteText(ev.traceroute));
        break;
      default:
        return;
    }
    this.bump();
  }

  _tracerouteText(tr) {
    const name = (num) => this.nodes.get(num)?.user?.shortName || (num >>> 0).toString(16).slice(-4);
    const path = [this.myNum, ...tr.route, tr.target].map(name).join(" → ");
    return `${this.t("traceroute")}: ${path}`;
  }

  _onMessage(message) {
    const key = message.conversation;
    const list = this.messages.get(key);
    if (list && !list.some((m) => m.id === message.id && m.from === message.from && m.dir === message.dir)) {
      list.push(message);
    }
    const convs = this.data?.conversations || [];
    let conv = convs.find((c) => c.key === key);
    if (!conv) {
      conv = { key, count: 0, unread: 0 };
      convs.push(conv);
    }
    conv.count++;
    conv.last = message;
    if (message.dir === "in" && !(this._tab === "messages" && this.openConversation === key && document.visibilityState === "visible")) {
      conv.unread++;
    } else if (message.dir === "in") {
      this.ws("mark_read", { conversation: key }).catch(() => {});
    }
    convs.sort((a, b) => b.last.time - a.last.time);
    if (this.data) this.data.conversations = convs;
  }

  async loadConversation(key) {
    const list = await this.ws("messages", { conversation: key, limit: 500 });
    this.messages.set(key, list);
    this.bump();
  }

  openNode(num) {
    this._dialogNode = num;
  }

  openDm(num) {
    this._dialogNode = null;
    this.openConversation = `dm:${num}`;
    this._setTab("messages");
  }

  confirm(text) {
    return this.shadowRoot.querySelector("mm-confirm-dialog").ask(text);
  }

  async action(action, params = {}, { confirmText } = {}) {
    if (confirmText && !(await this.confirm(confirmText))) return false;
    try {
      await this.ws("device_action", { action, ...params });
      this.toast(this.t("done"));
      return true;
    } catch (err) {
      this.toast(`${this.t("error")}: ${err.message || err}`, true);
      return false;
    }
  }

  _setTab(tab) {
    this._tab = tab;
    storageSet("meshtastic_manager.tab", tab);
  }

  render() {
    const t = this.t;
    const connected = this.data?.status?.connected;
    const unread = (this.data?.conversations || []).reduce((s, c) => s + (c.unread || 0), 0);
    return html`
      <div class="toolbar">
        <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
        <div class="title">Meshtastic</div>
        ${this._entries && this._entries.length > 1
          ? html`<select @change=${(e) => this._selectEntry(e.target.value)}>
              ${this._entries.map(
                (e) => html`<option value=${e.entry_id} ?selected=${e.entry_id === this._entryId}>${e.title}</option>`
              )}
            </select>`
          : html`<div class="entry-title">${this.data?.title || ""}</div>`}
        ${this.data
          ? html`<span class="conn ${connected ? "ok" : "err"}" title=${this.data.status.connection}>
              <ha-icon icon=${connected ? "mdi:lan-connect" : "mdi:lan-disconnect"}></ha-icon>
              ${this.narrow ? "" : connected ? t("connected") : t("disconnected")}
            </span>`
          : ""}
      </div>
      <div class="tabs" role="tablist">
        ${TABS.map(
          ([id, icon]) => html`<button
            role="tab"
            class=${this._tab === id ? "active" : ""}
            @click=${() => this._setTab(id)}
          >
            <ha-icon icon=${icon}></ha-icon>
            <span class="label">${t(`tab_${id}`)}</span>
            ${id === "messages" && unread ? html`<span class="badge">${unread}</span>` : ""}
          </button>`
        )}
      </div>
      <div class="content ${this._tab === "map" || this._tab === "messages" ? "full" : ""}">${this._renderContent()}</div>
      <mm-node-dialog
        .panel=${this}
        .rev=${this._rev}
        .num=${this._dialogNode}
        @closed=${() => (this._dialogNode = null)}
      ></mm-node-dialog>
      <mm-confirm-dialog .t=${t}></mm-confirm-dialog>
      ${this._toast ? html`<div class="toast ${this._toast.error ? "error" : ""}">${this._toast.text}</div>` : ""}
    `;
  }

  _renderContent() {
    const t = this.t;
    if (this._entries === null) return html`<div class="center muted">${t("connecting")}</div>`;
    if (!this._entries.length) return html`<div class="center card">${t("no_entries")}</div>`;
    if (!this.data) {
      return html`<div class="center muted">${this._error ? `${t("error")}: ${this._error}` : t("connecting")}</div>`;
    }
    const banner = this.data.status.connected
      ? ""
      : html`<div class="banner">
          ${t("not_connected_hint")}
          ${this.data.status.last_error ? html`<div class="small">${t("last_error")}: ${this.data.status.last_error}</div>` : ""}
        </div>`;
    const view = (() => {
      switch (this._tab) {
        case "messages":
          return html`<mm-messages .panel=${this} .rev=${this._rev}></mm-messages>`;
        case "nodes":
          return html`<mm-nodes .panel=${this} .rev=${this._rev}></mm-nodes>`;
        case "map":
          return html`<mm-map .panel=${this} .rev=${this._rev}></mm-map>`;
        case "config":
          return html`<mm-config .panel=${this} .rev=${this._rev}></mm-config>`;
        default:
          return html`<mm-radio .panel=${this} .rev=${this._rev}></mm-radio>`;
      }
    })();
    return html`${banner}${view}`;
  }

  static styles = [
    shared,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: var(--primary-background-color);
        position: relative;
      }
      .toolbar {
        display: flex;
        align-items: center;
        gap: 12px;
        height: var(--header-height, 56px);
        padding: 0 12px;
        box-sizing: border-box;
        background: var(--app-header-background-color, var(--primary-color));
        color: var(--app-header-text-color, var(--text-primary-color, #fff));
        flex: none;
      }
      .toolbar .title {
        font-size: 20px;
        font-weight: 400;
      }
      .toolbar .entry-title {
        opacity: 0.85;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .toolbar select {
        flex: 1;
        max-width: 280px;
        color: inherit;
        background: transparent;
        border-color: currentColor;
      }
      .toolbar select option {
        color: var(--primary-text-color);
        background: var(--card-background-color);
      }
      .conn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
        font-size: 0.9em;
        color: inherit;
      }
      .conn.err ha-icon {
        color: var(--error-color, #db4437);
      }
      .tabs {
        display: flex;
        flex: none;
        overflow-x: auto;
        background: var(--app-header-background-color, var(--primary-color));
        color: var(--app-header-text-color, var(--text-primary-color, #fff));
      }
      .tabs button {
        font: inherit;
        flex: 1;
        min-width: 72px;
        background: none;
        border: none;
        color: inherit;
        opacity: 0.75;
        padding: 10px 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border-bottom: 2px solid transparent;
      }
      .tabs button.active {
        opacity: 1;
        border-bottom-color: currentColor;
      }
      .tabs .badge {
        background: var(--error-color, #db4437);
      }
      .content {
        flex: 1;
        overflow: auto;
        padding: 16px;
        box-sizing: border-box;
      }
      .content.full {
        padding: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .content.full > :last-child {
        flex: 1;
        min-height: 0;
      }
      .center {
        max-width: 600px;
        margin: 48px auto;
        text-align: center;
      }
      .banner {
        background: var(--warning-color, #ffa600);
        color: #000;
        padding: 8px 16px;
        margin: 0 0 12px;
        border-radius: 8px;
      }
      .content.full .banner {
        margin: 0;
        border-radius: 0;
        flex: none;
      }
      .toast {
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        background: var(--primary-text-color);
        color: var(--primary-background-color);
        padding: 10px 18px;
        border-radius: 8px;
        z-index: 1000;
        max-width: 90vw;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      .toast.error {
        background: var(--error-color, #db4437);
        color: #fff;
      }
      @media (max-width: 600px) {
        .tabs .label {
          display: none;
        }
      }
    `,
  ];
}

customElements.define("meshtastic-manager-panel", MeshtasticManagerPanel);
