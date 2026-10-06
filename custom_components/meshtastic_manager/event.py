"""Event entity firing on every received text message."""

from __future__ import annotations

from typing import Any

from homeassistant.components.event import EventEntity, EventExtraStoredData
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
    """Fires ``direct_message`` or ``channel_message`` with the message metadata.

    Text and sender are left out: entity attributes are visible to every user,
    reading messages is admin-only. Automations use the
    ``meshtastic_manager_message`` bus event, which carries the full data.
    """

    _attr_event_types = [EVENT_DIRECT, EVENT_CHANNEL]

    async def async_added_to_hass(self) -> None:
        """Listen to client events."""
        await super().async_added_to_hass()
        self.async_on_remove(self.client.async_add_listener(self._on_event))

    async def async_get_last_event_data(self) -> EventExtraStoredData | None:
        """Restore the last event without text/sender stored by versions < 0.2.3."""
        from .protoutil import event_entity_data  # noqa: PLC0415 - preloaded at setup

        data = await super().async_get_last_event_data()
        if data is not None and data.last_event_attributes:
            data.last_event_attributes = event_entity_data(data.last_event_attributes)
        return data

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
        from .protoutil import event_entity_data  # noqa: PLC0415 - preloaded at setup

        data = event_entity_data(self.client.message_event_data(message))
        self._trigger_event(EVENT_DIRECT if data["direct"] else EVENT_CHANNEL, data)
        self.async_write_ha_state()
