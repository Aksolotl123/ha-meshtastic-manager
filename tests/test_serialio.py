"""Tests for the buffered serial reader."""

import importlib.util
from pathlib import Path

_spec = importlib.util.spec_from_file_location(
    "serialio",
    Path(__file__).parents[1] / "custom_components" / "meshtastic_manager" / "serialio.py",
)
serialio = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(serialio)


class FakeStream:
    """Mimics pyserial: data arrives in bursts, read() returns what is asked."""

    def __init__(self, bursts):
        self.bursts = list(bursts)
        self.buffer = b""
        self.reads = 0

    @property
    def in_waiting(self):
        if not self.buffer and self.bursts:
            self.buffer = self.bursts.pop(0)
        return len(self.buffer)

    def read(self, size):
        self.reads += 1
        _ = self.in_waiting
        out, self.buffer = self.buffer[:size], self.buffer[size:]
        return out


def make_reader(stream):
    cls = serialio.buffered_serial_class()
    reader = cls.__new__(cls)  # skip the library constructor (no real port)
    reader.stream = stream
    return reader


def test_returns_same_bytes_with_far_fewer_reads():
    payload = bytes(range(256)) * 20
    stream = FakeStream([payload[:3000], payload[3000:]])
    reader = make_reader(stream)
    out = b"".join(reader._readBytes(1) for _ in range(len(payload)))
    assert out == payload
    assert stream.reads <= 3


def test_timeout_and_closed_port():
    reader = make_reader(FakeStream([]))
    assert reader._readBytes(1) == b""  # nothing waiting: behaves like a read timeout
    reader.stream = None
    assert reader._readBytes(1) is None
