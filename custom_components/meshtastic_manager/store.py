"""Persistent storage of messages and traceroute results."""

from __future__ import annotations

import logging
import time
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import (
    DOMAIN,
    MAX_MESSAGES,
    MAX_TRACEROUTES,
    STORAGE_SAVE_DELAY,
    STORAGE_VERSION,
)
from .replay import SeenPackets

_LOGGER = logging.getLogger(__name__)


class MeshStore:
    """Message log and traceroute history for one config entry."""

    def __init__(self, hass: HomeAssistant, entry_id: str) -> None:
        """Initialise the store."""
        self._hass = hass
        self._store: Store[dict[str, Any]] = Store(
            hass, STORAGE_VERSION, f"{DOMAIN}.{entry_id}"
        )
        self.messages: list[dict[str, Any]] = []
        self.traceroutes: list[dict[str, Any]] = []
        # conversation key -> unix time the user last read it
        self.read_marks: dict[str, int] = {}
        # Kept apart from the message log: deleting a conversation must not
        # let its old packets be accepted again.
        self.seen_direct = SeenPackets()

    async def async_load(self) -> None:
        """Load data from disk."""
        data = await self._store.async_load() or {}
        self.messages = data.get("messages", [])
        self.traceroutes = data.get("traceroutes", [])
        self.read_marks = data.get("read_marks", {})
        if "seen_direct" in data:
            self.seen_direct = SeenPackets(data["seen_direct"])
        else:
            self.seen_direct.seed(self.messages)

    async def async_remove(self) -> None:
        """Delete the stored file."""
        await self._store.async_remove()

    async def async_flush(self) -> None:
        """Write pending changes immediately."""
        await self._store.async_save(self._data())

    def _data(self) -> dict[str, Any]:
        return {
            "messages": self.messages,
            "traceroutes": self.traceroutes,
            "read_marks": self.read_marks,
            "seen_direct": self.seen_direct.as_dict(),
        }

    @callback
    def _schedule_save(self) -> None:
        self._store.async_delay_save(self._data, STORAGE_SAVE_DELAY)

    @callback
    def add_message(self, message: dict[str, Any]) -> bool:
        """Append a message; False if it is a retransmission already stored."""
        if message.get("dir") == "in" and message.get("id"):
            for existing in reversed(self.messages[-200:]):
                if existing.get("id") == message["id"] and existing.get("from") == message["from"]:
                    return False
        pki = message.get("dir") == "in" and message.get("pki") and message.get("id")
        if pki and self.seen_direct.is_full(message["from"]):
            _LOGGER.warning(
                "Too many senders of encrypted direct messages are tracked; "
                "replays of messages from !%08x cannot be detected",
                message["from"],
            )
        if pki and not self.seen_direct.check_and_add(message["from"], message["id"]):
            _LOGGER.warning(
                "Ignoring a repeated encrypted direct message from !%08x (packet %s): "
                "it was already received before, possibly a replayed recording",
                message["from"],
                message["id"],
            )
            return False
        self.messages.append(message)
        if len(self.messages) > MAX_MESSAGES:
            del self.messages[: len(self.messages) - MAX_MESSAGES]
        if pki:
            # Save the packet id of an authenticated direct message right away,
            # so a crash cannot make it acceptable again.
            self._hass.async_create_task(self.async_flush(), eager_start=False)
        else:
            self._schedule_save()
        return True

    @callback
    def find_outgoing(self, packet_id: int) -> dict[str, Any] | None:
        """Return an outgoing message by packet id."""
        for message in reversed(self.messages):
            if message.get("dir") == "out" and message.get("id") == packet_id:
                return message
        return None

    @callback
    def update_message(self, packet_id: int, **changes: Any) -> None:
        """Update fields of an outgoing message."""
        message = self.find_outgoing(packet_id)
        if message is not None:
            message.update(changes)
            self._schedule_save()

    @callback
    def conversation(
        self, key: str, before: int | None = None, limit: int = 200
    ) -> list[dict[str, Any]]:
        """Return up to ``limit`` messages of a conversation older than ``before``."""
        result = [
            m
            for m in self.messages
            if m.get("conversation") == key and (before is None or m["time"] < before)
        ]
        return result[-limit:]

    @callback
    def conversations(self) -> list[dict[str, Any]]:
        """Summarise conversations: last message, count, unread count."""
        summary: dict[str, dict[str, Any]] = {}
        for message in self.messages:
            key = message.get("conversation")
            if key is None:
                continue
            item = summary.setdefault(key, {"key": key, "count": 0, "unread": 0})
            item["count"] += 1
            item["last"] = message
            if message.get("dir") == "in" and message["time"] > self.read_marks.get(key, 0):
                item["unread"] += 1
        return sorted(summary.values(), key=lambda c: c["last"]["time"], reverse=True)

    @callback
    def mark_read(self, key: str) -> None:
        """Mark a conversation as read now."""
        self.read_marks[key] = int(time.time())
        self._schedule_save()

    @callback
    def delete_conversation(self, key: str) -> None:
        """Remove all messages of a conversation."""
        self.messages = [m for m in self.messages if m.get("conversation") != key]
        self.read_marks.pop(key, None)
        self._schedule_save()

    @callback
    def messages_since(self, since: float) -> int:
        """Count incoming messages since a unix time."""
        return sum(
            1 for m in self.messages if m.get("dir") == "in" and m["time"] >= since
        )

    @callback
    def add_traceroute(self, result: dict[str, Any]) -> None:
        """Append a traceroute result."""
        self.traceroutes.append(result)
        if len(self.traceroutes) > MAX_TRACEROUTES:
            del self.traceroutes[: len(self.traceroutes) - MAX_TRACEROUTES]
        self._schedule_save()
