"""Channel keys must not reach non-admin users through the panel snapshot."""

import base64
import copy
import importlib.util
import json
from pathlib import Path

from meshtastic.protobuf import channel_pb2

_spec = importlib.util.spec_from_file_location(
    "protoutil",
    Path(__file__).parents[1] / "custom_components" / "meshtastic_manager" / "protoutil.py",
)
protoutil = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(protoutil)

ROLE = channel_pb2.Channel.Role
KEY32 = bytes(range(32))
KEY16 = bytes(range(100, 116))
KEY32_B64 = base64.b64encode(KEY32).decode()
KEY16_B64 = base64.b64encode(KEY16).decode()


def make_snapshot():
    """Primary with the default key, two secondaries with real keys, rest disabled."""
    channels = [channel_pb2.Channel(index=i, role=ROLE.DISABLED) for i in range(8)]
    channels[0].role = ROLE.PRIMARY
    channels[0].settings.psk = b"\x01"
    channels[1].role = ROLE.SECONDARY
    channels[1].settings.name = "Dom"
    channels[1].settings.psk = KEY32
    channels[2].role = ROLE.SECONDARY
    channels[2].settings.name = "Rodzina"
    channels[2].settings.psk = KEY16
    channels[3].role = ROLE.SECONDARY
    channels[3].settings.name = "Otwarty"
    channels[3].settings.psk = b""
    return {
        "status": {"connected": True},
        "channels": [protoutil.to_dict(c) for c in channels],
        "lora": {"region": "EU_868"},
    }


def test_non_admin_gets_no_channel_keys():
    data = make_snapshot()
    original = copy.deepcopy(data)
    redacted = protoutil.snapshot_for_user(data, is_admin=False)
    dumped = json.dumps(redacted)
    assert KEY32_B64 not in dumped
    assert KEY16_B64 not in dumped
    channels = redacted["channels"]
    # Public default key index and "no encryption" stay, so the panel labels are right.
    assert channels[0]["settings"]["psk"] == "AQ=="
    assert not channels[3]["settings"].get("psk")
    for ch in channels[1:3]:
        psk = ch["settings"]["psk"]
        assert psk == protoutil.REDACTED_PSK
        assert len(psk) > 4  # panel: pskKind() -> "custom key"
    # Everything else is untouched and the input is not mutated.
    for before, after in zip(original["channels"], channels):
        assert after["index"] == before.get("index", after["index"])
        assert after["role"] == before["role"]
        assert after.get("settings", {}).get("name") == before.get("settings", {}).get("name")
    assert redacted["lora"] == original["lora"]
    assert data == original


def test_admin_gets_channel_keys():
    data = make_snapshot()
    original = copy.deepcopy(data)
    result = protoutil.snapshot_for_user(data, is_admin=True)
    assert result == original
    assert KEY32_B64 in json.dumps(result)
    assert result["channels"][2]["settings"]["psk"] == KEY16_B64


def test_channels_without_settings_or_snapshot_without_channels():
    data = {"channels": [{"index": 5, "role": "DISABLED"}], "status": {}}
    assert protoutil.snapshot_for_user(data, is_admin=False)["channels"] == data["channels"]
    assert protoutil.snapshot_for_user({"status": {}}, is_admin=False)["channels"] == []


def test_invalid_base64_is_redacted():
    data = {"channels": [{"index": 1, "settings": {"psk": "not base64!"}}]}
    redacted = protoutil.snapshot_for_user(data, is_admin=False)
    assert redacted["channels"][0]["settings"]["psk"] == protoutil.REDACTED_PSK


def test_non_admin_gets_no_conversations():
    snap = make_snapshot()
    snap["conversations"] = [{"key": "ch:0", "count": 1, "unread": 0, "last": {"text": "tajne"}}]
    redacted = protoutil.snapshot_for_user(copy.deepcopy(snap), is_admin=False)
    assert redacted["conversations"] == []
    assert "tajne" not in json.dumps(redacted)
    assert protoutil.snapshot_for_user(copy.deepcopy(snap), is_admin=True)["conversations"] == snap["conversations"]


def test_message_events_only_for_admins():
    message = {"type": "message", "message": {"text": "tajne"}}
    status = {"type": "message_status", "id": 1, "status": "acked"}
    node = {"type": "node", "node": {"num": 1}}
    for event in (message, status):
        assert protoutil.event_visible(event, is_admin=True)
        assert not protoutil.event_visible(event, is_admin=False)
    assert protoutil.event_visible(node, is_admin=False)
    assert protoutil.event_visible({"type": "status"}, is_admin=False)


def test_event_entity_data_has_no_text_or_sender():
    """The Message event entity's attributes are visible to every user."""
    bus_data = {
        "entry_id": "abc123",
        "message_id": 42,
        "text": "tajne",
        "from": "!a1b2c3d4",
        "from_num": 0xA1B2C3D4,
        "from_name": "Jan Kowalski",
        "from_short_name": "JK",
        "to": "!00000001",
        "direct": True,
        "channel": 0,
        "channel_name": None,
        "pki": True,
        "hops": 1,
        "snr": 5.5,
        "rssi": -90,
        "via_mqtt": False,
    }
    data = protoutil.event_entity_data(bus_data)
    for key in ("entry_id", "text", "from", "from_num", "from_name", "from_short_name"):
        assert key not in data
    dumped = json.dumps(data)
    for secret in ("tajne", "a1b2c3d4", "Kowalski", "JK", "abc123"):
        assert secret not in dumped
    assert data["direct"] is True
    assert data["message_id"] == 42
    assert data["channel"] == 0
    # The bus event data itself is untouched (blueprints read text/from_name).
    assert bus_data["text"] == "tajne" and bus_data["from_name"] == "Jan Kowalski"


def test_event_entity_data_filters_restored_attributes():
    """Attributes restored from an older version lose text and sender too."""
    restored = {"text": "tajne", "from_name": "Jan", "direct": False, "channel": 1}
    assert protoutil.event_entity_data(restored) == {"direct": False, "channel": 1}
