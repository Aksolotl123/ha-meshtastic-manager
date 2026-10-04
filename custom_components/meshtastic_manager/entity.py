"""Base entity for Meshtastic Manager."""

from __future__ import annotations

from typing import Any

from homeassistant.core import callback
from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity import Entity

from .client import MeshtasticClient
from .const import DOMAIN, SIGNAL_UPDATE


class MeshtasticEntity(Entity):
    """Entity bound to the local radio of a config entry."""

    _attr_has_entity_name = True
    _attr_should_poll = False

    def __init__(self, client: MeshtasticClient, key: str) -> None:
        """Initialise."""
        self.client = client
        entry = client.entry
        self._attr_translation_key = key
        self._attr_unique_id = f"{entry.unique_id or entry.entry_id}_{key}"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.unique_id or entry.entry_id)},
            name=entry.title,
            manufacturer="Meshtastic",
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to client updates."""
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass,
                SIGNAL_UPDATE.format(self.client.entry.entry_id),
                self._handle_update,
            )
        )

    @callback
    def _handle_update(self, *args: Any) -> None:
        self._update_device_info()
        self.async_write_ha_state()

    @callback
    def _update_device_info(self) -> None:
        """Fill model and firmware once the radio reported its metadata."""
        iface = self.client.iface
        if iface is None or self.registry_entry is None or iface.metadata is None:
            return
        from homeassistant.helpers import device_registry as dr  # noqa: PLC0415

        registry = dr.async_get(self.hass)
        device_id = self.registry_entry.device_id
        if device_id is None:
            return
        device = registry.async_get(device_id)
        if device is None:
            return
        local = self.client.local_node() or {}
        model = (local.get("user") or {}).get("hwModel")
        firmware = iface.metadata.firmware_version
        if device.model != model or device.sw_version != firmware:
            registry.async_update_device(device_id, model=model, sw_version=firmware)

    @property
    def local(self) -> dict[str, Any]:
        """Local node entry."""
        return self.client.local_node() or {}
