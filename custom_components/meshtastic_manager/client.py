"""Connection to a Meshtastic radio.

The official ``meshtastic`` library is thread based: a reader thread parses
frames from the radio and a publishing thread delivers events through the
process-global ``pypubsub`` bus. This module owns one interface per config
entry, marshals every library callback onto the Home Assistant event loop and
runs every blocking library call in the executor.
"""

from __future__ import annotations

import asyncio
import base64
from collections.abc import Callable
import contextlib
import logging
import time
from typing import TYPE_CHECKING, Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import (
    BROADCAST_NUM,
    CONF_CONNECTION_TYPE,
    CONF_DEVICE,
    CONF_HOST,
    CONF_PORT,
    CONNECT_TIMEOUT,
    CONNECTION_TCP,
    DEFAULT_TCP_PORT,
    EVENT_MESSAGE,
    RECONNECT_MAX,
    RECONNECT_MIN,
    SIGNAL_UPDATE,
)
from .store import MeshStore

if TYPE_CHECKING:
    from homeassistant.config_entries import ConfigEntry

_LOGGER = logging.getLogger(__name__)

# pypubsub topics we listen to. Subscribing to a parent topic delivers all of
# its subtopics too (meshtastic.receive.text, .position, ...).
TOPIC_RECEIVE = "meshtastic.receive"
TOPIC_ESTABLISHED = "meshtastic.connection.established"
TOPIC_LOST = "meshtastic.connection.lost"
TOPIC_NODE = "meshtastic.node.updated"

# Routing ACKs can arrive before the executor job that sent the packet returns.
EARLY_ACK_TTL = 120


def sanitize(value: Any) -> Any:
    """Return a JSON-serialisable copy of a library dict (drop protobufs, encode bytes)."""
    if isinstance(value, dict):
        return {
            k: sanitize(v)
            for k, v in value.items()
            if k != "raw" and not hasattr(v, "DESCRIPTOR")
        }
    if isinstance(value, (list, tuple)):
        return [sanitize(v) for v in value]
    if isinstance(value, (bytes, bytearray)):
        return base64.b64encode(bytes(value)).decode()
    return value


def node_id(num: int) -> str:
    """Return the canonical !xxxxxxxx id of a node number."""
    return f"!{num & 0xFFFFFFFF:08x}"


class MeshtasticClient:
    """Owns the radio interface for one config entry."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry, store: MeshStore) -> None:
        """Initialise the client (does not connect)."""
        self.hass = hass
        self.entry = entry
        self.store = store
        self.iface: Any = None
        self.connected = False
        self.last_error: str | None = None
        self.connected_since: float | None = None
        self.local_stats: dict[str, Any] = {}
        self._listeners: set[Callable[[dict[str, Any]], None]] = set()
        self._stopping = False
        self._task: asyncio.Task | None = None
        self._lost = asyncio.Event()
        self._subscribed = False
        self._early_acks: dict[int, tuple[float, dict[str, Any]]] = {}
        self._pub: Any = None

    # ------------------------------------------------------------------ lifecycle

    @property
    def my_num(self) -> int | None:
        """Return the local node number once known."""
        info = getattr(self.iface, "myInfo", None) if self.iface else None
        return info.my_node_num if info else None

    @property
    def connection_label(self) -> str:
        """Human readable connection target."""
        data = self.entry.data
        if data.get(CONF_CONNECTION_TYPE) == CONNECTION_TCP:
            return f"{data[CONF_HOST]}:{data.get(CONF_PORT, DEFAULT_TCP_PORT)}"
        return data[CONF_DEVICE]

    async def async_start(self) -> None:
        """Start the background connect/reconnect loop."""
        self._pub = await self.hass.async_add_import_executor_job(_import_pubsub)
        self._subscribe()
        self._task = self.entry.async_create_background_task(
            self.hass, self._run(), f"meshtastic_manager connection {self.entry.entry_id}"
        )

    async def async_stop(self) -> None:
        """Stop the loop and close the radio."""
        self._stopping = True
        self._lost.set()
        if self._task:
            self._task.cancel()
            with contextlib.suppress(asyncio.CancelledError):
                await self._task
        self._unsubscribe()
        await self._async_close_iface()

    async def async_reconnect(self) -> None:
        """Force a reconnect (e.g. after a reboot command)."""
        self._lost.set()

    async def _run(self) -> None:
        delay = RECONNECT_MIN
        while not self._stopping:
            self._lost.clear()
            try:
                await self._async_connect()
            except asyncio.CancelledError:
                raise
            except BaseException as err:  # noqa: BLE001 - library may raise SystemExit
                self.last_error = str(err) or type(err).__name__
                _LOGGER.warning(
                    "Cannot connect to Meshtastic radio at %s: %s (retry in %ss)",
                    self.connection_label,
                    self.last_error,
                    delay,
                )
                self._set_connected(False)
                await self._async_close_iface()
                await asyncio.sleep(delay)
                delay = min(delay * 2, RECONNECT_MAX)
                continue

            delay = RECONNECT_MIN
            self.last_error = None
            self._set_connected(True)
            _LOGGER.info("Connected to Meshtastic radio at %s", self.connection_label)
            await self._lost.wait()
            if self._stopping:
                break
            _LOGGER.info("Connection to Meshtastic radio at %s lost", self.connection_label)
            self._set_connected(False)
            await self._async_close_iface()
            await asyncio.sleep(RECONNECT_MIN)

    async def _async_connect(self) -> None:
        data = dict(self.entry.data)
        self.iface = await self.hass.async_add_import_executor_job(_create_iface, data)
        # Start reading only after self.iface is set so that every pubsub
        # callback emitted during the config download passes the filter.
        await asyncio.wait_for(
            self.hass.async_add_executor_job(_connect_iface, self.iface),
            timeout=CONNECT_TIMEOUT,
        )

    async def _async_close_iface(self) -> None:
        iface, self.iface = self.iface, None
        if iface is not None:
            await self.hass.async_add_executor_job(_close_iface, iface)

    @callback
    def _set_connected(self, connected: bool) -> None:
        if connected == self.connected and connected:
            return
        self.connected = connected
        self.connected_since = time.time() if connected else None
        self._emit({"type": "status", "status": self.status()})
        if connected:
            self._emit({"type": "snapshot"})
        async_dispatcher_send(self.hass, SIGNAL_UPDATE.format(self.entry.entry_id))

    # ------------------------------------------------------------------ pubsub

    def _subscribe(self) -> None:
        if self._subscribed:
            return
        # pypubsub keeps weak references; bound methods of self stay alive
        # as long as the client does.
        self._pub.subscribe(self._on_receive, TOPIC_RECEIVE)
        self._pub.subscribe(self._on_established, TOPIC_ESTABLISHED)
        self._pub.subscribe(self._on_lost, TOPIC_LOST)
        self._pub.subscribe(self._on_node, TOPIC_NODE)
        self._subscribed = True

    def _unsubscribe(self) -> None:
        if not self._subscribed:
            return
        for listener, topic in (
            (self._on_receive, TOPIC_RECEIVE),
            (self._on_established, TOPIC_ESTABLISHED),
            (self._on_lost, TOPIC_LOST),
            (self._on_node, TOPIC_NODE),
        ):
            with contextlib.suppress(Exception):
                self._pub.unsubscribe(listener, topic)
        self._subscribed = False

    # These run on the library's publishing thread.
    def _on_receive(self, packet: dict, interface: Any = None) -> None:
        if interface is not None and interface is self.iface:
            self.hass.loop.call_soon_threadsafe(self._handle_packet, interface, packet)

    def _on_established(self, interface: Any = None) -> None:
        """Connection (re)established; handled by the connect loop."""

    def _on_lost(self, interface: Any = None) -> None:
        if interface is not None and interface is self.iface:
            self.hass.loop.call_soon_threadsafe(self._lost.set)

    def _on_node(self, node: dict, interface: Any = None) -> None:
        if interface is not None and interface is self.iface and self.connected:
            num = node.get("num")
            if num is not None:
                self.hass.loop.call_soon_threadsafe(self._emit_node, num)

    # ------------------------------------------------------------------ events

    @callback
    def async_add_listener(self, listener: Callable[[dict[str, Any]], None]) -> Callable[[], None]:
        """Register a callback receiving every event; returns an unsubscribe callable."""
        self._listeners.add(listener)
        return lambda: self._listeners.discard(listener)

    @callback
    def _emit(self, event: dict[str, Any]) -> None:
        event["entry_id"] = self.entry.entry_id
        for listener in list(self._listeners):
            try:
                listener(event)
            except Exception:  # noqa: BLE001
                _LOGGER.exception("Error in Meshtastic event listener")

    @callback
    def _emit_node(self, num: int) -> None:
        node = self.node(num)
        if node is not None:
            self._emit({"type": "node", "node": node})
            if num == self.my_num:
                async_dispatcher_send(self.hass, SIGNAL_UPDATE.format(self.entry.entry_id))

    @callback
    def _handle_packet(self, iface: Any, packet: dict) -> None:
        if iface is not self.iface:
            return
        decoded = packet.get("decoded") or {}
        portnum = decoded.get("portnum")
        sender = packet.get("from")

        if portnum == "TEXT_MESSAGE_APP":
            self._handle_text(packet, decoded)
        elif portnum == "ROUTING_APP":
            self._handle_routing(packet, decoded)
        elif portnum == "TRACEROUTE_APP" and decoded.get("requestId"):
            self._handle_traceroute(packet, decoded)
        elif portnum == "TELEMETRY_APP" and sender == self.my_num:
            stats = (decoded.get("telemetry") or {}).get("localStats")
            if stats:
                self.local_stats = sanitize(stats)
                async_dispatcher_send(self.hass, SIGNAL_UPDATE.format(self.entry.entry_id))

        if sender is not None:
            hops = None
            if "hopStart" in packet and "hopLimit" in packet:
                hops = packet["hopStart"] - packet["hopLimit"]
            node = (self.iface.nodesByNum or {}).get(sender) if self.iface else None
            if node is not None:
                node["lastHeard"] = max(node.get("lastHeard") or 0, int(time.time()))
                if "rxSnr" in packet:
                    node["snr"] = packet["rxSnr"]
                if hops is not None:
                    node["hopsAway"] = hops
                if "rxRssi" in packet:
                    node["rssi"] = packet["rxRssi"]
                if packet.get("viaMqtt"):
                    node["viaMqtt"] = True
            self._emit_node(sender)

    @callback
    def _handle_text(self, packet: dict, decoded: dict) -> None:
        to = packet.get("to", BROADCAST_NUM)
        hops = None
        if "hopStart" in packet and "hopLimit" in packet:
            hops = packet["hopStart"] - packet["hopLimit"]
        message = {
            "id": packet.get("id"),
            # The radio clock may be unset, so use our own receive time.
            "time": int(time.time()),
            "rx_time": packet.get("rxTime"),
            "from": packet.get("from"),
            "to": to,
            "channel": packet.get("channel", 0),
            "text": decoded.get("text", ""),
            "dir": "in",
            "status": "received",
            "snr": packet.get("rxSnr"),
            "rssi": packet.get("rxRssi"),
            "hops": hops,
            "via_mqtt": bool(packet.get("viaMqtt")),
            "reply_id": decoded.get("replyId"),
            "emoji": bool(decoded.get("emoji")),
        }
        message["conversation"] = self.conversation_key(message)
        self.store.add_message(message)
        self._emit({"type": "message", "message": message})
        sender = self.node(message["from"]) or {}
        user = sender.get("user") or {}
        self.hass.bus.async_fire(
            EVENT_MESSAGE,
            {
                "entry_id": self.entry.entry_id,
                "from": node_id(message["from"]),
                "from_name": user.get("longName"),
                "to": "broadcast" if to == BROADCAST_NUM else node_id(to),
                "channel": message["channel"],
                "text": message["text"],
                "direct": to != BROADCAST_NUM,
            },
        )
        async_dispatcher_send(self.hass, SIGNAL_UPDATE.format(self.entry.entry_id))

    @callback
    def _handle_routing(self, packet: dict, decoded: dict) -> None:
        request_id = decoded.get("requestId")
        if not request_id:
            return
        routing = decoded.get("routing") or {}
        info = {
            "error": routing.get("errorReason", "NONE"),
            "from": packet.get("from"),
        }
        if not self._apply_ack(request_id, info):
            self._prune_early_acks()
            self._early_acks[request_id] = (time.monotonic(), info)

    @callback
    def _apply_ack(self, request_id: int, info: dict[str, Any]) -> bool:
        message = self.store.find_outgoing(request_id)
        if message is None:
            return False
        if info["error"] != "NONE":
            status = "failed"
        elif message["to"] != BROADCAST_NUM and info["from"] == message["to"]:
            status = "delivered"
        else:
            # Our own radio heard the packet being rebroadcast (implicit ACK).
            status = "sent"
        if message["status"] == "delivered" and status != "failed":
            return True
        self.store.update_message(request_id, status=status, error=info["error"])
        self._emit(
            {"type": "message_status", "id": request_id, "status": status, "error": info["error"]}
        )
        return True

    def _prune_early_acks(self) -> None:
        cutoff = time.monotonic() - EARLY_ACK_TTL
        for key in [k for k, (ts, _) in self._early_acks.items() if ts < cutoff]:
            del self._early_acks[key]

    @callback
    def _handle_traceroute(self, packet: dict, decoded: dict) -> None:
        route = decoded.get("traceroute") or {}
        result = {
            "time": int(time.time()),
            "request_id": decoded.get("requestId"),
            # The response comes back from the traced node to us.
            "target": packet.get("from"),
            "route": route.get("route", []),
            "snr_towards": route.get("snrTowards", []),
            "route_back": route.get("routeBack", []),
            "snr_back": route.get("snrBack", []),
        }
        self.store.add_traceroute(result)
        self._emit({"type": "traceroute", "traceroute": result})

    # ------------------------------------------------------------------ queries

    def conversation_key(self, message: dict[str, Any]) -> str:
        """Return ch:<index> for broadcasts or dm:<node num> for direct messages."""
        if message["to"] == BROADCAST_NUM:
            return f"ch:{message['channel']}"
        other = message["to"] if message["from"] == self.my_num else message["from"]
        return f"dm:{other}"

    def node(self, num: int) -> dict[str, Any] | None:
        """Return a sanitised copy of a node from the radio's node database."""
        if self.iface is None or not self.iface.nodesByNum:
            return None
        node = self.iface.nodesByNum.get(num)
        return sanitize(node) if node is not None else None

    def nodes(self) -> list[dict[str, Any]]:
        """Return all nodes."""
        if self.iface is None or not self.iface.nodesByNum:
            return []
        return [sanitize(n) for n in list(self.iface.nodesByNum.values())]

    def status(self) -> dict[str, Any]:
        """Connection status summary."""
        return {
            "connected": self.connected,
            "connection": self.connection_label,
            "connection_type": self.entry.data.get(CONF_CONNECTION_TYPE),
            "last_error": self.last_error,
            "connected_since": self.connected_since,
            "my_num": self.my_num,
        }

    def snapshot(self) -> dict[str, Any]:
        """Everything the panel needs on load (except messages and config)."""
        from . import protoutil  # noqa: PLC0415 - imports meshtastic protobufs

        iface = self.iface
        data: dict[str, Any] = {
            "status": self.status(),
            "title": self.entry.title,
            "nodes": self.nodes(),
            "my_info": None,
            "metadata": None,
            "channels": [],
            "local_stats": self.local_stats,
        }
        if iface is not None and self.connected:
            if iface.myInfo is not None:
                data["my_info"] = protoutil.to_dict(iface.myInfo)
            if iface.metadata is not None:
                data["metadata"] = protoutil.to_dict(iface.metadata)
            data["channels"] = [
                protoutil.to_dict(ch) for ch in (iface.localNode.channels or [])
            ]
            data["lora"] = protoutil.to_dict(iface.localNode.localConfig.lora)
        return data

    def local_node(self) -> dict[str, Any] | None:
        """Return the local node entry."""
        num = self.my_num
        return self.node(num) if num is not None else None

    # ------------------------------------------------------------------ commands

    def _require_iface(self) -> Any:
        if self.iface is None or not self.connected:
            raise ConnectionError("Radio is not connected")
        return self.iface

    async def async_send_text(
        self, text: str, to: int = BROADCAST_NUM, channel: int = 0, reply_id: int | None = None
    ) -> dict[str, Any]:
        """Send a text message and track its delivery status."""
        iface = self._require_iface()

        def _send() -> Any:
            return iface.sendText(
                text,
                destinationId=to,
                wantAck=True,
                channelIndex=channel,
                replyId=reply_id,
            )

        packet = await self.hass.async_add_executor_job(_send)
        message = {
            "id": packet.id,
            "time": int(time.time()),
            "from": self.my_num,
            "to": to,
            "channel": channel,
            "text": text,
            "dir": "out",
            "status": "pending",
            "reply_id": reply_id,
        }
        message["conversation"] = self.conversation_key(message)
        self.store.add_message(message)
        self._emit({"type": "message", "message": message})
        early = self._early_acks.pop(packet.id, None)
        if early is not None:
            self._apply_ack(packet.id, early[1])
            message = self.store.find_outgoing(packet.id) or message
        return message

    async def async_send_data(
        self, port: str, payload: Any, to: int, channel: int = 0, want_response: bool = True
    ) -> int:
        """Send a protobuf payload on a port without blocking on the response."""
        iface = self._require_iface()
        from meshtastic.protobuf import portnums_pb2  # noqa: PLC0415

        port_num = portnums_pb2.PortNum.Value(port)

        def _send() -> int:
            hop_limit = iface.localNode.localConfig.lora.hop_limit or 3
            packet = iface.sendData(
                payload,
                destinationId=to,
                portNum=port_num,
                wantResponse=want_response,
                channelIndex=channel,
                hopLimit=hop_limit,
            )
            return packet.id

        return await self.hass.async_add_executor_job(_send)

    async def async_traceroute(self, to: int, channel: int = 0) -> int:
        """Start a traceroute; the result arrives as a ``traceroute`` event."""
        from meshtastic.protobuf import mesh_pb2  # noqa: PLC0415

        return await self.async_send_data(
            "TRACEROUTE_APP", mesh_pb2.RouteDiscovery(), to, channel
        )

    async def async_request_position(self, to: int, channel: int = 0) -> int:
        """Ask a node for its position."""
        from meshtastic.protobuf import mesh_pb2  # noqa: PLC0415

        return await self.async_send_data("POSITION_APP", mesh_pb2.Position(), to, channel)

    async def async_request_telemetry(self, to: int, channel: int = 0) -> int:
        """Ask a node for its device metrics."""
        from meshtastic.protobuf import telemetry_pb2  # noqa: PLC0415

        req = telemetry_pb2.Telemetry()
        req.device_metrics.CopyFrom(telemetry_pb2.DeviceMetrics())
        return await self.async_send_data("TELEMETRY_APP", req, to, channel)

    async def async_request_nodeinfo(self, to: int, channel: int = 0) -> int:
        """Exchange user info with a node."""
        iface = self._require_iface()
        from meshtastic.protobuf import mesh_pb2  # noqa: PLC0415

        me = mesh_pb2.User()
        local = iface.nodesByNum.get(self.my_num, {}).get("user", {})
        me.id = local.get("id", node_id(self.my_num or 0))
        me.long_name = local.get("longName", "")
        me.short_name = local.get("shortName", "")
        return await self.async_send_data("NODEINFO_APP", me, to, channel)

    async def async_run(self, func: Callable[..., Any], *args: Any) -> Any:
        """Run a blocking call against the interface in the executor."""
        self._require_iface()
        return await self.hass.async_add_executor_job(func, *args)


def _import_pubsub() -> Any:
    from pubsub import pub  # noqa: PLC0415

    return pub


def _create_iface(data: dict[str, Any]) -> Any:
    """Create (but do not connect) an interface. Runs in the executor."""
    if data.get(CONF_CONNECTION_TYPE) == CONNECTION_TCP:
        from meshtastic.tcp_interface import TCPInterface  # noqa: PLC0415

        return TCPInterface(
            data[CONF_HOST],
            portNumber=data.get(CONF_PORT, DEFAULT_TCP_PORT),
            connectNow=False,
            timeout=CONNECT_TIMEOUT,
        )
    from meshtastic.serial_interface import SerialInterface  # noqa: PLC0415

    return SerialInterface(data[CONF_DEVICE], connectNow=False, timeout=CONNECT_TIMEOUT)


def _connect_iface(iface: Any) -> None:
    """Open the port and wait for the radio to stream its config. Runs in the executor."""
    iface.connect()
    iface.waitForConfig()
    # waitForConfig() can return before config_complete is processed; wait for
    # it so the heartbeat is running and closing right after is clean.
    if not iface.isConnected.wait(CONNECT_TIMEOUT):
        raise TimeoutError("Radio did not complete the configuration download")


def _close_iface(iface: Any) -> None:
    with contextlib.suppress(BaseException):
        iface.close()
