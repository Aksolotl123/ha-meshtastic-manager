"""Protobuf helpers: dict conversion, form schemas and admin messages.

The configuration UI is generated from the protobuf descriptors shipped with
the ``meshtastic`` library, so every config section and module (including ones
added by future firmware) is editable without hand-written forms.
"""

from __future__ import annotations

import copy
from typing import Any

from google.protobuf import json_format
from google.protobuf.descriptor import Descriptor, FieldDescriptor
from google.protobuf.message import Message
from meshtastic.protobuf import admin_pb2, channel_pb2, localonly_pb2, mesh_pb2

# Sections we never show in the generic editor.
SKIP_SECTIONS = {"version", "sessionkey", "device_ui"}

KIND_CONFIG = "config"
KIND_MODULE = "module"

_INT_TYPES = {
    FieldDescriptor.TYPE_INT32: "int",
    FieldDescriptor.TYPE_INT64: "int",
    FieldDescriptor.TYPE_SINT32: "int",
    FieldDescriptor.TYPE_SINT64: "int",
    FieldDescriptor.TYPE_SFIXED32: "int",
    FieldDescriptor.TYPE_SFIXED64: "int",
    FieldDescriptor.TYPE_UINT32: "uint",
    FieldDescriptor.TYPE_UINT64: "uint",
    FieldDescriptor.TYPE_FIXED32: "uint",
    FieldDescriptor.TYPE_FIXED64: "uint",
}


def to_dict(message: Message) -> dict[str, Any]:
    """Convert a protobuf message to a dict with snake_case keys and all fields present."""
    return json_format.MessageToDict(
        message,
        preserving_proto_field_name=True,
        always_print_fields_with_no_presence=True,
    )


def _field_schema(field: FieldDescriptor, depth: int) -> dict[str, Any]:
    item: dict[str, Any] = {
        "name": field.name,
        "repeated": field.is_repeated if hasattr(field, "is_repeated") else field.label == FieldDescriptor.LABEL_REPEATED,
    }
    if field.type == FieldDescriptor.TYPE_BOOL:
        item["type"] = "bool"
    elif field.type == FieldDescriptor.TYPE_STRING:
        item["type"] = "string"
    elif field.type == FieldDescriptor.TYPE_BYTES:
        item["type"] = "bytes"
    elif field.type in (FieldDescriptor.TYPE_FLOAT, FieldDescriptor.TYPE_DOUBLE):
        item["type"] = "float"
    elif field.type in _INT_TYPES:
        item["type"] = _INT_TYPES[field.type]
    elif field.type == FieldDescriptor.TYPE_ENUM:
        item["type"] = "enum"
        item["options"] = [v.name for v in field.enum_type.values]
    elif field.type == FieldDescriptor.TYPE_MESSAGE:
        item["type"] = "message"
        item["fields"] = message_schema(field.message_type, depth + 1) if depth < 4 else []
    else:
        item["type"] = "unknown"
    return item


def message_schema(descriptor: Descriptor, depth: int = 0) -> list[dict[str, Any]]:
    """Describe the fields of a message type for the generic form renderer."""
    return [_field_schema(f, depth) for f in descriptor.fields]


def config_schema() -> dict[str, Any]:
    """Schema of every config and module config section."""
    result: dict[str, Any] = {KIND_CONFIG: {}, KIND_MODULE: {}}
    for kind, container in (
        (KIND_CONFIG, localonly_pb2.LocalConfig.DESCRIPTOR),
        (KIND_MODULE, localonly_pb2.LocalModuleConfig.DESCRIPTOR),
    ):
        for field in container.fields:
            if field.name in SKIP_SECTIONS or field.type != FieldDescriptor.TYPE_MESSAGE:
                continue
            result[kind][field.name] = message_schema(field.message_type)
    result["channel"] = message_schema(channel_pb2.ChannelSettings.DESCRIPTOR)
    result["channel_roles"] = [v.name for v in channel_pb2.Channel.Role.DESCRIPTOR.values]
    result["user"] = message_schema(mesh_pb2.User.DESCRIPTOR)
    return result


def _container(iface: Any, kind: str) -> Message:
    node = iface.localNode
    if kind == KIND_CONFIG:
        return node.localConfig
    if kind == KIND_MODULE:
        return node.moduleConfig
    raise ValueError(f"Unknown config kind: {kind}")


def config_values(iface: Any) -> dict[str, Any]:
    """Current values of every section, as cached from the radio."""
    result: dict[str, Any] = {}
    for kind in (KIND_CONFIG, KIND_MODULE):
        container = _container(iface, kind)
        result[kind] = {
            field.name: to_dict(getattr(container, field.name))
            for field in container.DESCRIPTOR.fields
            if field.name not in SKIP_SECTIONS and field.type == FieldDescriptor.TYPE_MESSAGE
        }
    return result


def _deep_merge(base: dict[str, Any], changes: dict[str, Any]) -> dict[str, Any]:
    result = copy.deepcopy(base)
    for key, value in changes.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def build_section(iface: Any, kind: str, section: str, changes: dict[str, Any]) -> Message:
    """Return a new section message = current values merged with ``changes``."""
    container = _container(iface, kind)
    field = container.DESCRIPTOR.fields_by_name.get(section)
    if field is None or section in SKIP_SECTIONS:
        raise ValueError(f"Unknown {kind} section: {section}")
    current = getattr(container, section)
    merged = _deep_merge(to_dict(current), changes)
    new = type(current)()
    json_format.ParseDict(merged, new, ignore_unknown_fields=True)
    return new


def send_admin(iface: Any, admin: admin_pb2.AdminMessage) -> None:
    """Send an admin message to the local node (blocking; run in the executor)."""
    node = iface.localNode
    node.ensureSessionKey()
    node._sendAdmin(admin)  # noqa: SLF001 - library has no public generic sender


def write_sections(iface: Any, sections: list[tuple[str, str, Message]]) -> None:
    """Write config sections in one settings transaction (one reboot at most)."""
    node = iface.localNode
    node.beginSettingsTransaction()
    for kind, section, value in sections:
        admin = admin_pb2.AdminMessage()
        target = admin.set_config if kind == KIND_CONFIG else admin.set_module_config
        getattr(target, section).CopyFrom(value)
        send_admin(iface, admin)
        getattr(_container(iface, kind), section).CopyFrom(value)
    node.commitSettingsTransaction()


def write_channel(iface: Any, index: int, role: str, settings: dict[str, Any]) -> None:
    """Write one channel slot."""
    node = iface.localNode
    channel = channel_pb2.Channel()
    channel.index = index
    channel.role = channel_pb2.Channel.Role.Value(role)
    if role != "DISABLED":
        json_format.ParseDict(settings, channel.settings, ignore_unknown_fields=True)
    admin = admin_pb2.AdminMessage()
    admin.set_channel.CopyFrom(channel)
    send_admin(iface, admin)
    if node.channels is not None and index < len(node.channels):
        node.channels[index].CopyFrom(channel)


def write_owner(
    iface: Any, long_name: str, short_name: str, is_licensed: bool, is_unmessagable: bool
) -> None:
    """Set the owner (user) of the local node."""
    admin = admin_pb2.AdminMessage()
    admin.set_owner.long_name = long_name.strip()
    admin.set_owner.short_name = short_name.strip()[:4]
    admin.set_owner.is_licensed = is_licensed
    admin.set_owner.is_unmessagable = is_unmessagable
    send_admin(iface, admin)


def device_action(iface: Any, action: str, node_num: int | None = None) -> None:
    """Run a device-level admin action."""
    admin = admin_pb2.AdminMessage()
    if action == "reboot":
        admin.reboot_seconds = 5
    elif action == "shutdown":
        admin.shutdown_seconds = 5
    elif action == "reboot_ota":
        admin.reboot_ota_seconds = 5
    elif action == "factory_reset_config":
        admin.factory_reset_config = 1
    elif action == "factory_reset_device":
        admin.factory_reset_device = 1
    elif action == "reset_nodedb":
        admin.nodedb_reset = True
    elif action == "set_time":
        import time  # noqa: PLC0415

        admin.set_time_only = int(time.time())
    elif action in ("favorite", "unfavorite", "ignore", "unignore", "remove_node"):
        if node_num is None:
            raise ValueError("node_num required")
        field = {
            "favorite": "set_favorite_node",
            "unfavorite": "remove_favorite_node",
            "ignore": "set_ignored_node",
            "unignore": "remove_ignored_node",
            "remove_node": "remove_by_nodenum",
        }[action]
        setattr(admin, field, node_num)
    elif action == "remove_fixed_position":
        admin.remove_fixed_position = True
    else:
        raise ValueError(f"Unknown action: {action}")
    send_admin(iface, admin)
    if node_num is not None and iface.nodesByNum and node_num in iface.nodesByNum:
        node = iface.nodesByNum[node_num]
        if action == "favorite":
            node["isFavorite"] = True
        elif action == "unfavorite":
            node["isFavorite"] = False
        elif action == "ignore":
            node["isIgnored"] = True
        elif action == "unignore":
            node["isIgnored"] = False
        elif action == "remove_node":
            iface.nodesByNum.pop(node_num, None)


def set_fixed_position(iface: Any, lat: float, lon: float, alt: int) -> None:
    """Set a fixed position on the local node."""
    position = mesh_pb2.Position()
    position.latitude_i = int(round(lat * 1e7))
    position.longitude_i = int(round(lon * 1e7))
    position.altitude = int(alt)
    admin = admin_pb2.AdminMessage()
    admin.set_fixed_position.CopyFrom(position)
    send_admin(iface, admin)


def channel_url(iface: Any, include_all: bool = True) -> str | None:
    """Return the shareable channel URL."""
    try:
        return iface.localNode.getURL(includeAll=include_all)
    except Exception:  # noqa: BLE001
        return None
