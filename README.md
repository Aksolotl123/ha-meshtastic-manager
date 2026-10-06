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
- **Messages** (admins only): chat per channel and per direct-message thread, replies, a 200-byte counter and
  delivery status (sending, heard by the mesh, delivered, failed, unconfirmed). History is kept by
  Home Assistant, so nothing is lost while your phone is off.
- **Nodes**: searchable, sortable list with hops, SNR, battery, distance and last-heard time.
  Node details show position, device and environment metrics and traceroute results. From there
  admins can send a DM, run a traceroute, request position, telemetry or user info (each request
  is a radio transmission), and mark the node as favourite or ignored, or remove it.
- **Map**: nodes coloured by how recently they were heard, plus traceroute paths. Tiles come
  through Home Assistant's own OpenStreetMap proxy.
- **Channels** (admins only): create a channel (name, random/default/own key or none, position
  precision, MQTT up/downlink, mute), join channels from a Meshtastic share link (add to yours, or
  replace all channels and the LoRa settings, which reboots the radio), edit, delete (later channels
  move up), and share one or all channels as a link with a QR code for the phone app.
- **Settings** (admins only): owner names, a fixed position, and **every config and
  module section** of the firmware. Forms are generated from the Meshtastic protobuf definitions,
  so new firmware options appear automatically.

**Entities** for the local radio: connectivity, battery, voltage, channel utilisation, airtime,
uptime, nodes online/known, messages today, packet counters (disabled by default), and a
`Message` event entity (`direct_message` / `channel_message`). Its attributes are visible to every
Home Assistant user, so they carry only message metadata, never the text or the sender.

## Automations

**Actions**

| Action | What it does |
|---|---|
| `meshtastic_manager.send_text` | Send a message: `text`, optional `to` (node id like `!a1b2c3d4`, empty = broadcast), `channel` (0–7) or `channel_name` |
| `meshtastic_manager.add_channel` | Create a secondary channel (`name`, `key`: random/default/none/custom, `position_precision`, MQTT up/downlink, `muted`). Returns the slot index, never the key |
| `meshtastic_manager.delete_channel` | Delete a channel by `name` or `index` (later channels move up) |
| `meshtastic_manager.join_channel` | Add channels from a share `url`; `replace: true` replaces all channels and the LoRa settings (radio reboots) |

All actions, including `send_text`, require an administrator, or run from an automation.

**Message event**: every new incoming text fires `meshtastic_manager_message`, and the
`Message` event entity changes as well. The event data contains `text`, `from` (`!a1b2c3d4`),
`from_num`, `from_name`, `from_short_name`, `direct`, `channel`, `channel_name`, `pki`
(true for direct messages encrypted with the sender's key, firmware 2.5+), `hops`, `snr`,
`rssi`, `via_mqtt`, `message_id`, `entry_id`. Retransmissions of the same packet do not fire
the event again. The `Message` event entity carries the same fields **without** `text`,
`from`, `from_num`, `from_name`, `from_short_name` and `entry_id` (reading messages is
admin-only, entity attributes are not) — trigger automations on the `meshtastic_manager_message`
event to use the text or the sender.

**Blueprints**: control a lock from your Meshtastic radio.

- **Unlock with a direct message**
  ([import](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2FAksolotl123%2Fha-meshtastic-manager%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fmeshtastic_manager%2Flock_unlock_with_direct_message.yaml)):
  you send `otwórz` / `open` as a direct message from your radio to the Home Assistant radio and
  the lock opens, no code needed. Only PKI-encrypted direct messages (firmware 2.5+) are accepted;
  channel messages and direct messages without PKI are ignored. Optionally the lock is locked
  again after N minutes; your notification action runs after unlocking and relocking.
- **Unlock with a one-time code**
  ([import](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2FAksolotl123%2Fha-meshtastic-manager%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fmeshtastic_manager%2Flock_unlock_with_code.yaml)):
  you send `otwórz` / `open`, Home Assistant answers with a random code of 4-6 digits, and the
  lock opens only if you send that code back within the time limit. Each code accepts one answer. A recorded or replayed message
  cannot open the door because the code changes every time. Optionally the lock is locked again
  after N minutes, and every attempt, successful or not, triggers your notification action.
- **Lock with a message**
  ([import](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2FAksolotl123%2Fha-meshtastic-manager%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fmeshtastic_manager%2Flock_with_message.yaml)):
  `zamknij` / `lock` locks immediately.

Security notes: only the configured sender node is accepted. With a channel name, commands must
arrive on that private channel. Anyone who knows the channel key can read the code there, so
keep the key private. With the channel name left empty, only PKI-encrypted direct messages are
accepted, which also authenticate the sender (recommended). PKI direct messages cannot be forged
without the private key of one of the two radios. A recorded packet transmitted again later is
ignored too: the integration permanently remembers the packet ids of the PKI direct messages it
has received (the last 1000 per sender) and logs a warning when one comes again.

Example notification on any direct message:

```yaml
triggers:
  - trigger: event
    event_type: meshtastic_manager_message
    event_data:
      direct: true
actions:
  - action: notify.mobile_app_phone
    data:
      title: "Meshtastic: {{ trigger.event.data.from_name }}"
      message: "{{ trigger.event.data.text }}"
```

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

## Development

- Backend: `custom_components/meshtastic_manager`. It uses the official
  [`meshtastic`](https://pypi.org/project/meshtastic/) Python library; all blocking calls run in the
  executor.
- Frontend: `frontend/src` (Lit + Leaflet), bundled with esbuild into
  `custom_components/meshtastic_manager/frontend/`: `cd frontend && npm install && npm run build`.
- `tests/fake_radio.py` is a simulated radio speaking the Meshtastic TCP stream protocol, for UI
  work without hardware (`python tests/fake_radio.py`, then add the integration as TCP
  `127.0.0.1:4403`). Send `<from hex>|<channel or dm>|<text>` as a UDP datagram to port 4404
  to inject a message, e.g. `printf '10000000|1|open' | nc -u -w1 127.0.0.1 4404`.
- Tests: `pip install meshtastic pytest && pytest tests`.

## License

MIT
