import { LitElement, html, css } from "lit";
import { shared, nodeColor } from "../styles.js";
import { distanceKm, formatDistance, hopsLabel, nodeId, position, shortName, timeAgo } from "../util.js";

const WINDOWS = { any: 0, h1: 3600, h24: 86400, d7: 7 * 86400 };

class MmNodes extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    _query: { state: true },
    _sort: { state: true },
    _desc: { state: true },
    _window: { state: true },
    _favorites: { state: true },
  };

  constructor() {
    super();
    this._query = "";
    this._sort = "lastHeard";
    this._desc = true;
    this._window = "any";
    this._favorites = false;
  }

  _rows() {
    const p = this.panel;
    const me = position(p.myNode);
    const now = Date.now() / 1000;
    const q = this._query.trim().toLowerCase();
    const win = WINDOWS[this._window];
    let rows = [...p.nodes.values()].map((n) => ({
      node: n,
      name: n.user?.longName || "",
      short: n.user?.shortName || "",
      id: nodeId(n.num),
      lastHeard: n.num === p.myNum ? now : n.lastHeard || 0,
      hops: n.hopsAway ?? null,
      snr: n.snr ?? null,
      battery: n.deviceMetrics?.batteryLevel ?? null,
      distance: n.num === p.myNum ? 0 : distanceKm(me, position(n)),
      hw: n.user?.hwModel || "",
      role: n.user?.role || "CLIENT",
    }));
    if (q) rows = rows.filter((r) => `${r.name} ${r.short} ${r.id} ${r.hw}`.toLowerCase().includes(q));
    if (win) rows = rows.filter((r) => r.lastHeard && now - r.lastHeard <= win);
    if (this._favorites) rows = rows.filter((r) => r.node.isFavorite || r.node.num === p.myNum);
    const key = this._sort;
    const dir = this._desc ? -1 : 1;
    rows.sort((a, b) => {
      // Our own node always first, then favorites.
      if (a.node.num === p.myNum) return -1;
      if (b.node.num === p.myNum) return 1;
      if (!!a.node.isFavorite !== !!b.node.isFavorite) return a.node.isFavorite ? -1 : 1;
      const va = a[key];
      const vb = b[key];
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      return (typeof va === "string" ? va.localeCompare(vb) : va - vb) * dir;
    });
    return rows;
  }

  _sortBy(key) {
    if (this._sort === key) this._desc = !this._desc;
    else {
      this._sort = key;
      this._desc = key === "lastHeard" || key === "snr" || key === "battery";
    }
  }

  render() {
    const p = this.panel;
    const t = p.t;
    const rows = this._rows();
    const th = (key, label) =>
      html`<th @click=${() => this._sortBy(key)}>
        ${label}${this._sort === key ? (this._desc ? " ▾" : " ▴") : ""}
      </th>`;
    return html`
      <div class="filters">
        <input class="search" type="search" placeholder=${t("search")} .value=${this._query} @input=${(e) => (this._query = e.target.value)} />
        <label class="row small">
          ${t("heard_within")}
          <select @change=${(e) => (this._window = e.target.value)}>
            ${Object.keys(WINDOWS).map(
              (k) => html`<option value=${k} ?selected=${this._window === k}>${t(k === "any" ? "any_time" : k)}</option>`
            )}
          </select>
        </label>
        <label class="row small">
          <input type="checkbox" .checked=${this._favorites} @change=${(e) => (this._favorites = e.target.checked)} />
          ${t("favorites_only")}
        </label>
        <span class="muted small count">${rows.length} / ${p.nodes.size}</span>
      </div>
      <div class="card table-card">
        <table>
          <thead>
            <tr>
              <th></th>
              ${th("name", t("name"))}
              ${th("id", t("node_id"))}
              ${th("hw", t("hardware"))}
              ${th("role", t("role"))}
              ${th("hops", "Hops")}
              ${th("snr", t("snr"))}
              ${th("battery", t("battery"))}
              ${th("distance", t("distance"))}
              ${th("lastHeard", t("last_heard"))}
            </tr>
          </thead>
          <tbody>
            ${rows.map((r) => this._renderRow(r))}
          </tbody>
        </table>
      </div>
    `;
  }

  _renderRow(r) {
    const p = this.panel;
    const t = p.t;
    const n = r.node;
    const isMe = n.num === p.myNum;
    return html`<tr class="clickable ${n.isIgnored ? "ignored" : ""}" @click=${() => p.openNode(n.num)}>
      <td>
        <div class="avatar mini" style="background:${nodeColor(n.num)}">${shortName(n)}</div>
      </td>
      <td class="name">
        ${n.isFavorite ? html`<ha-icon class="star" icon="mdi:star"></ha-icon>` : ""}
        ${r.name || r.id}
        ${isMe ? html`<span class="chip">${t("you")}</span>` : ""}
        ${n.isIgnored ? html`<span class="chip">${t("ignored")}</span>` : ""}
        ${n.viaMqtt ? html`<span class="chip">MQTT</span>` : ""}
      </td>
      <td class="muted mono">${r.id}</td>
      <td class="muted small">${r.hw}</td>
      <td class="muted small">${r.role}</td>
      <td>${isMe ? "" : hopsLabel(r.hops, t)}</td>
      <td>${isMe || r.snr == null ? "" : `${r.snr} dB`}</td>
      <td>${r.battery == null ? "" : r.battery > 100 ? "⚡" : `${r.battery}%`}</td>
      <td>${isMe ? "" : formatDistance(r.distance)}</td>
      <td class="muted">${isMe ? "" : timeAgo(r.lastHeard, t)}</td>
    </tr>`;
  }

  static styles = [
    shared,
    css`
      .filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }
      .search {
        flex: 1;
        min-width: 200px;
        max-width: 400px;
      }
      .count {
        margin-left: auto;
      }
      .table-card {
        padding: 0;
        overflow-x: auto;
      }
      .avatar.mini {
        width: 32px;
        height: 32px;
        font-size: 0.7em;
      }
      td.name {
        font-weight: 500;
      }
      .star {
        --mdc-icon-size: 16px;
        color: var(--warning-color, #ffa600);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
      tr.ignored {
        opacity: 0.5;
      }
    `,
  ];
}

customElements.define("mm-nodes", MmNodes);
