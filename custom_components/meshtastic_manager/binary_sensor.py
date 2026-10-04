"""Connection state of the Meshtastic radio."""

from __future__ import annotations

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback

from . import MeshtasticConfigEntry
from .entity import MeshtasticEntity


async def async_setup_entry(
    hass: HomeAssistant,
    entry: MeshtasticConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up the connectivity sensor."""
    async_add_entities([MeshtasticConnected(entry.runtime_data, "connected")])


class MeshtasticConnected(MeshtasticEntity, BinarySensorEntity):
    """Whether Home Assistant is connected to the radio."""

    _attr_device_class = BinarySensorDeviceClass.CONNECTIVITY
    _attr_entity_category = EntityCategory.DIAGNOSTIC

    @property
    def is_on(self) -> bool:
        """Return True when connected."""
        return self.client.connected

    @property
    def extra_state_attributes(self) -> dict:
        """Expose connection details."""
        return {
            "connection": self.client.connection_label,
            "last_error": self.client.last_error,
        }
