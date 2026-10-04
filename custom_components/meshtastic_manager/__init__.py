"""Meshtastic Manager: full management UI for a Meshtastic radio in Home Assistant."""

from __future__ import annotations

import hashlib
import logging
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.frontend import async_remove_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from . import services, websocket_api
from .client import MeshtasticClient
from .const import (
    DOMAIN,
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

_DATA_PANEL = f"{DOMAIN}_panel"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register WebSocket commands and actions."""
    websocket_api.async_register(hass)

    services.async_setup_services(hass)
    return True


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
    # Version the URL by content so browsers never keep a stale panel after an update.
    bundle = Path(__file__).parent / "frontend" / f"{PANEL_ELEMENT}.js"
    digest = await hass.async_add_executor_job(_file_digest, bundle)
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
        module_url=f"{PANEL_STATIC_URL}/{PANEL_ELEMENT}.js?v={digest}",
        embed_iframe=False,
        require_admin=False,
        config={"domain": DOMAIN},
    )


def _file_digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:12]
