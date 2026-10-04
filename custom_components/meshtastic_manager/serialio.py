"""Faster serial reading for the meshtastic library (no Home Assistant imports)."""

from __future__ import annotations


_BUFFERED_SERIAL: type | None = None


def buffered_serial_class() -> type:
    """SerialInterface that reads everything waiting in the port at once.

    The library's reader asks for one byte per call. At 115200 baud that is
    ~11 000 system calls per second while the radio streams its node database,
    and on a busy host the kernel buffer overflows and frames get corrupted.
    Here each call drains up to 4 KiB and later calls are served from memory.
    """
    global _BUFFERED_SERIAL  # noqa: PLW0603
    if _BUFFERED_SERIAL is None:
        from meshtastic.serial_interface import SerialInterface  # noqa: PLC0415

        class BufferedSerialInterface(SerialInterface):
            _rx_pending = b""

            def _readBytes(self, length: int) -> bytes | None:  # noqa: N802
                if not self._rx_pending:
                    stream = self.stream
                    if stream is None:
                        return None
                    # Blocks up to the port timeout when nothing is waiting,
                    # exactly like the original single-byte read.
                    data = stream.read(max(1, min(stream.in_waiting, 4096)))
                    if not data:
                        return data
                    self._rx_pending = data
                chunk = self._rx_pending[:length]
                self._rx_pending = self._rx_pending[length:]
                return chunk

        _BUFFERED_SERIAL = BufferedSerialInterface
    return _BUFFERED_SERIAL
