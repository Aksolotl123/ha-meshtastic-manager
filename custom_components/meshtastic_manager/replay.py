"""Replay protection for authenticated (PKI) direct messages.

A PKI direct message cannot be forged without the private key of one of the
two radios, and its packet id is part of the AES-CCM nonce, so it cannot be
changed either. A recorded packet could still be transmitted again later;
remembering every accepted packet id per sender stops that.
"""

from __future__ import annotations

from collections.abc import Iterable
from typing import Any

# Packet ids remembered per sender and the number of senders tracked.
MAX_IDS_PER_SENDER = 1000
MAX_SENDERS = 1000


class SeenPackets:
    """Packet ids of PKI direct messages already accepted, per sender.

    Each sender has its own list, and a tracked sender is never forgotten, so
    packets from other (possibly newly created) nodes cannot push the ids of a
    known sender out of memory. Only the sender itself can, after more than
    ``max_ids`` newer messages.
    """

    def __init__(
        self,
        data: dict[str, list[int]] | None = None,
        max_ids: int = MAX_IDS_PER_SENDER,
        max_senders: int = MAX_SENDERS,
    ) -> None:
        """Restore from the stored form ({sender as string: [packet ids]})."""
        self._max_ids = max_ids
        self._max_senders = max_senders
        self._seen: dict[int, list[int]] = {
            int(sender): list(ids) for sender, ids in (data or {}).items()
        }

    def is_full(self, sender: int) -> bool:
        """True if a new sender cannot be tracked any more."""
        return sender not in self._seen and len(self._seen) >= self._max_senders

    def check_and_add(self, sender: int, packet_id: int) -> bool:
        """Record a packet; False if this sender's packet id was seen before.

        When the sender limit is reached, packets of new senders are accepted
        without being remembered (see ``is_full``).
        """
        ids = self._seen.get(sender)
        if ids is None:
            if len(self._seen) >= self._max_senders:
                return True
            ids = self._seen[sender] = []
        if packet_id in ids:
            return False
        ids.append(packet_id)
        if len(ids) > self._max_ids:
            del ids[: len(ids) - self._max_ids]
        return True

    def seed(self, messages: Iterable[dict[str, Any]]) -> None:
        """Add the PKI direct messages of an existing message log."""
        for message in messages:
            if message.get("dir") == "in" and message.get("pki") and message.get("id"):
                self.check_and_add(message["from"], message["id"])

    def as_dict(self) -> dict[str, list[int]]:
        """Stored form; JSON object keys must be strings."""
        return {str(sender): ids for sender, ids in self._seen.items()}
