"""Tests for replay protection of PKI direct messages."""

import importlib.util
import json
from pathlib import Path

_spec = importlib.util.spec_from_file_location(
    "replay",
    Path(__file__).parents[1] / "custom_components" / "meshtastic_manager" / "replay.py",
)
replay = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(replay)

ALICE = 0xA1B2C3D4
BOB = 0x12345678


def test_repeated_packet_is_rejected():
    seen = replay.SeenPackets()
    assert seen.check_and_add(ALICE, 1001)
    assert not seen.check_and_add(ALICE, 1001)
    assert seen.check_and_add(ALICE, 1002)


def test_same_id_from_another_sender_is_new():
    seen = replay.SeenPackets()
    assert seen.check_and_add(ALICE, 1001)
    assert seen.check_and_add(BOB, 1001)


def test_survives_json_round_trip():
    seen = replay.SeenPackets()
    seen.check_and_add(ALICE, 1001)
    restored = replay.SeenPackets(json.loads(json.dumps(seen.as_dict())))
    assert not restored.check_and_add(ALICE, 1001)
    assert restored.check_and_add(ALICE, 1002)


def test_per_sender_limit_drops_oldest_ids():
    seen = replay.SeenPackets(max_ids=3)
    for packet_id in (1, 2, 3, 4):
        assert seen.check_and_add(ALICE, packet_id)
    assert seen.as_dict()[str(ALICE)] == [2, 3, 4]


def test_new_senders_cannot_push_out_a_known_sender():
    seen = replay.SeenPackets(max_senders=3)
    seen.check_and_add(ALICE, 1001)
    # A flood of packets from newly created nodes.
    for sender in range(100, 200):
        assert seen.check_and_add(sender, 1)
    assert not seen.check_and_add(ALICE, 1001)
    assert seen.is_full(150)
    assert not seen.is_full(ALICE)
    assert len(seen.as_dict()) == 3


def test_seed_takes_only_incoming_pki_messages():
    seen = replay.SeenPackets()
    seen.seed(
        [
            {"dir": "in", "pki": True, "id": 1001, "from": ALICE},
            {"dir": "in", "pki": False, "id": 1002, "from": ALICE},
            {"dir": "out", "pki": True, "id": 1003, "from": ALICE},
            {"dir": "in", "pki": True, "id": None, "from": ALICE},
        ]
    )
    assert seen.as_dict() == {str(ALICE): [1001]}
