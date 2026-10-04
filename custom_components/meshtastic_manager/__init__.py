"""Meshtastic Manager: full management UI for a Meshtastic radio in Home Assistant."""

from __future__ import annotations

import logging
from pathlib import Path

import voluptuous as vol

from homeassistant.components import panel_custom
from homeassistant.components.frontend import async_remove_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from . import websocket_api
from .client import MeshtasticClient
from .const import (
    BROADCAST_NUM,
    DOMAIN,
    MAX_TEXT_BYTES,
    PANEL_ELEMENT,
    PANEL_ICON,
    PANEL_STATIC_URL,
    PANEL_TITLE,
    PANEL_URL_PATH,
)
from .store import MeshStore

_LOGGER = logging.getLogger(__name__)

PLATFORMS = [Platform.BINARY_SENSOR, Platform.EVENT, Platform.SENSOR]

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

type MeshtasticConfigEntry = ConfigEntry[MeshtasticClient]

SERVICE_SEND_TEXT = "send_text"
SEND_TEXT_SCHEMA = vol.Schema(
    {
        vol.Optional("config_entry_id"): cv.string,
        vol.Required("text"): cv.string,
        vol.Optional("to"): cv.string,
        vol.Optional("channel", default=0): vol.All(vol.Coerce(int), vol.Range(min=0, max=7)),
    }
)

_DATA_PANEL = f"{DOMAIN}_panel"


def parse_node(value: str | int | None) -> int:
    """Parse '!a1b2c3d4', 'a1b2c3d4', a decimal string or int into a node number."""
    if value is None or value in ("", "broadcast", "^all"):
        return BROADCAST_NUM
    if isinstance(value, int):
        return value
    text = value.strip()
    if text.startswith("!"):
        return int(text[1:], 16)
    if text.isdigit():
        return int(text)
    return int(text, 16)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register WebSocket commands and actions."""
    websocket_api.async_register(hass)

    async def _send_text(call: ServiceCall) -> dict:
        client = _client_for_call(hass, call.data.get("config_entry_id"))
        text: str = call.data["text"]
        if len(text.encode()) > MAX_TEXT_BYTES:
            raise ServiceValidationError(
                translation_domain=DOMAIN, translation_key="text_too_long"
            )
        try:
            to = parse_node(call.data.get("to"))
        except ValueError as err:
            raise ServiceValidationError(
                translation_domain=DOMAIN, translation_key="invalid_node"
            ) from err
        try:
            message = await client.async_send_text(text, to, call.data["channel"])
        except ConnectionError as err:
            raise HomeAssistantError(
                translation_domain=DOMAIN, translation_key="not_connected"
            ) from err
        return {"id": message["id"]}

    hass.services.async_register(
        DOMAIN,
        SERVICE_SEND_TEXT,
        _send_text,
        schema=SEND_TEXT_SCHEMA,
        supports_response=SupportsResponse.OPTIONAL,
    )
    return True


def _client_for_call(hass: HomeAssistant, entry_id: str | None) -> MeshtasticClient:
    entries = [
        e for e in hass.config_entries.async_loaded_entries(DOMAIN)
        if entry_id is None or e.entry_id == entry_id
    ]
    if not entries:
        raise ServiceValidationError(
            translation_domain=DOMAIN, translation_key="no_entry"
        )
    if entry_id is None and len(entries) > 1:
        raise ServiceValidationError(
            translation_domain=DOMAIN, translation_key="entry_required"
        )
    return entries[0].runtime_data


async def async_setup_entry(hass: HomeAssistant, entry: MeshtasticConfigEntry) -> bool:
    """Set up a radio from a config entry."""
    # Import the library (and our protobuf helpers) off the event loop once.
    await hass.async_add_import_executor_job(_preload)

    store = MeshStore(hass, entry.entry_id)
    await store.async_load()
    client = MeshtasticClient(hass, entry, store)
    entry.runtime_data = client

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    await client.async_start()
    await _async_register_panel(hass)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: MeshtasticConfigEntry) -> bool:
    """Unload a config entry."""
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        await entry.runtime_data.async_stop()
        await entry.runtime_data.store.async_flush()
        remaining = [
            e for e in hass.config_entries.async_loaded_entries(DOMAIN)
            if e.entry_id != entry.entry_id
        ]
        if not remaining and hass.data.pop(_DATA_PANEL, False):
            async_remove_panel(hass, PANEL_URL_PATH, warn_if_unknown=False)
    return unloaded


async def async_remove_entry(hass: HomeAssistant, entry: MeshtasticConfigEntry) -> None:
    """Delete stored messages when the entry is removed."""
    await MeshStore(hass, entry.entry_id).async_remove()


def _preload() -> None:
    import meshtastic.serial_interface  # noqa: F401, PLC0415
    import meshtastic.tcp_interface  # noqa: F401, PLC0415

    from . import protoutil  # noqa: F401, PLC0415


async def _async_register_panel(hass: HomeAssistant) -> None:
    """Register the sidebar panel once for all entries."""
    if hass.data.get(_DATA_PANEL):
        return
    hass.data[_DATA_PANEL] = True
    integration = await async_get_integration(hass, DOMAIN)
    frontend_dir = Path(__file__).parent / "frontend"
    if not hass.data.get(f"{DOMAIN}_static"):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(PANEL_STATIC_URL, str(frontend_dir), cache_headers=False)]
        )
        hass.data[f"{DOMAIN}_static"] = True
    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=PANEL_URL_PATH,
        webcomponent_name=PANEL_ELEMENT,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        module_url=f"{PANEL_STATIC_URL}/{PANEL_ELEMENT}.js?v={integration.version}",
        embed_iframe=False,
        require_admin=False,
        config={"domain": DOMAIN},
    )
