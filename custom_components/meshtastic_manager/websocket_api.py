"""WebSocket API used by the Meshtastic Manager panel."""

from __future__ import annotations

from functools import wraps
import logging
from typing import TYPE_CHECKING, Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN, MAX_TEXT_BYTES

if TYPE_CHECKING:
    from .client import MeshtasticClient

_LOGGER = logging.getLogger(__name__)

PREFIX = DOMAIN


def _get_client(hass: HomeAssistant, entry_id: str) -> MeshtasticClient | None:
    entry = hass.config_entries.async_get_entry(entry_id)
    if entry is None or entry.domain != DOMAIN or not hasattr(entry, "runtime_data"):
        return None
    return entry.runtime_data


def _with_client(func):
    """Resolve ``entry_id`` to a client and turn library errors into WS errors."""

    @wraps(func)
    async def wrapper(hass, connection, msg):
        client = _get_client(hass, msg["entry_id"])
        if client is None:
            connection.send_error(msg["id"], "not_found", "Config entry not found or not loaded")
            return
        try:
            await func(hass, connection, msg, client)
        except ConnectionError as err:
            connection.send_error(msg["id"], "not_connected", str(err))
        except (ValueError, KeyError) as err:
            connection.send_error(msg["id"], "invalid_format", str(err))
        except Exception as err:  # noqa: BLE001 - serial/socket/library errors
            _LOGGER.warning("Meshtastic command %s failed: %s", msg["type"], err)
            connection.send_error(msg["id"], "radio_error", str(err) or type(err).__name__)

    return wrapper


@callback
def async_register(hass: HomeAssistant) -> None:
    """Register all commands."""
    for command in (
        ws_entries,
        ws_snapshot,
        ws_subscribe,
        ws_messages,
        ws_mark_read,
        ws_delete_conversation,
        ws_send_text,
        ws_node_request,
        ws_traceroutes,
        ws_config_get,
        ws_config_set,
        ws_channel_set,
        ws_owner_set,
        ws_device_action,
        ws_fixed_position,
        ws_reconnect,
    ):
        websocket_api.async_register_command(hass, command)


@websocket_api.websocket_command({vol.Required("type"): f"{PREFIX}/entries"})
@callback
def ws_entries(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """List configured radios."""
    result = []
    for entry in hass.config_entries.async_entries(DOMAIN):
        client = getattr(entry, "runtime_data", None)
        result.append(
            {
                "entry_id": entry.entry_id,
                "title": entry.title,
                "state": entry.state.value,
                "status": client.status() if hasattr(client, "status") else None,
            }
        )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {vol.Required("type"): f"{PREFIX}/snapshot", vol.Required("entry_id"): str}
)
@websocket_api.async_response
@_with_client
async def ws_snapshot(hass, connection, msg, client: MeshtasticClient) -> None:
    """Return status, nodes, channels and conversation summaries."""
    data = client.snapshot()
    data["conversations"] = client.store.conversations()
    data["is_admin"] = connection.user.is_admin
    connection.send_result(msg["id"], data)


@websocket_api.websocket_command(
    {vol.Required("type"): f"{PREFIX}/subscribe", vol.Required("entry_id"): str}
)
@websocket_api.async_response
@_with_client
async def ws_subscribe(hass, connection, msg, client: MeshtasticClient) -> None:
    """Stream live events (messages, nodes, status, acks, traceroutes)."""

    @callback
    def forward(event: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], event))

    connection.subscriptions[msg["id"]] = client.async_add_listener(forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/messages",
        vol.Required("entry_id"): str,
        vol.Required("conversation"): str,
        vol.Optional("before"): int,
        vol.Optional("limit", default=200): vol.All(int, vol.Range(min=1, max=1000)),
    }
)
@websocket_api.async_response
@_with_client
async def ws_messages(hass, connection, msg, client: MeshtasticClient) -> None:
    """Return messages of one conversation."""
    connection.send_result(
        msg["id"],
        client.store.conversation(msg["conversation"], msg.get("before"), msg["limit"]),
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/mark_read",
        vol.Required("entry_id"): str,
        vol.Required("conversation"): str,
    }
)
@websocket_api.async_response
@_with_client
async def ws_mark_read(hass, connection, msg, client: MeshtasticClient) -> None:
    """Mark a conversation as read."""
    client.store.mark_read(msg["conversation"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/delete_conversation",
        vol.Required("entry_id"): str,
        vol.Required("conversation"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_delete_conversation(hass, connection, msg, client: MeshtasticClient) -> None:
    """Delete the stored history of a conversation."""
    client.store.delete_conversation(msg["conversation"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/send_text",
        vol.Required("entry_id"): str,
        vol.Required("text"): vol.All(str, vol.Length(min=1)),
        vol.Optional("to"): int,
        vol.Optional("channel", default=0): vol.All(int, vol.Range(min=0, max=7)),
        vol.Optional("reply_id"): int,
    }
)
@websocket_api.async_response
@_with_client
async def ws_send_text(hass, connection, msg, client: MeshtasticClient) -> None:
    """Send a text message."""
    from .const import BROADCAST_NUM  # noqa: PLC0415

    if len(msg["text"].encode()) > MAX_TEXT_BYTES:
        connection.send_error(msg["id"], "invalid_format", "Message too long")
        return
    message = await client.async_send_text(
        msg["text"], msg.get("to", BROADCAST_NUM), msg["channel"], msg.get("reply_id")
    )
    connection.send_result(msg["id"], message)


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/node_request",
        vol.Required("entry_id"): str,
        vol.Required("node"): int,
        vol.Required("request"): vol.In(["traceroute", "position", "telemetry", "nodeinfo"]),
        vol.Optional("channel", default=0): vol.All(int, vol.Range(min=0, max=7)),
    }
)
@websocket_api.async_response
@_with_client
async def ws_node_request(hass, connection, msg, client: MeshtasticClient) -> None:
    """Send a request to a remote node (response arrives as an event)."""
    handler = {
        "traceroute": client.async_traceroute,
        "position": client.async_request_position,
        "telemetry": client.async_request_telemetry,
        "nodeinfo": client.async_request_nodeinfo,
    }[msg["request"]]
    packet_id = await handler(msg["node"], msg["channel"])
    connection.send_result(msg["id"], {"packet_id": packet_id})


@websocket_api.websocket_command(
    {vol.Required("type"): f"{PREFIX}/traceroutes", vol.Required("entry_id"): str}
)
@websocket_api.async_response
@_with_client
async def ws_traceroutes(hass, connection, msg, client: MeshtasticClient) -> None:
    """Return stored traceroute results."""
    connection.send_result(msg["id"], client.store.traceroutes)


@websocket_api.websocket_command(
    {vol.Required("type"): f"{PREFIX}/config_get", vol.Required("entry_id"): str}
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_config_get(hass, connection, msg, client: MeshtasticClient) -> None:
    """Return schema + current values of all config sections, channels and owner."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    local = client.local_node() or {}
    connection.send_result(
        msg["id"],
        {
            "schema": protoutil.config_schema(),
            "values": protoutil.config_values(iface),
            "channels": [protoutil.to_dict(c) for c in (iface.localNode.channels or [])],
            "owner": local.get("user", {}),
            "url": await hass.async_add_executor_job(protoutil.channel_url, iface),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/config_set",
        vol.Required("entry_id"): str,
        vol.Required("sections"): [
            {
                vol.Required("kind"): vol.In(["config", "module"]),
                vol.Required("section"): str,
                vol.Required("values"): dict,
            }
        ],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_config_set(hass, connection, msg, client: MeshtasticClient) -> None:
    """Write config sections to the radio."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    sections = [
        (s["kind"], s["section"], protoutil.build_section(iface, s["kind"], s["section"], s["values"]))
        for s in msg["sections"]
    ]
    await client.async_run(protoutil.write_sections, iface, sections)
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/channel_set",
        vol.Required("entry_id"): str,
        vol.Required("index"): vol.All(int, vol.Range(min=0, max=7)),
        vol.Required("role"): vol.In(["DISABLED", "PRIMARY", "SECONDARY"]),
        vol.Optional("settings", default={}): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_channel_set(hass, connection, msg, client: MeshtasticClient) -> None:
    """Write one channel."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    await client.async_run(
        protoutil.write_channel, iface, msg["index"], msg["role"], msg["settings"]
    )
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/owner_set",
        vol.Required("entry_id"): str,
        vol.Required("long_name"): vol.All(str, vol.Length(min=1, max=39)),
        vol.Required("short_name"): vol.All(str, vol.Length(min=1, max=4)),
        vol.Optional("is_licensed", default=False): bool,
        vol.Optional("is_unmessagable", default=False): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_owner_set(hass, connection, msg, client: MeshtasticClient) -> None:
    """Set the owner names of the local node."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    await client.async_run(
        protoutil.write_owner,
        iface,
        msg["long_name"],
        msg["short_name"],
        msg["is_licensed"],
        msg["is_unmessagable"],
    )
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/device_action",
        vol.Required("entry_id"): str,
        vol.Required("action"): vol.In(
            [
                "reboot",
                "shutdown",
                "reboot_ota",
                "factory_reset_config",
                "factory_reset_device",
                "reset_nodedb",
                "set_time",
                "favorite",
                "unfavorite",
                "ignore",
                "unignore",
                "remove_node",
                "remove_fixed_position",
            ]
        ),
        vol.Optional("node"): int,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_device_action(hass, connection, msg, client: MeshtasticClient) -> None:
    """Run an admin action on the local radio."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    await client.async_run(protoutil.device_action, iface, msg["action"], msg.get("node"))
    if msg.get("node") is not None:
        node = client.node(msg["node"])
        client._emit(  # noqa: SLF001
            {"type": "node", "node": node}
            if node is not None
            else {"type": "node_removed", "num": msg["node"]}
        )
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{PREFIX}/fixed_position",
        vol.Required("entry_id"): str,
        vol.Required("latitude"): vol.All(vol.Coerce(float), vol.Range(min=-90, max=90)),
        vol.Required("longitude"): vol.All(vol.Coerce(float), vol.Range(min=-180, max=180)),
        vol.Optional("altitude", default=0): vol.Coerce(int),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_fixed_position(hass, connection, msg, client: MeshtasticClient) -> None:
    """Set a fixed position on the local node."""
    from . import protoutil  # noqa: PLC0415

    iface = client._require_iface()  # noqa: SLF001
    await client.async_run(
        protoutil.set_fixed_position, iface, msg["latitude"], msg["longitude"], msg["altitude"]
    )
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): f"{PREFIX}/reconnect", vol.Required("entry_id"): str}
)
@websocket_api.require_admin
@websocket_api.async_response
@_with_client
async def ws_reconnect(hass, connection, msg, client: MeshtasticClient) -> None:
    """Drop and re-open the radio connection."""
    await client.async_reconnect()
    connection.send_result(msg["id"])
