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
