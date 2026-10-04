import { LitElement, html, css } from "lit";
import { shared, nodeColor } from "../styles.js";
import { BROADCAST, byteLength, channelName, formatTime, hopsLabel, nodeName, shortName } from "../util.js";

const MAX_BYTES = 200;
const STATUS_ICONS = {
  pending: "mdi:clock-outline",
  sent: "mdi:check",
  delivered: "mdi:check-all",
  failed: "mdi:alert-circle-outline",
  unconfirmed: "mdi:help-circle-outline",
};

class MmMessages extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    _text: { state: true },
    _sending: { state: true },
    _replyTo: { state: true },
  };

  constructor() {
    super();
    this._text = "";
    this._replyTo = null;
  }

  get _conversations() {
    const p = this.panel;
    const t = p.t;
    const summaries = new Map((p.data.conversations || []).map((c) => [c.key, c]));
    const items = [];
    for (const ch of p.data.channels || []) {
      if (!ch.role || ch.role === "DISABLED") continue;
      const key = `ch:${ch.index}`;
      items.push({
        key,
        title: `# ${channelName(ch, p.data.lora, t)}`,
        icon: "mdi:pound",
        summary: summaries.get(key),
      });
    }
    const dms = [...summaries.values()].filter((c) => c.key.startsWith("dm:"));
    const open = p.openConversation;
    if (open?.startsWith("dm:") && !summaries.has(open)) dms.unshift({ key: open });
    for (const c of dms) {
      const num = Number(c.key.slice(3));
      items.push({
        key: c.key,
        title: nodeName(p.nodes.get(num), num),
        num,
        summary: c.last ? c : null,
      });
    }
    return items;
  }

  updated() {
    const p = this.panel;
    const key = p.openConversation;
    if (key && !p.messages.has(key) && this._loadingKey !== key) {
      this._loadingKey = key;
      p.loadConversation(key).finally(() => (this._loadingKey = null));
      this._markRead(key);
    }
    const list = this.renderRoot.querySelector(".list");
    if (list && this._stickBottom !== false) list.scrollTop = list.scrollHeight;
  }

  _open(key) {
    this.panel.openConversation = key;
    this._replyTo = null;
    this._stickBottom = true;
    this._markRead(key);
    this.panel.bump();
  }

  _markRead(key) {
    const conv = (this.panel.data.conversations || []).find((c) => c.key === key);
    if (conv && conv.unread) {
      conv.unread = 0;
      this.panel.ws("mark_read", { conversation: key }).catch(() => {});
      this.panel.bump();
    }
  }

  _onScroll(e) {
    const el = e.target;
    this._stickBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
  }

  render() {
    const p = this.panel;
    const t = p.t;
    const items = this._conversations;
    const open = p.openConversation;
    const narrow = p.narrow || window.innerWidth < 700;
    const showList = !narrow || !open;
    const showChat = !narrow || open;
    return html`
      <div class="layout">
        ${showList
          ? html`<div class="sidebar">
              ${p.isAdmin
                ? html`<div class="sidebar-actions">
                    <button class="btn" ?disabled=${!p.data.status.connected} @click=${() => p.openChannels("add")}>
                      <ha-icon icon="mdi:plus"></ha-icon>${t("new_channel")}
                    </button>
                    <button class="btn" ?disabled=${!p.data.status.connected} @click=${() => p.openChannels("import")}>
                      <ha-icon icon="mdi:link-plus"></ha-icon>${t("join_short")}
                    </button>
                  </div>`
                : ""}
              ${items.map((c) => this._renderItem(c, open))}
            </div>`
          : ""}
        ${showChat ? html`<div class="chat">${open ? this._renderChat(open, narrow) : html`<div class="empty muted">${t("select_conversation")}</div>`}</div>` : ""}
      </div>
    `;
  }

  _renderItem(c, open) {
    const p = this.panel;
    const last = c.summary?.last;
    const unread = c.summary?.unread || 0;
    let preview = "";
    if (last) {
      const who = last.dir === "out" ? "" : last.to === BROADCAST ? `${shortName(p.nodes.get(last.from), last.from)}: ` : "";
      preview = who + last.text;
    }
    return html`<button class="item ${open === c.key ? "active" : ""}" @click=${() => this._open(c.key)}>
      ${c.num != null
        ? html`<div class="avatar" style="background:${nodeColor(c.num)}">${shortName(p.nodes.get(c.num), c.num)}</div>`
        : html`<div class="avatar channel"><ha-icon icon=${c.icon}></ha-icon></div>`}
      <div class="grow">
        <div class="row">
          <span class="grow ellipsis ${unread ? "bold" : ""}">${c.title}</span>
          ${last ? html`<span class="muted small">${formatTime(last.time, p.t.lang)}</span>` : ""}
        </div>
        <div class="row">
          <span class="grow ellipsis muted small">${preview}</span>
          ${unread ? html`<span class="badge">${unread}</span>` : ""}
        </div>
      </div>
    </button>`;
  }

  _renderChat(key, narrow) {
    const p = this.panel;
    const t = p.t;
    const messages = p.messages.get(key) || [];
    const isDm = key.startsWith("dm:");
    const num = isDm ? Number(key.slice(3)) : null;
    const chIndex = isDm ? 0 : Number(key.slice(3));
    const ch = (p.data.channels || []).find((c) => c.index === chIndex);
    const title = isDm ? nodeName(p.nodes.get(num), num) : `# ${channelName(ch, p.data.lora, t)}`;
    const bytes = byteLength(this._text);
    const byId = new Map(messages.map((m) => [m.id, m]));
    return html`
      <div class="chat-head">
        ${narrow
          ? html`<button class="icon" @click=${() => this._open(null)}><ha-icon icon="mdi:arrow-left"></ha-icon></button>`
          : ""}
        <div class="grow ellipsis title">${title}</div>
        ${isDm
          ? html`<button class="icon" title=${t("tab_nodes")} @click=${() => p.openNode(num)}>
              <ha-icon icon="mdi:information-outline"></ha-icon>
            </button>`
          : ""}
        ${p.isAdmin
          ? html`<button class="icon" title=${t("delete_conversation")} @click=${() => this._delete(key)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>`
          : ""}
      </div>
      <div class="list" @scroll=${this._onScroll}>
        ${messages.length ? "" : html`<div class="empty muted">${t("no_messages")}</div>`}
        ${messages.map((m, i) => this._renderMessage(m, messages[i - 1], byId, isDm))}
      </div>
      ${this._replyTo
        ? html`<div class="replying small">
            <ha-icon icon="mdi:reply"></ha-icon>
            <span class="grow ellipsis">${this._replyTo.text}</span>
            <button class="icon" @click=${() => (this._replyTo = null)}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>`
        : ""}
      <div class="composer">
        <textarea
          rows="1"
          .value=${this._text}
          placeholder=${t("type_message")}
          ?disabled=${!p.data.status.connected}
          @input=${(e) => (this._text = e.target.value)}
          @keydown=${(e) => this._onKey(e, key)}
        ></textarea>
        <span class="counter small ${bytes > MAX_BYTES ? "err" : "muted"}">${bytes}/${MAX_BYTES}</span>
        <button
          class="btn primary"
          ?disabled=${!this._text.trim() || bytes > MAX_BYTES || this._sending || !p.data.status.connected}
          @click=${() => this._send(key)}
        >
          <ha-icon icon="mdi:send"></ha-icon>
        </button>
      </div>
    `;
  }

  _renderMessage(m, prev, byId, isDm) {
    const p = this.panel;
    const t = p.t;
    const out = m.dir === "out";
    const sender = p.nodes.get(m.from);
    const showSender = !out && !isDm && (!prev || prev.from !== m.from || prev.dir === "out");
    const reply = m.reply_id ? byId.get(m.reply_id) : null;
    const meta = [];
    if (!out) {
      if (m.hops != null) meta.push(hopsLabel(m.hops, t));
      if (m.snr != null) meta.push(`SNR ${m.snr}`);
      if (m.via_mqtt) meta.push(t("via_mqtt"));
    }
    return html`<div class="msg ${out ? "out" : "in"}">
      ${!out && !isDm
        ? html`<div
            class="avatar mini ${showSender ? "" : "hidden"}"
            style="background:${nodeColor(m.from)}"
            @click=${() => p.openNode(m.from)}
          >
            ${shortName(sender, m.from)}
          </div>`
        : ""}
      <div class="bubble" @dblclick=${() => (this._replyTo = m)}>
        ${showSender ? html`<div class="sender" @click=${() => p.openNode(m.from)}>${nodeName(sender, m.from)}</div>` : ""}
        ${reply ? html`<div class="quote small">${reply.text}</div>` : ""}
        <div class="text">${m.text}</div>
        <div class="meta small">
          ${meta.join(" · ")} ${formatTime(m.time, t.lang)}
          ${out
            ? html`<ha-icon
                class="status ${m.status}"
                icon=${STATUS_ICONS[m.status] || STATUS_ICONS.pending}
                title=${t(`st_${m.status}`) + (m.error && m.error !== "NONE" ? ` (${m.error})` : "")}
              ></ha-icon>`
            : ""}
          <button class="icon reply" title=${t("reply")} @click=${() => (this._replyTo = m)}>
            <ha-icon icon="mdi:reply"></ha-icon>
          </button>
        </div>
      </div>
    </div>`;
  }

  _onKey(e, key) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this._send(key);
    }
  }

  async _send(key) {
    const p = this.panel;
    const text = this._text.trim();
    if (!text || byteLength(text) > MAX_BYTES) return;
    const params = { text };
    if (key.startsWith("dm:")) {
      params.to = Number(key.slice(3));
      params.channel = 0;
    } else {
      params.channel = Number(key.slice(3));
    }
    if (this._replyTo?.id) params.reply_id = this._replyTo.id;
    this._sending = true;
    try {
      await p.ws("send_text", params);
      this._text = "";
      this._replyTo = null;
      this._stickBottom = true;
      if (!p.messages.has(key)) await p.loadConversation(key);
    } catch (err) {
      p.toast(`${p.t("error")}: ${err.message || err}`, true);
    }
    this._sending = false;
  }

  async _delete(key) {
    const p = this.panel;
    if (!(await p.confirm(`${p.t("delete_conversation")}?`))) return;
    await p.ws("delete_conversation", { conversation: key });
    p.messages.set(key, []);
    p.data.conversations = (p.data.conversations || []).filter((c) => c.key !== key);
    p.bump();
  }

  static styles = [
    shared,
    css`
      :host {
        display: block;
        height: 100%;
      }
      .layout {
        display: flex;
        height: 100%;
      }
      .sidebar {
        width: 300px;
        flex: none;
        overflow-y: auto;
        border-right: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .layout > .sidebar:only-child {
        width: 100%;
        border-right: none;
      }
      .sidebar-actions {
        display: flex;
        gap: 8px;
        padding: 8px 12px;
        border-bottom: 1px solid var(--divider-color);
      }
      .sidebar-actions .btn {
        flex: 1;
        justify-content: center;
        font-size: 0.9em;
      }
      .item {
        font: inherit;
        color: inherit;
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        padding: 10px 12px;
        border: none;
        border-bottom: 1px solid var(--divider-color);
        background: none;
        text-align: left;
        cursor: pointer;
      }
      .item.active {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .avatar.channel {
        background: var(--primary-color);
      }
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .bold {
        font-weight: 600;
      }
      .chat {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .chat-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-bottom: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .chat-head .title {
        font-weight: 500;
      }
      .list {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .empty {
        margin: auto;
        padding: 24px;
        text-align: center;
      }
      .msg {
        display: flex;
        gap: 6px;
        align-items: flex-end;
        max-width: 80%;
      }
      .msg.out {
        align-self: flex-end;
      }
      .avatar.mini {
        width: 32px;
        height: 32px;
        font-size: 0.7em;
        cursor: pointer;
      }
      .avatar.hidden {
        visibility: hidden;
      }
      .bubble {
        padding: 6px 10px;
        border-radius: 12px;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        min-width: 60px;
      }
      .msg.out .bubble {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border-color: transparent;
      }
      .sender {
        font-size: 0.8em;
        font-weight: 600;
        color: var(--primary-color);
        cursor: pointer;
      }
      .quote {
        border-left: 3px solid currentColor;
        padding-left: 6px;
        opacity: 0.75;
        margin-bottom: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
      }
      .meta {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
        opacity: 0.7;
        margin-top: 2px;
      }
      .meta ha-icon {
        --mdc-icon-size: 14px;
      }
      .status.failed {
        color: var(--error-color, #db4437);
        opacity: 1;
      }
      .msg.out .status.failed {
        color: #ffd0cc;
      }
      .reply {
        padding: 0;
        opacity: 0;
      }
      .bubble:hover .reply {
        opacity: 1;
      }
      .replying {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .composer {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        padding: 8px 12px;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .composer textarea {
        flex: 1;
        resize: none;
        min-height: 38px;
        max-height: 120px;
      }
      .counter {
        align-self: center;
      }
    `,
  ];
}

customElements.define("mm-messages", MmMessages);
