"""Constants for the Meshtastic Manager integration."""

from __future__ import annotations

from typing import Final

DOMAIN: Final = "meshtastic_manager"

CONF_CONNECTION_TYPE: Final = "connection_type"
CONF_DEVICE: Final = "device"
CONF_HOST: Final = "host"
CONF_PORT: Final = "port"

CONNECTION_SERIAL: Final = "serial"
CONNECTION_TCP: Final = "tcp"

DEFAULT_TCP_PORT: Final = 4403

# Time we give the radio to finish streaming its config + node database.
CONNECT_TIMEOUT: Final = 120
# Reconnect backoff bounds (seconds).
RECONNECT_MIN: Final = 5
RECONNECT_MAX: Final = 300

# A node counts as "online" if it was heard within this window (seconds).
ONLINE_WINDOW: Final = 2 * 3600

# Message history cap per config entry.
MAX_MESSAGES: Final = 5000
MAX_TRACEROUTES: Final = 200
STORAGE_VERSION: Final = 1
STORAGE_SAVE_DELAY: Final = 10

# Meshtastic text payload limit (bytes).
MAX_TEXT_BYTES: Final = 200

BROADCAST_NUM: Final = 0xFFFFFFFF

PANEL_URL_PATH: Final = "meshtastic"
PANEL_ELEMENT: Final = "meshtastic-manager-panel"
PANEL_STATIC_URL: Final = "/meshtastic_manager_static"
PANEL_ICON: Final = "mdi:radio-tower"
PANEL_TITLE: Final = "Meshtastic"

EVENT_MESSAGE: Final = f"{DOMAIN}_message"

# Dispatcher signal for entity updates, formatted with the config entry id.
SIGNAL_UPDATE: Final = f"{DOMAIN}_update_{{}}"
