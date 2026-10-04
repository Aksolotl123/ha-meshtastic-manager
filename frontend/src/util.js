export const BROADCAST = 0xffffffff;

export const nodeId = (num) => "!" + (num >>> 0).toString(16).padStart(8, "0");

export function nodeName(node, num) {
  const user = node?.user;
  if (user?.longName) return user.longName;
  return nodeId(num ?? node?.num ?? 0);
}

export function shortName(node, num) {
  const user = node?.user;
  if (user?.shortName) return user.shortName;
  return nodeId(num ?? node?.num ?? 0).slice(-4);
}

export function timeAgo(ts, t) {
  if (!ts) return t("never");
  const s = Math.max(0, Date.now() / 1000 - ts);
  if (s < 60) return t("just_now");
  const units = t.lang === "pl"
    ? [[86400, "d"], [3600, "h"], [60, "min"]]
    : [[86400, "d"], [3600, "h"], [60, "min"]];
  for (const [size, label] of units) {
    if (s >= size) return `${Math.floor(s / size)} ${label} ${t("ago")}`;
  }
  return t("just_now");
}

export function formatTime(ts, lang) {
  const d = new Date(ts * 1000);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  const time = d.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
  if (sameDay) return time;
  return d.toLocaleDateString(lang, { day: "numeric", month: "short" }) + " " + time;
}

export function formatDuration(seconds) {
  if (seconds == null) return "—";
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d) return `${d}d ${h}h`;
  if (h) return `${h}h ${m}m`;
  return `${m}m`;
}

export function position(node) {
  const p = node?.position;
  if (!p) return null;
  const lat = p.latitude ?? (p.latitudeI != null ? p.latitudeI * 1e-7 : null);
  const lon = p.longitude ?? (p.longitudeI != null ? p.longitudeI * 1e-7 : null);
  if (lat == null || lon == null || (lat === 0 && lon === 0)) return null;
  return { lat, lon, alt: p.altitude };
}

export function distanceKm(a, b) {
  if (!a || !b) return null;
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

export function formatDistance(km) {
  if (km == null) return "—";
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(km < 10 ? 1 : 0)} km`;
}

export const byteLength = (s) => new TextEncoder().encode(s).length;

// Channel display name: the radio leaves the primary channel name empty when
// it uses the modem preset name.
export function channelName(ch, lora, t) {
  const name = ch?.settings?.name;
  if (name) return name;
  if (ch?.role === "PRIMARY") {
    const preset = lora?.modem_preset;
    return preset ? presetName(preset) : t("primary");
  }
  return `${t("channel")} ${ch?.index ?? ""}`;
}

export function presetName(preset) {
  return preset
    .split("_")
    .map((p) => p.charAt(0) + p.slice(1).toLowerCase())
    .join("");
}

export function pskKind(psk) {
  if (!psk) return "psk_none";
  // base64 of a single byte is 4 chars ("AQ==" = default key 1)
  if (psk.length <= 4) return psk === "AA==" ? "psk_none" : "psk_default";
  return "psk_custom";
}

export function randomKey() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export function hopsLabel(hops, t) {
  if (hops == null) return "";
  if (hops === 0) return t("direct_hop");
  if (t.lang !== "pl") return `${hops} ${hops === 1 ? "hop" : "hops"}`;
  const mod10 = hops % 10;
  const mod100 = hops % 100;
  const word = hops === 1 ? "skok" : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? "skoki" : "skoków";
  return `${hops} ${word}`;
}
