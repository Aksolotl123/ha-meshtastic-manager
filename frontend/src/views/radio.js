import { LitElement, html, css } from "lit";
import { shared } from "../styles.js";
import { channelName, formatDuration, nodeId, presetName, pskKind } from "../util.js";

const ONLINE_WINDOW = 2 * 3600;

class MmRadio extends LitElement {
  static properties = { panel: { attribute: false }, rev: { type: Number } };

  render() {
    const p = this.panel;
    const t = p.t;
    const data = p.data;
    const me = p.myNode || {};
    const user = me.user || {};
    const metrics = me.deviceMetrics || {};
    const stats = data.local_stats || {};
    const lora = data.lora || {};
    const meta = data.metadata || {};
    const now = Date.now() / 1000;
    const nodes = [...p.nodes.values()].filter((n) => n.num !== p.myNum);
    const online = nodes.filter((n) => n.lastHeard && now - n.lastHeard < ONLINE_WINDOW).length;
    const battery = metrics.batteryLevel;
    const channels = (data.channels || []).filter((c) => c.role && c.role !== "DISABLED");

    return html`
      <div class="grid">
        <div class="card">
          <h2>${t("device")}</h2>
          <dl class="kv">
            <dt>${t("long_name")}</dt><dd>${user.longName || "—"}</dd>
            <dt>${t("short_name")}</dt><dd>${user.shortName || "—"}</dd>
            <dt>${t("node_id")}</dt><dd>${p.myNum != null ? nodeId(p.myNum) : "—"}</dd>
            <dt>${t("hardware")}</dt><dd>${user.hwModel || "—"}</dd>
            <dt>${t("firmware")}</dt><dd>${meta.firmware_version || "—"}</dd>
            <dt>${t("role")}</dt><dd>${user.role || "CLIENT"}</dd>
            <dt>${t("region")}</dt><dd>${lora.region || "—"}</dd>
            <dt>${t("preset")}</dt><dd>${lora.modem_preset ? presetName(lora.modem_preset) : "—"}</dd>
          </dl>
        </div>

        <div class="card">
          <h2>${t("status")}</h2>
          <dl class="kv">
            <dt>${t("connection")}</dt>
            <dd>
              <span class=${data.status.connected ? "ok" : "err"}>
                ${data.status.connected ? t("connected") : t("disconnected")}
              </span>
              <span class="muted small">${data.status.connection}</span>
            </dd>
            <dt>${t("uptime")}</dt><dd>${formatDuration(metrics.uptimeSeconds)}</dd>
            <dt>${t("battery")}</dt>
            <dd>${battery == null ? "—" : battery > 100 ? t("powered") : `${battery}%`}</dd>
            <dt>${t("voltage")}</dt><dd>${metrics.voltage != null ? `${metrics.voltage.toFixed(2)} V` : "—"}</dd>
            <dt>${t("channel_util")}</dt>
            <dd>${this._bar(metrics.channelUtilization, 25, 50)}</dd>
            <dt>${t("air_util")}</dt>
            <dd>${this._bar(metrics.airUtilTx, 5, 10)}</dd>
            <dt>${t("nodes_online")}</dt><dd>${online} / ${nodes.length}</dd>
            <dt>${t("packets")}</dt>
            <dd>
              ${stats.numPacketsTx != null
                ? html`${stats.numPacketsTx} ${t("sent")} · ${stats.numPacketsRx ?? 0} ${t("received")} ·
                    ${stats.numPacketsRxBad ?? 0} ${t("bad")} · ${stats.numTxRelay ?? 0} ${t("relayed")}`
                : "—"}
            </dd>
          </dl>
        </div>

        <div class="card wide">
          <h2>${t("channels")}</h2>
          <table>
            <thead>
              <tr><th>#</th><th>${t("name")}</th><th>${t("role")}</th><th>${t("psk")}</th><th>MQTT</th></tr>
            </thead>
            <tbody>
              ${channels.map(
                (c) => html`<tr>
                  <td>${c.index}</td>
                  <td>${channelName(c, lora, t)}</td>
                  <td>${c.role === "PRIMARY" ? t("primary") : t("secondary")}</td>
                  <td>${t(pskKind(c.settings?.psk))}</td>
                  <td class="muted small">
                    ${c.settings?.uplink_enabled ? "↑" : ""}${c.settings?.downlink_enabled ? "↓" : ""}
                  </td>
                </tr>`
              )}
            </tbody>
          </table>
        </div>

        ${p.isAdmin
          ? html`<div class="card wide">
              <h2>${t("actions")}</h2>
              <div class="actions">
                <button class="btn" @click=${() => this._reconnect()}>
                  <ha-icon icon="mdi:connection"></ha-icon>${t("reconnect")}
                </button>
                <button class="btn" ?disabled=${!data.status.connected} @click=${() => p.action("set_time")}>
                  <ha-icon icon="mdi:clock-check-outline"></ha-icon>${t("set_time")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!data.status.connected}
                  @click=${() => p.action("reboot", {}, { confirmText: `${t("reboot")}?` })}
                >
                  <ha-icon icon="mdi:restart"></ha-icon>${t("reboot")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!data.status.connected}
                  @click=${() => p.action("shutdown", {}, { confirmText: `${t("shutdown")}? ${t("confirm_action")}` })}
                >
                  <ha-icon icon="mdi:power"></ha-icon>${t("shutdown")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!data.status.connected}
                  @click=${() => p.action("reset_nodedb", {}, { confirmText: `${t("reset_nodedb")}? ${t("confirm_action")}` })}
                >
                  <ha-icon icon="mdi:database-remove"></ha-icon>${t("reset_nodedb")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!data.status.connected}
                  @click=${() =>
                    p.action("factory_reset_config", {}, { confirmText: `${t("factory_reset_config")}? ${t("confirm_action")}` })}
                >
                  <ha-icon icon="mdi:backup-restore"></ha-icon>${t("factory_reset_config")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!data.status.connected}
                  @click=${() =>
                    p.action("factory_reset_device", {}, { confirmText: `${t("factory_reset_device")}? ${t("confirm_action")}` })}
                >
                  <ha-icon icon="mdi:alert"></ha-icon>${t("factory_reset_device")}
                </button>
              </div>
            </div>`
          : ""}
      </div>
    `;
  }

  _bar(value, warn, bad) {
    if (value == null) return "—";
    const cls = value >= bad ? "err" : value >= warn ? "warn" : "ok";
    return html`<div class="bar-wrap">
      <div class="bar"><div class="fill ${cls}" style="width:${Math.min(100, value)}%"></div></div>
      <span>${value.toFixed(1)}%</span>
    </div>`;
  }

  async _reconnect() {
    try {
      await this.panel.ws("reconnect");
      this.panel.toast(this.panel.t("connecting"));
    } catch (err) {
      this.panel.toast(`${this.panel.t("error")}: ${err.message || err}`, true);
    }
  }

  static styles = [
    shared,
    css`
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .wide {
        grid-column: 1 / -1;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .bar-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .bar {
        flex: 1;
        max-width: 160px;
        height: 8px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .fill {
        height: 100%;
      }
      .fill.ok {
        background: var(--success-color, #43a047);
      }
      .fill.warn {
        background: var(--warning-color, #ffa600);
      }
      .fill.err {
        background: var(--error-color, #db4437);
      }
      table {
        overflow-x: auto;
      }
    `,
  ];
}

customElements.define("mm-radio", MmRadio);
