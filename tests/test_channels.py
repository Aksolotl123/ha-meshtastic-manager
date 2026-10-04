"""Tests for channel planning, validation and share links (no Home Assistant needed)."""

import base64
import importlib.util
from pathlib import Path
from types import SimpleNamespace

import pytest
from meshtastic.protobuf import admin_pb2, channel_pb2, localonly_pb2

_spec = importlib.util.spec_from_file_location(
    "protoutil",
    Path(__file__).parents[1] / "custom_components" / "meshtastic_manager" / "protoutil.py",
)
protoutil = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(protoutil)

ROLE = channel_pb2.Channel.Role
KEY32 = bytes(range(32))


def make_channels(*names):
    """Slot 0 primary (default key), then secondaries with the given names."""
    channels = [channel_pb2.Channel(index=i, role=ROLE.DISABLED) for i in range(8)]
    channels[0].role = ROLE.PRIMARY
    channels[0].settings.psk = b"\x01"
    for i, name in enumerate(names, start=1):
        channels[i].role = ROLE.SECONDARY
        channels[i].settings.name = name
        channels[i].settings.psk = KEY32
    return channels


class FakeNode:
    def __init__(self, channels):
        self.channels = channels
        self.localConfig = localonly_pb2.LocalConfig()
        self.localConfig.lora.region = 3
        self.moduleConfig = localonly_pb2.LocalModuleConfig()
        self.sent = []

    def ensureSessionKey(self):
        pass

    def _sendAdmin(self, p):
        self.sent.append(p)

    def beginSettingsTransaction(self):
        self.sent.append("begin")

    def commitSettingsTransaction(self):
        self.sent.append("commit")


def test_add_uses_first_free_slot_and_rejects_duplicates():
    channels = make_channels("Dom")
    settings = protoutil.channel_settings_from_dict(
        {"name": "Rodzina", "psk": base64.b64encode(KEY32).decode()}, require_name=True
    )
    new = protoutil.plan_add(channels, settings)
    assert new.index == 2 and new.role == ROLE.SECONDARY and new.settings.name == "Rodzina"
    with pytest.raises(ValueError):
        protoutil.plan_add(channels, channel_pb2.ChannelSettings(name="Dom"))


def test_add_fails_when_full():
    channels = make_channels(*[f"c{i}" for i in range(1, 8)])
    with pytest.raises(ValueError):
        protoutil.plan_add(channels, channel_pb2.ChannelSettings(name="x"))


def test_validation_limits():
    with pytest.raises(ValueError):  # 12 bytes (Polish letters are 2 bytes each)
        protoutil.channel_settings_from_dict({"name": "Łódź-Ślęża"}, require_name=True)
    with pytest.raises(ValueError):
        protoutil.channel_settings_from_dict({"name": ""}, require_name=True)
    with pytest.raises(ValueError):  # 5-byte key
        protoutil.channel_settings_from_dict({"name": "a", "psk": "AQIDBAU="}, require_name=True)
    ok = protoutil.channel_settings_from_dict({"name": "Łódź", "psk": "AQ=="}, require_name=True)
    assert ok.psk == b"\x01"


def test_delete_shifts_following_channels_down():
    channels = make_channels("A", "B", "C")
    writes = protoutil.plan_delete(channels, 1)
    assert [(c.index, ROLE.Name(c.role), c.settings.name) for c in writes] == [
        (1, "SECONDARY", "B"),
        (2, "SECONDARY", "C"),
        (3, "DISABLED", ""),
    ]


def test_delete_last_and_primary():
    channels = make_channels("A", "B")
    writes = protoutil.plan_delete(channels, 2)
    assert [(c.index, ROLE.Name(c.role)) for c in writes] == [(2, "DISABLED")]
    with pytest.raises(ValueError):
        protoutil.plan_delete(channels, 0)
    with pytest.raises(ValueError):
        protoutil.plan_delete(channels, 5)  # disabled slot


def test_url_round_trip():
    lora = localonly_pb2.LocalConfig().lora
    lora.region = 3
    a = channel_pb2.ChannelSettings(name="A", psk=KEY32)
    url = protoutil.build_channel_url([a], lora, add_only=True)
    assert url.startswith("https://meshtastic.org/e/?add=true#") and "=" not in url.split("#")[1]
    channel_set, add_only = protoutil.parse_channel_url(url)
    assert add_only and channel_set.settings[0].name == "A" and channel_set.lora_config.region == 3
    with pytest.raises(ValueError):
        protoutil.parse_channel_url("https://example.com/no-fragment")
    with pytest.raises(ValueError):
        protoutil.parse_channel_url("https://meshtastic.org/e/#%%%")


def test_import_add_skips_existing_and_unnamed():
    channels = make_channels("Dom")
    channel_set, _ = protoutil.parse_channel_url(
        protoutil.build_channel_url(
            [
                channel_pb2.ChannelSettings(psk=b"\x01"),  # unnamed primary
                channel_pb2.ChannelSettings(name="Dom", psk=KEY32),  # already there
                channel_pb2.ChannelSettings(name="Nowy", psk=KEY32),
                channel_pb2.ChannelSettings(name="Drugi", psk=b""),
            ],
            None,
        )
    )
    writes, added, skipped = protoutil.plan_import(channels, channel_set, replace=False)
    assert [(c.index, c.settings.name) for c in writes] == [(2, "Nowy"), (3, "Drugi")]
    assert added == ["Nowy", "Drugi"] and skipped == ["primary", "Dom"]


def test_import_replace_writes_all_slots_and_lora():
    node = FakeNode(make_channels("A", "B", "C"))
    iface = SimpleNamespace(localNode=node, nodesByNum={})
    lora = localonly_pb2.LocalConfig().lora
    lora.region = 3
    lora.modem_preset = 4
    url = protoutil.build_channel_url(
        [channel_pb2.ChannelSettings(psk=b"\x01"), channel_pb2.ChannelSettings(name="X", psk=KEY32)],
        lora,
    )
    result = protoutil.import_channels(iface, url, replace=True)
    assert result["lora_changed"] is True
    roles = [ROLE.Name(c.role) for c in node.channels]
    assert roles == ["PRIMARY", "SECONDARY"] + ["DISABLED"] * 6
    channel_msgs = [m for m in node.sent if isinstance(m, admin_pb2.AdminMessage) and m.HasField("set_channel")]
    assert len(channel_msgs) == 8
    assert node.localConfig.lora.modem_preset == 4


def test_share_url_single_and_all():
    node = FakeNode(make_channels("A"))
    iface = SimpleNamespace(localNode=node)
    single = protoutil.channel_share_url(iface, 1)
    assert "?add=true#" in single
    assert [s.name for s in protoutil.parse_channel_url(single)[0].settings] == ["A"]
    everything = protoutil.channel_share_url(iface, None)
    assert len(protoutil.parse_channel_url(everything)[0].settings) == 2
