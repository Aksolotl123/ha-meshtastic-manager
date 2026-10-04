import { LitElement, html, css } from "lit";
import { shared, nodeColor } from "../styles.js";
import { humanize } from "../i18n.js";
import {
  distanceKm,
  formatDistance,
  formatDuration,
  formatTime,
  hopsLabel,
  nodeId,
  nodeName,
  position,
  shortName,
  timeAgo,
} from "../util.js";

class MmNodeDialog extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    num: { type: Number },
    _busy: { state: true },
  };

  _close() {
    this.dispatchEvent(new CustomEvent("closed"));
  }

  async _request(request) {
    const p = this.panel;
    this._busy = request;
    try {
      await p.ws("node_request", { node: this.num, request });
      p.toast(p.t("request_sent"));
    } catch (err) {
      p.toast(`${p.t("error")}: ${err.message || err}`, true);
    }
    this._busy = null;
  }

  async _action(action, confirmText) {
    const ok = await this.panel.action(action, { node: this.num }, { confirmText });
    if (ok && action === "remove_node") this._close();
  }

  render() {
    if (this.num == null || !this.panel) return html``;
    const p = this.panel;
    const t = p.t;
    const n = p.nodes.get(this.num) || { num: this.num };
    const user = n.user || {};
    const isMe = this.num === p.myNum;
    const pos = position(n);
    const dist = isMe ? null : distanceKm(position(p.myNode), pos);
    const dm = n.deviceMetrics || {};
    const env = n.environmentMetrics || {};
    const traces = p.traceroutes.filter((tr) => tr.target === this.num).slice(-5).reverse();
    const connected = p.data?.status?.connected;
    return html`
      <div class="backdrop" @click=${this._close}></div>
      <div class="dialog" role="dialog">
        <div class="head">
          <div class="avatar" style="background:${nodeColor(this.num)}">${shortName(n, this.num)}</div>
          <div class="grow">
            <div class="name">${nodeName(n, this.num)}</div>
            <div class="muted small">${nodeId(this.num)} · ${user.hwModel || "?"} · ${user.role || "CLIENT"}</div>
          </div>
          <button class="icon" @click=${this._close} title=${t("close")}><ha-icon icon="mdi:close"></ha-icon></button>
        </div>
        <div class="body">
          ${isMe
            ? ""
            : html`<div class="actions">
                <button class="btn primary" @click=${() => p.openDm(this.num)}>
                  <ha-icon icon="mdi:message-text"></ha-icon>${t("send_dm")}
                </button>
                ${[
                  ["traceroute", "mdi:routes", "traceroute"],
                  ["position", "mdi:crosshairs-gps", "request_position"],
                  ["telemetry", "mdi:chart-line", "request_telemetry"],
                  ["nodeinfo", "mdi:account-sync", "exchange_info"],
                ].map(
                  ([req, icon, label]) => html`<button
                    class="btn"
                    ?disabled=${!connected || this._busy}
                    @click=${() => this._request(req)}
                  >
                    <ha-icon icon=${icon}></ha-icon>${t(label)}
                  </button>`
                )}
              </div>`}

          <dl class="kv">
            <dt>${t("last_heard")}</dt>
            <dd>${isMe ? t("you") : n.lastHeard ? html`${timeAgo(n.lastHeard, t)} <span class="muted small">(${formatTime(n.lastHeard, t.lang)})</span>` : t("never")}</dd>
            ${isMe
              ? ""
              : html`<dt>Hops</dt><dd>${hopsLabel(n.hopsAway, t) || "—"}${n.viaMqtt ? html` <span class="chip">MQTT</span>` : ""}</dd>
                  <dt>${t("snr")}</dt><dd>${n.snr != null ? `${n.snr} dB` : "—"}${n.rssi != null ? ` · RSSI ${n.rssi} dBm` : ""}</dd>`}
            ${user.publicKey
              ? html`<dt>${t("public_key")}</dt><dd class="mono small">${user.publicKey}</dd>`
              : ""}
          </dl>

          ${pos
            ? html`<h3>${t("position")}</h3>
                <dl class="kv">
                  <dt>${t("latitude")} / ${t("longitude")}</dt>
                  <dd>
                    <a href="https://www.openstreetmap.org/?mlat=${pos.lat}&mlon=${pos.lon}#map=14/${pos.lat}/${pos.lon}" target="_blank" rel="noreferrer">
                      ${pos.lat.toFixed(5)}, ${pos.lon.toFixed(5)}
                    </a>
                  </dd>
                  ${pos.alt != null ? html`<dt>${t("altitude")}</dt><dd>${pos.alt} m</dd>` : ""}
                  ${dist != null ? html`<dt>${t("distance")}</dt><dd>${formatDistance(dist)}</dd>` : ""}
                </dl>`
            : ""}

          ${Object.keys(dm).length
            ? html`<h3>${t("metrics")}</h3>
                <dl class="kv">
                  ${dm.batteryLevel != null ? html`<dt>${t("battery")}</dt><dd>${dm.batteryLevel > 100 ? t("powered") : `${dm.batteryLevel}%`}</dd>` : ""}
                  ${dm.voltage != null ? html`<dt>${t("voltage")}</dt><dd>${dm.voltage.toFixed(2)} V</dd>` : ""}
                  ${dm.channelUtilization != null ? html`<dt>${t("channel_util")}</dt><dd>${dm.channelUtilization.toFixed(1)}%</dd>` : ""}
                  ${dm.airUtilTx != null ? html`<dt>${t("air_util")}</dt><dd>${dm.airUtilTx.toFixed(2)}%</dd>` : ""}
                  ${dm.uptimeSeconds != null ? html`<dt>${t("uptime")}</dt><dd>${formatDuration(dm.uptimeSeconds)}</dd>` : ""}
                </dl>`
            : ""}

          ${Object.keys(env).length
            ? html`<h3>${t("environment")}</h3>
                <dl class="kv">
                  ${Object.entries(env).map(
                    ([k, v]) => html`<dt>${humanize(k.replace(/([A-Z])/g, "_$1").toLowerCase())}</dt>
                      <dd>${typeof v === "number" ? Math.round(v * 100) / 100 : v}</dd>`
                  )}
                </dl>`
            : ""}

          ${isMe
            ? ""
            : html`<h3>${t("traceroutes")}</h3>
                ${traces.length
                  ? traces.map((tr) => this._renderTrace(tr))
                  : html`<div class="muted small">${t("no_traceroutes")}</div>`}`}

          ${p.isAdmin && !isMe
            ? html`<div class="actions admin">
                <button class="btn" ?disabled=${!connected} @click=${() => this._action(n.isFavorite ? "unfavorite" : "favorite")}>
                  <ha-icon icon=${n.isFavorite ? "mdi:star-off" : "mdi:star"}></ha-icon>${t(n.isFavorite ? "unfavorite" : "favorite")}
                </button>
                <button class="btn" ?disabled=${!connected} @click=${() => this._action(n.isIgnored ? "unignore" : "ignore")}>
                  <ha-icon icon=${n.isIgnored ? "mdi:eye" : "mdi:eye-off"}></ha-icon>${t(n.isIgnored ? "unignore" : "ignore")}
                </button>
                <button class="btn danger" ?disabled=${!connected} @click=${() => this._action("remove_node", `${t("remove_node")}?`)}>
                  <ha-icon icon="mdi:delete"></ha-icon>${t("remove_node")}
                </button>
              </div>`
            : ""}
        </div>
      </div>
    `;
  }

  _renderTrace(tr) {
    const p = this.panel;
    const t = p.t;
    const name = (num) => shortName(p.nodes.get(num), num);
    const snr = (list, i) => (list && list[i] != null && list[i] !== -128 ? ` (${(list[i] / 4).toFixed(1)} dB)` : "");
    const towards = [p.myNum, ...tr.route, tr.target];
    const back = [tr.target, ...tr.route_back, p.myNum];
    return html`<div class="trace">
      <div class="muted small">${formatTime(tr.time, t.lang)}</div>
      <div><span class="muted small">${t("towards")}:</span> ${towards.map((n, i) => `${i ? " → " : ""}${name(n)}${i ? snr(tr.snr_towards, i - 1) : ""}`).join("")}</div>
      ${tr.snr_back?.length || tr.route_back?.length
        ? html`<div><span class="muted small">${t("back")}:</span> ${back.map((n, i) => `${i ? " → " : ""}${name(n)}${i ? snr(tr.snr_back, i - 1) : ""}`).join("")}</div>`
        : ""}
    </div>`;
  }

  static styles = [
    shared,
    css`
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
        width: min(560px, 100vw);
        max-height: min(85vh, 100%);
        display: flex;
        flex-direction: column;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        overflow: hidden;
      }
      @media (max-width: 600px) {
        .dialog {
          max-height: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
      .head {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }
      .name {
        font-size: 1.2em;
        font-weight: 500;
      }
      .body {
        padding: 16px;
        overflow-y: auto;
      }
      h3 {
        font-size: 1em;
        font-weight: 500;
        margin: 16px 0 8px;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
      }
      .actions.admin {
        margin: 16px 0 0;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
      }
      .trace {
        padding: 6px 0;
        border-bottom: 1px solid var(--divider-color);
      }
      a {
        color: var(--primary-color);
      }
    `,
  ];
}

customElements.define("mm-node-dialog", MmNodeDialog);
