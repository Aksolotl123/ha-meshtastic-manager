import { LitElement, html, css, unsafeCSS } from "lit";
import L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css";
import { shared } from "../styles.js";
import { nodeName, position, shortName, timeAgo } from "../util.js";

const RECENT = 2 * 3600;
const STALE = 24 * 3600;

class MmMap extends LitElement {
  static properties = {
    panel: { attribute: false },
    rev: { type: Number },
    _routes: { state: true },
  };

  constructor() {
    super();
    this._routes = true;
    this._markers = new Map();
    this._fitted = false;
  }

  firstUpdated() {
    const el = this.renderRoot.querySelector("#map");
    this._map = L.map(el, { zoomControl: true, attributionControl: true }).setView([52, 19], 6);
    this._addTiles();
    this._routeLayer = L.layerGroup().addTo(this._map);
    this._resize = new ResizeObserver(() => this._map.invalidateSize());
    this._resize.observe(el);
    this._sync();
  }

  // Tiles come through Home Assistant's own OSM proxy (HA 2026.9+), which needs
  // a short-lived token; OSM refuses direct requests without a Referer.
  async _addTiles() {
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    let token = null;
    try {
      token = (await this.panel.hass.connection.sendMessagePromise({ type: "map_tiles/access_token" })).token;
    } catch {
      /* older Home Assistant without the proxy */
    }
    if (!this._map) return;
    if (token) {
      this._tiles = L.tileLayer("/api/map_tiles/raster/{z}/{x}/{y}.png?token={token}", {
        attribution,
        maxZoom: 20,
        maxNativeZoom: 19,
        token,
      }).addTo(this._map);
      this._tokenTimer = setInterval(async () => {
        try {
          const fresh = await this.panel.hass.connection.sendMessagePromise({ type: "map_tiles/access_token" });
          this._tiles.options.token = fresh.token;
        } catch {
          /* keep the old token */
        }
      }, 20 * 60 * 1000);
    } else {
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution,
        maxZoom: 19,
        referrerPolicy: "origin",
      }).addTo(this._map);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._tokenTimer);
    this._resize?.disconnect();
    this._map?.remove();
    this._map = null;
  }

  updated(changed) {
    if (this._map && (changed.has("rev") || changed.has("_routes"))) this._sync();
  }

  _sync() {
    const p = this.panel;
    const t = p.t;
    const now = Date.now() / 1000;
    const seen = new Set();
    const points = [];
    for (const n of p.nodes.values()) {
      const pos = position(n);
      if (!pos) continue;
      seen.add(n.num);
      points.push([pos.lat, pos.lon]);
      const isMe = n.num === p.myNum;
      const age = isMe ? 0 : now - (n.lastHeard || 0);
      const color = isMe ? "#2196f3" : age < RECENT ? "#43a047" : age < STALE ? "#ffa600" : "#9e9e9e";
      let marker = this._markers.get(n.num);
      if (!marker) {
        marker = L.circleMarker([pos.lat, pos.lon], { weight: 2, fillOpacity: 0.8 }).addTo(this._map);
        marker.on("click", () => p.openNode(n.num));
        this._markers.set(n.num, marker);
      }
      marker.setLatLng([pos.lat, pos.lon]);
      marker.setStyle({ color: "#fff", fillColor: color, radius: isMe ? 10 : 8 });
      marker.bindTooltip(
        `<b>${escapeHtml(shortName(n))}</b> ${escapeHtml(nodeName(n))}<br>${isMe ? t("you") : timeAgo(n.lastHeard, t)}`,
        { direction: "top", offset: [0, -8] }
      );
    }
    for (const [num, marker] of this._markers) {
      if (!seen.has(num)) {
        marker.remove();
        this._markers.delete(num);
      }
    }
    this._drawRoutes();
    if (!this._fitted && points.length) {
      this._fitted = true;
      if (points.length === 1) this._map.setView(points[0], 13);
      else this._map.fitBounds(points, { padding: [40, 40], maxZoom: 14 });
    }
    this._withoutPosition = p.nodes.size - seen.size;
  }

  _drawRoutes() {
    const p = this.panel;
    this._routeLayer.clearLayers();
    if (!this._routes) return;
    const latest = new Map();
    for (const tr of p.traceroutes) latest.set(tr.target, tr);
    for (const tr of latest.values()) {
      const path = [p.myNum, ...tr.route, tr.target]
        .map((num) => position(p.nodes.get(num)))
        .filter(Boolean)
        .map((pos) => [pos.lat, pos.lon]);
      if (path.length > 1) {
        L.polyline(path, { color: "#e040fb", weight: 3, dashArray: "8 6", opacity: 0.9 }).addTo(this._routeLayer);
      }
    }
  }

  render() {
    const t = this.panel.t;
    const dark = this.panel.hass?.themes?.darkMode;
    const without = this._withoutPosition ?? 0;
    return html`
      <div class="wrap ${dark ? "dark" : ""}">
        <div id="map"></div>
        <div class="overlay card small">
          <label class="row">
            <input type="checkbox" .checked=${this._routes} @change=${(e) => (this._routes = e.target.checked)} />
            ${t("traceroutes")}
          </label>
          ${without ? html`<div class="muted">${without} ${t("nodes_without_position")}</div>` : ""}
          ${this.panel.nodes.size && without === this.panel.nodes.size ? html`<div>${t("no_positions")}</div>` : ""}
        </div>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(leafletCss),
    shared,
    css`
      :host {
        display: block;
        height: 100%;
      }
      .wrap {
        position: relative;
        height: 100%;
      }
      #map {
        position: absolute;
        inset: 0;
        background: var(--secondary-background-color);
      }
      .wrap.dark .leaflet-tile-pane {
        filter: invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(0.9);
      }
      .overlay {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 500;
        padding: 8px 12px;
      }
      .leaflet-tooltip {
        font-family: inherit;
      }
    `,
  ];
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

customElements.define("mm-map", MmMap);
