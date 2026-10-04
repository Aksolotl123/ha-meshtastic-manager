"""Event entity firing on every received text message."""

from __future__ import annotations

from typing import Any

from homeassistant.components.event import EventEntity
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback

from . import MeshtasticConfigEntry
from .entity import MeshtasticEntity

EVENT_DIRECT = "direct_message"
EVENT_CHANNEL = "channel_message"


async def async_setup_entry(
    hass: HomeAssistant,
    entry: MeshtasticConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up the message event entity."""
    async_add_entities([MeshtasticMessageEvent(entry.runtime_data, "message")])


class MeshtasticMessageEvent(MeshtasticEntity, EventEntity):
    """Fires ``direct_message`` or ``channel_message`` with the message details."""

    _attr_event_types = [EVENT_DIRECT, EVENT_CHANNEL]

    async def async_added_to_hass(self) -> None:
        """Listen to client events."""
        await super().async_added_to_hass()
        self.async_on_remove(self.client.async_add_listener(self._on_event))

    @callback
    def _handle_update(self, *args: Any) -> None:
        """Only message events change this entity."""

    @callback
    def _on_event(self, event: dict[str, Any]) -> None:
        if event.get("type") != "message":
            return
        message = event["message"]
        if message.get("dir") != "in":
            return
        data = self.client.message_event_data(message)
        data.pop("entry_id", None)
        self._trigger_event(EVENT_DIRECT if data["direct"] else EVENT_CHANNEL, data)
        self.async_write_ha_state()
