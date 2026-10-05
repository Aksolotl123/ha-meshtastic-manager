"""Protobuf helpers: dict conversion, form schemas and admin messages.

The configuration UI is generated from the protobuf descriptors shipped with
the ``meshtastic`` library, so every config section and module (including ones
added by future firmware) is editable without hand-written forms.
"""

from __future__ import annotations

import base64
import copy
from typing import Any

from google.protobuf import json_format
from google.protobuf.descriptor import Descriptor, FieldDescriptor
from google.protobuf.message import Message
from meshtastic.protobuf import (
    admin_pb2,
    apponly_pb2,
    channel_pb2,
    localonly_pb2,
    mesh_pb2,
)

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


# ---------------------------------------------------------------- channels

MAX_CHANNELS = 8
CHANNEL_NAME_MAX_BYTES = 11  # firmware stores the name in char[12]
VALID_PSK_LENGTHS = (0, 1, 16, 32)
URL_BASE = "https://meshtastic.org/e/"
ROLE = channel_pb2.Channel.Role


def channel_settings_from_dict(
    settings: dict[str, Any], *, require_name: bool
) -> channel_pb2.ChannelSettings:
    """Validate and convert panel input to ChannelSettings (raises ValueError)."""
    result = channel_pb2.ChannelSettings()
    try:
        json_format.ParseDict(settings, result, ignore_unknown_fields=True)
    except json_format.ParseError as err:
        raise ValueError(str(err)) from err
    validate_channel_settings(result, require_name=require_name)
    return result


def validate_channel_settings(
    settings: channel_pb2.ChannelSettings, *, require_name: bool
) -> None:
    """Enforce the firmware limits on a channel."""
    name_bytes = len(settings.name.encode())
    if name_bytes > CHANNEL_NAME_MAX_BYTES:
        raise ValueError(
            f"Channel name is {name_bytes} bytes; the radio allows {CHANNEL_NAME_MAX_BYTES}"
        )
    if require_name and not settings.name.strip():
        raise ValueError("Secondary channels need a name")
    if len(settings.psk) not in VALID_PSK_LENGTHS:
        raise ValueError(f"Key must be 0, 1, 16 or 32 bytes (got {len(settings.psk)})")


def _same_channel(a: channel_pb2.ChannelSettings, b: channel_pb2.ChannelSettings) -> bool:
    return a.name == b.name and a.psk == b.psk


def plan_add(
    channels: list[channel_pb2.Channel], settings: channel_pb2.ChannelSettings
) -> channel_pb2.Channel:
    """Return the channel to write for a new secondary channel (first free slot)."""
    for ch in channels:
        if ch.index != 0 and ch.role != ROLE.DISABLED and ch.settings.name == settings.name:
            raise ValueError(f"A channel named '{settings.name}' already exists")
    for ch in channels:
        if ch.index != 0 and ch.role == ROLE.DISABLED:
            new = channel_pb2.Channel(index=ch.index, role=ROLE.SECONDARY)
            new.settings.CopyFrom(settings)
            return new
    raise ValueError("All 8 channel slots are in use")


def plan_delete(channels: list[channel_pb2.Channel], index: int) -> list[channel_pb2.Channel]:
    """Remove a secondary channel and shift the following ones down.

    Returns only the slots whose content changed, in ascending order (the
    order the library uses). Over a local serial link the admin channel index
    does not matter; a remote/BLE admin path would have to track it.
    """
    by_index = {c.index: c for c in channels}
    if index <= 0 or index not in by_index:
        raise ValueError("The primary channel cannot be deleted")
    if by_index[index].role != ROLE.SECONDARY:
        raise ValueError("Only secondary channels can be deleted")
    result: list[channel_pb2.Channel] = []
    for slot in range(index, MAX_CHANNELS):
        new = channel_pb2.Channel(index=slot, role=ROLE.DISABLED)
        source = by_index.get(slot + 1)
        if source is not None and source.role != ROLE.DISABLED:
            new.role = source.role
            new.settings.CopyFrom(source.settings)
        old = by_index.get(slot)
        if old is None or old.SerializeToString() != new.SerializeToString():
            result.append(new)
    return result


def parse_channel_url(url: str) -> tuple[apponly_pb2.ChannelSet, bool]:
    """Decode a https://meshtastic.org/e/#... share link. Returns (set, add_only)."""
    url = url.strip()
    if "#" not in url:
        raise ValueError("Not a Meshtastic channel link (missing #...)")
    head, b64 = url.split("#", 1)
    add_only = "add=true" in head
    b64 = b64.strip().replace("-", "+").replace("_", "/")
    b64 += "=" * (-len(b64) % 4)
    channel_set = apponly_pb2.ChannelSet()
    try:
        channel_set.ParseFromString(base64.b64decode(b64))
    except Exception as err:
        raise ValueError("The link could not be decoded") from err
    if not channel_set.settings:
        raise ValueError("The link contains no channels")
    for settings in channel_set.settings:
        validate_channel_settings(settings, require_name=False)
    return channel_set, add_only


def build_channel_url(
    settings: list[channel_pb2.ChannelSettings], lora: Any | None, add_only: bool = False
) -> str:
    """Encode channels (and optionally the LoRa config) as a share link."""
    channel_set = apponly_pb2.ChannelSet()
    for item in settings:
        channel_set.settings.append(item)
    if lora is not None:
        channel_set.lora_config.CopyFrom(lora)
    b64 = base64.urlsafe_b64encode(channel_set.SerializeToString()).decode().rstrip("=")
    return f"{URL_BASE}{'?add=true' if add_only else ''}#{b64}"


def plan_import(
    channels: list[channel_pb2.Channel], channel_set: apponly_pb2.ChannelSet, replace: bool
) -> tuple[list[channel_pb2.Channel], list[str], list[str]]:
    """Plan channel writes for a share link. Returns (writes, added, skipped)."""
    added: list[str] = []
    skipped: list[str] = []
    writes: list[channel_pb2.Channel] = []
    if replace:
        if len(channel_set.settings) > MAX_CHANNELS:
            raise ValueError("The link has more than 8 channels")
        for slot in range(MAX_CHANNELS):
            new = channel_pb2.Channel(index=slot, role=ROLE.DISABLED)
            if slot < len(channel_set.settings):
                new.role = ROLE.PRIMARY if slot == 0 else ROLE.SECONDARY
                new.settings.CopyFrom(channel_set.settings[slot])
                added.append(new.settings.name or "primary")
            writes.append(new)
        return writes, added, skipped
    working = {c.index: c for c in channels}
    for settings in channel_set.settings:
        label = settings.name or "primary"
        # Unnamed channels (the default primary) cannot be added as secondaries.
        if not settings.name or any(
            c.role != ROLE.DISABLED and _same_channel(c.settings, settings)
            for c in working.values()
        ):
            skipped.append(label)
            continue
        new = plan_add(list(working.values()), settings)
        working[new.index] = new
        writes.append(new)
        added.append(label)
    return writes, added, skipped


def write_channels(iface: Any, writes: list[channel_pb2.Channel]) -> None:
    """Send planned channel writes and update the cached channel list."""
    node = iface.localNode
    for channel in writes:
        admin = admin_pb2.AdminMessage()
        admin.set_channel.CopyFrom(channel)
        send_admin(iface, admin)
        if node.channels is not None and channel.index < len(node.channels):
            node.channels[channel.index].CopyFrom(channel)


def import_channels(iface: Any, url: str, replace: bool) -> dict[str, Any]:
    """Apply a share link. Replace mode also writes its LoRa config (radio reboots)."""
    channel_set, _ = parse_channel_url(url)
    writes, added, skipped = plan_import(
        list(iface.localNode.channels or []), channel_set, replace
    )
    write_channels(iface, writes)
    lora_changed = False
    if replace and channel_set.HasField("lora_config"):
        write_sections(iface, [(KIND_CONFIG, "lora", channel_set.lora_config)])
        lora_changed = True
    return {"added": added, "skipped": skipped, "lora_changed": lora_changed}


def channel_share_url(iface: Any, index: int | None) -> str:
    """Share link for one channel (add-only) or for all channels plus LoRa settings."""
    node = iface.localNode
    channels = [c for c in (node.channels or []) if c.role != ROLE.DISABLED]
    if index is None:
        return build_channel_url([c.settings for c in channels], node.localConfig.lora)
    channel = next((c for c in channels if c.index == index), None)
    if channel is None:
        raise ValueError("No such channel")
    return build_channel_url([channel.settings], node.localConfig.lora, add_only=index != 0)


# Stands in for a channel key that non-admin users must not see. It is longer
# than four characters so the panel still labels the channel "custom key", and
# it is not valid base64, so it can never be mistaken for (or written as) a key.
REDACTED_PSK = "redacted"


def _redact_psk(psk: Any) -> Any:
    """Keep "no encryption" and the public default-key index, hide real keys."""
    if not psk:
        return psk
    try:
        if len(base64.b64decode(psk, validate=True)) <= 1:
            return psk
    except (TypeError, ValueError):
        pass
    return REDACTED_PSK


def redact_channel_secrets(channels: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Return copies of channel dicts (from ``to_dict``) with their keys hidden."""
    result = []
    for channel in channels:
        channel = dict(channel)
        settings = channel.get("settings")
        if isinstance(settings, dict) and "psk" in settings:
            channel["settings"] = {**settings, "psk": _redact_psk(settings["psk"])}
        result.append(channel)
    return result


def snapshot_for_user(data: dict[str, Any], is_admin: bool) -> dict[str, Any]:
    """Strip channel keys and conversations from a snapshot unless the user is an admin.

    Only ``channels`` carries secrets (the other sections are LoRa settings,
    device info and node data with public keys); ``security`` config is only
    returned by the admin-only ``config_get`` command.
    """
    if is_admin:
        return data
    return {
        **data,
        "channels": redact_channel_secrets(data.get("channels") or []),
        "conversations": [],
    }


# Live events that carry message content or delivery state. Reading and sending
# messages is admin-only, so these never reach non-admin subscribers.
MESSAGE_EVENT_TYPES = frozenset({"message", "message_status"})


def event_visible(event: dict[str, Any], is_admin: bool) -> bool:
    """Return whether a live panel event may be forwarded to this user."""
    return is_admin or event.get("type") not in MESSAGE_EVENT_TYPES


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
