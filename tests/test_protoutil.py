"""Tests for protobuf helpers (no Home Assistant needed)."""

import importlib.util
import json
from pathlib import Path
from types import SimpleNamespace

from meshtastic.protobuf import admin_pb2, channel_pb2, localonly_pb2

_spec = importlib.util.spec_from_file_location(
    "protoutil",
    Path(__file__).parents[1] / "custom_components" / "meshtastic_manager" / "protoutil.py",
)
protoutil = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(protoutil)


class FakeNode:
    def __init__(self):
        self.localConfig = localonly_pb2.LocalConfig()
        self.moduleConfig = localonly_pb2.LocalModuleConfig()
        self.channels = [channel_pb2.Channel(index=i) for i in range(8)]
        self.sent = []

    def ensureSessionKey(self):
        pass

    def _sendAdmin(self, p):
        self.sent.append(p)

    def beginSettingsTransaction(self):
        self.sent.append("begin")

    def commitSettingsTransaction(self):
        self.sent.append("commit")


def make_iface():
    return SimpleNamespace(localNode=FakeNode(), nodesByNum={})


def test_schema_covers_sections_and_is_json():
    schema = protoutil.config_schema()
    assert {"lora", "device", "position"} <= set(schema["config"])
    assert {"mqtt", "telemetry", "serial"} <= set(schema["module"])
    lora = {f["name"]: f for f in schema["config"]["lora"]}
    assert lora["region"]["type"] == "enum" and "EU_868" in lora["region"]["options"]
    assert lora["hop_limit"]["type"] == "uint"
    json.dumps(schema)


def test_values_and_merge_write():
    iface = make_iface()
    iface.localNode.localConfig.lora.hop_limit = 3
    iface.localNode.localConfig.lora.region = 3
    values = protoutil.config_values(iface)
    assert values["config"]["lora"]["hop_limit"] == 3
    json.dumps(values)
    new = protoutil.build_section(iface, "config", "lora", {"hop_limit": 5, "region": "EU_868"})
    assert new.hop_limit == 5
    protoutil.write_sections(iface, [("config", "lora", new)])
    sent = iface.localNode.sent
    assert sent[0] == "begin" and sent[-1] == "commit"
    assert isinstance(sent[1], admin_pb2.AdminMessage)
    assert sent[1].set_config.lora.hop_limit == 5
    assert iface.localNode.localConfig.lora.hop_limit == 5


def test_unknown_section_rejected():
    iface = make_iface()
    try:
        protoutil.build_section(iface, "config", "nope", {})
    except ValueError:
        return
    raise AssertionError("expected ValueError")


def test_channel_and_actions():
    iface = make_iface()
    protoutil.write_channel(iface, 1, "SECONDARY", {"name": "test", "psk": "AQ=="})
    msg = iface.localNode.sent[-1]
    assert msg.set_channel.settings.name == "test" and msg.set_channel.settings.psk == b"\x01"
    iface.nodesByNum[42] = {"num": 42}
    protoutil.device_action(iface, "favorite", 42)
    assert iface.localNode.sent[-1].set_favorite_node == 42
    assert iface.nodesByNum[42]["isFavorite"] is True
    protoutil.device_action(iface, "reset_nodedb")
    assert iface.localNode.sent[-1].nodedb_reset is True
    protoutil.write_owner(iface, " Long ", "ABCDE", False, False)
    assert iface.localNode.sent[-1].set_owner.short_name == "ABCD"
