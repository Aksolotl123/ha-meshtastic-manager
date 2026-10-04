# Meshtastic Manager for Home Assistant

A full management UI for a [Meshtastic](https://meshtastic.org) radio inside Home Assistant.
Plug a radio into your Home Assistant host over USB (or reach one over the network) and get a
sidebar page that works like the Meshtastic app: chat, node list, map, traceroutes and the complete
radio configuration. The radio also shows up as an ordinary device with sensors and a message event
for automations.

> **Status: early beta.** Tested on Home Assistant 2026.9 (HAOS, Raspberry Pi 5) against a simulated
> radio. Please report problems with real hardware in the issue tracker.

## Features

**Sidebar panel** (`/meshtastic`, Polish and English UI):

- **Radio**: owner, hardware, firmware, region and preset, battery, voltage, channel utilisation,
  airtime, packet counters, channels. Admins can reconnect, reboot, shut down, sync the clock,
  reset the node database or factory-reset the radio.
- **Messages**: chat per channel and per direct-message thread, replies, a 200-byte counter and
  delivery status (sending, heard by the mesh, delivered, failed, unconfirmed). History is kept by
  Home Assistant, so nothing is lost while your phone is off.
- **Nodes**: searchable, sortable list with hops, SNR, battery, distance and last-heard time.
  Node details show position, device and environment metrics and traceroute results. From there
  you can send a DM, run a traceroute, request position, telemetry or user info, and mark the node
  as favourite or ignored, or remove it.
- **Map**: nodes coloured by how recently they were heard, plus traceroute paths. Tiles come
  through Home Assistant's own OpenStreetMap proxy.
- **Settings** (admins only): owner names, the 8 channel slots (role, name, PSK
  random/default/none, uplink/downlink, position precision), a fixed position, and **every config and
  module section** of the firmware. Forms are generated from the Meshtastic protobuf definitions,
  so new firmware options appear automatically.

**Entities** for the local radio: connectivity, battery, voltage, channel utilisation, airtime,
uptime, nodes online/known, messages today, packet counters (disabled by default), and a
`Message` event entity (`direct_message` / `channel_message`).

**Action** `meshtastic_manager.send_text` (text, optional `to` node id like `!a1b2c3d4`,
`channel` 0–7). Every received text also fires the `meshtastic_manager_message` event.

## Installation

### HACS

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/Aksolotl123/ha-meshtastic-manager`
   as an **Integration**.
2. Install **Meshtastic Manager** and restart Home Assistant.
3. **Settings → Devices & services → Add integration → Meshtastic Manager**.

### Manual

Copy `custom_components/meshtastic_manager` into your `config/custom_components/` and restart.

## Connecting the radio

- **USB / serial**: plug the radio into the Home Assistant host and pick it from the list. The
  integration stores the stable `/dev/serial/by-id/…` path, so it keeps working after reboots. Use
  a data USB cable: many cables only carry power. Only one program can use the port at a time.
- **Network (TCP)**: radios with Wi-Fi or Ethernet, or `meshtasticd`, on port 4403.

Connecting can take up to a minute while the radio sends its node database. If the radio goes
away, Home Assistant reconnects automatically with backoff.

## Automation example

```yaml
triggers:
  - trigger: state
    entity_id: event.home_gateway_message
    attribute: event_type
    to: direct_message
actions:
  - action: notify.mobile_app_phone
    data:
      title: "Meshtastic: {{ trigger.to_state.attributes.from_name }}"
      message: "{{ trigger.to_state.attributes.text }}"
```

## Development

- Backend: `custom_components/meshtastic_manager`. It uses the official
  [`meshtastic`](https://pypi.org/project/meshtastic/) Python library; all blocking calls run in the
  executor.
- Frontend: `frontend/src` (Lit + Leaflet), bundled with esbuild into
  `custom_components/meshtastic_manager/frontend/`: `cd frontend && npm install && npm run build`.
- `tests/fake_radio.py` is a simulated radio speaking the Meshtastic TCP stream protocol, for UI
  work without hardware (`python tests/fake_radio.py`, then add the integration as TCP
  `127.0.0.1:4403`).
- Tests: `pip install meshtastic pytest && pytest tests`.

## License

MIT
