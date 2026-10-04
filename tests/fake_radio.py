"""A fake Meshtastic radio speaking the stream API over TCP (for development).

Run:  python tests/fake_radio.py [--port 4403] [--lat 52.23 --lon 21.01]
Then add Meshtastic Manager with the "Network (TCP)" option pointing at it.

It answers the config download, acknowledges text messages, echoes direct
messages, answers traceroute/position/telemetry requests, applies admin
messages (config, channels, owner, favorites) and periodically injects
channel chatter and telemetry from a handful of simulated nodes.
"""

from __future__ import annotations

import argparse
import random
import socket
import struct
import threading
import time

from meshtastic.protobuf import (
    admin_pb2,
    channel_pb2,
    config_pb2,
    localonly_pb2,
    mesh_pb2,
    portnums_pb2,
    telemetry_pb2,
)

START1, START2 = 0x94, 0xC3
BROADCAST = 0xFFFFFFFF
MY_NUM = 0x1A2B3C4D

CHATTER = [
    "Dzień dobry wszystkim!",
    "Test zasięgu z dachu",
    "Ktoś mnie słyszy?",
    "73!",
    "Bateria 80%, wszystko OK",
    "Good morning mesh",
]


class FakeRadio:
    def __init__(self, lat: float, lon: float) -> None:
        self.lock = threading.Lock()
        self.clients: list[socket.socket] = []
        self.packet_id = random.randint(1, 1 << 30)
        self.config = localonly_pb2.LocalConfig()
        self.module = localonly_pb2.LocalModuleConfig()
        self.config.lora.region = config_pb2.Config.LoRaConfig.RegionCode.EU_868
        self.config.lora.modem_preset = config_pb2.Config.LoRaConfig.ModemPreset.LONG_FAST
        self.config.lora.hop_limit = 3
        self.config.lora.tx_enabled = True
        self.config.lora.use_preset = True
        self.config.device.role = config_pb2.Config.DeviceConfig.Role.CLIENT
        self.config.position.position_broadcast_secs = 900
        self.config.bluetooth.enabled = True
        self.config.bluetooth.fixed_pin = 123456
        self.module.telemetry.device_update_interval = 1800
        self.module.mqtt.address = "mqtt.meshtastic.org"
        self.channels = [channel_pb2.Channel(index=i) for i in range(8)]
        self.channels[0].role = channel_pb2.Channel.Role.PRIMARY
        self.channels[0].settings.psk = b"\x01"
        self.channels[1].role = channel_pb2.Channel.Role.SECONDARY
        self.channels[1].settings.name = "Dom"
        self.channels[1].settings.psk = bytes(random.getrandbits(8) for _ in range(32))
        self.nodes: dict[int, mesh_pb2.NodeInfo] = {}
        self._add_node(MY_NUM, "Home Gateway", "HOME", "HELTEC_V3", lat, lon, 0)
        names = [
            ("Łukasz Mobile", "LUK", "TBEAM"),
            ("Repeater Wieża", "RPT1", "RAK4631"),
            ("Solar Node Las", "SOL", "HELTEC_WIRELESS_TRACKER"),
            ("Kasia T-Echo", "KAS", "T_ECHO"),
            ("Mobile 7f3e", "7f3e", "TLORA_V2_1_1P6"),
            ("Station Pole", "POLE", "STATION_G2"),
        ]
        for i, (long_name, short, hw) in enumerate(names):
            num = 0x10000000 + i * 0x1111
            self._add_node(
                num,
                long_name,
                short,
                hw,
                lat + random.uniform(-0.08, 0.08),
                lon + random.uniform(-0.12, 0.12),
                i % 3,
                no_position=(i == 4),
            )

    def _add_node(self, num, long_name, short, hw, lat, lon, hops, no_position=False):
        info = mesh_pb2.NodeInfo()
        info.num = num
        info.user.id = f"!{num:08x}"
        info.user.long_name = long_name
        info.user.short_name = short
        info.user.hw_model = mesh_pb2.HardwareModel.Value(hw)
        if not no_position:
            info.position.latitude_i = int(lat * 1e7)
            info.position.longitude_i = int(lon * 1e7)
            info.position.altitude = random.randint(90, 160)
            info.position.time = int(time.time())
        info.snr = round(random.uniform(-12, 10), 2)
        info.last_heard = int(time.time()) - random.randint(0, 5000)
        info.hops_away = hops
        info.device_metrics.battery_level = random.randint(30, 101)
        info.device_metrics.voltage = round(random.uniform(3.6, 4.2), 2)
        info.device_metrics.channel_utilization = round(random.uniform(2, 18), 2)
        info.device_metrics.air_util_tx = round(random.uniform(0.1, 3), 2)
        info.device_metrics.uptime_seconds = random.randint(1000, 900000)
        self.nodes[num] = info

    # -------------------------------------------------------------- framing

    def send(self, from_radio: mesh_pb2.FromRadio, client: socket.socket | None = None) -> None:
        data = from_radio.SerializeToString()
        frame = bytes([START1, START2]) + struct.pack(">H", len(data)) + data
        with self.lock:
            targets = [client] if client else list(self.clients)
        for c in targets:
            try:
                c.sendall(frame)
            except OSError:
                pass

    def next_id(self) -> int:
        self.packet_id = (self.packet_id + 1) & 0xFFFFFFFF
        return self.packet_id

    def packet(self, sender, to, port, payload, channel=0, request_id=0, want_ack=False):
        fr = mesh_pb2.FromRadio()
        p = fr.packet
        setattr(p, "from", sender)
        p.to = to
        p.id = self.next_id()
        p.channel = channel
        p.rx_time = int(time.time())
        p.rx_snr = round(random.uniform(-10, 9), 2)
        p.rx_rssi = random.randint(-120, -60)
        hops = self.nodes[sender].hops_away if sender in self.nodes else 0
        p.hop_start = 3
        p.hop_limit = 3 - hops
        p.want_ack = want_ack
        p.decoded.portnum = port
        p.decoded.payload = payload if isinstance(payload, bytes) else payload.SerializeToString()
        if request_id:
            p.decoded.request_id = request_id
        if sender in self.nodes:
            self.nodes[sender].last_heard = int(time.time())
        return fr

    # -------------------------------------------------------------- config

    def send_config(self, client, config_id: int) -> None:
        fr = mesh_pb2.FromRadio()
        fr.my_info.my_node_num = MY_NUM
        fr.my_info.reboot_count = 3
        fr.my_info.min_app_version = 30200
        self.send(fr, client)
        fr = mesh_pb2.FromRadio()
        fr.metadata.firmware_version = "2.7.11.fake"
        fr.metadata.device_state_version = 24
        fr.metadata.hw_model = self.nodes[MY_NUM].user.hw_model
        fr.metadata.hasBluetooth = True
        fr.metadata.hasWifi = True
        self.send(fr, client)
        for node in self.nodes.values():
            fr = mesh_pb2.FromRadio()
            fr.node_info.CopyFrom(node)
            self.send(fr, client)
        for ch in self.channels:
            fr = mesh_pb2.FromRadio()
            fr.channel.CopyFrom(ch)
            self.send(fr, client)
        for field in localonly_pb2.LocalConfig.DESCRIPTOR.fields:
            if field.name == "version":
                continue
            fr = mesh_pb2.FromRadio()
            getattr(fr.config, field.name).CopyFrom(getattr(self.config, field.name))
            self.send(fr, client)
        for field in localonly_pb2.LocalModuleConfig.DESCRIPTOR.fields:
            if field.name == "version":
                continue
            fr = mesh_pb2.FromRadio()
            getattr(fr.moduleConfig, field.name).CopyFrom(getattr(self.module, field.name))
            self.send(fr, client)
        fr = mesh_pb2.FromRadio()
        fr.config_complete_id = config_id
        self.send(fr, client)

    # -------------------------------------------------------------- handling

    def ack(self, sender, request_id, error=0):
        routing = mesh_pb2.Routing()
        routing.error_reason = error
        self.send(self.packet(sender, MY_NUM, portnums_pb2.PortNum.ROUTING_APP, routing, request_id=request_id))

    def later(self, delay, fn, *args):
        threading.Timer(delay, fn, args).start()

    def handle_to_radio(self, client, data: bytes) -> None:
        msg = mesh_pb2.ToRadio()
        msg.ParseFromString(data)
        kind = msg.WhichOneof("payload_variant")
        if kind == "want_config_id":
            self.send_config(client, msg.want_config_id)
        elif kind == "packet":
            self.handle_packet(msg.packet)

    def handle_packet(self, p: mesh_pb2.MeshPacket) -> None:
        port = p.decoded.portnum
        to = p.to
        if port == portnums_pb2.PortNum.TEXT_MESSAGE_APP:
            text = p.decoded.payload.decode(errors="replace")
            print(f"TEXT to {to:08x} ch{p.channel}: {text}")
            if to == BROADCAST:
                self.later(1.0, self.ack, MY_NUM, p.id)
            elif to in self.nodes:
                if to == 0x10000000 + 4 * 0x1111:  # one node never answers
                    self.later(4.0, self.ack, MY_NUM, p.id, mesh_pb2.Routing.Error.MAX_RETRANSMIT)
                    return
                self.later(1.5, self.ack, to, p.id)
                reply = f"Echo: {text}".encode()[:200]
                self.later(3.0, lambda: self.send(
                    self.packet(to, MY_NUM, portnums_pb2.PortNum.TEXT_MESSAGE_APP, reply)
                ))
        elif port == portnums_pb2.PortNum.ADMIN_APP:
            self.handle_admin(p)
        elif port == portnums_pb2.PortNum.TRACEROUTE_APP and to in self.nodes:
            route = mesh_pb2.RouteDiscovery()
            hops = self.nodes[to].hops_away
            relays = [n for n in self.nodes if n not in (MY_NUM, to)][:hops]
            route.route.extend(relays)
            route.snr_towards.extend(int(random.uniform(-10, 10) * 4) for _ in range(len(relays) + 1))
            route.route_back.extend(list(reversed(relays)))
            route.snr_back.extend(int(random.uniform(-10, 10) * 4) for _ in range(len(relays) + 1))
            self.later(2.0, lambda: self.send(
                self.packet(to, MY_NUM, portnums_pb2.PortNum.TRACEROUTE_APP, route, request_id=p.id)
            ))
        elif port == portnums_pb2.PortNum.POSITION_APP and to in self.nodes:
            node = self.nodes[to]
            pos = mesh_pb2.Position()
            pos.latitude_i = node.position.latitude_i or int(52.2 * 1e7)
            pos.longitude_i = node.position.longitude_i or int(21.0 * 1e7)
            pos.altitude = node.position.altitude or 100
            pos.time = int(time.time())
            node.position.CopyFrom(pos)
            self.later(2.0, lambda: self.send(
                self.packet(to, MY_NUM, portnums_pb2.PortNum.POSITION_APP, pos, request_id=p.id)
            ))
        elif port == portnums_pb2.PortNum.TELEMETRY_APP and to in self.nodes:
            self.later(2.0, lambda: self.send(self.telemetry_packet(to, request_id=p.id)))
        elif port == portnums_pb2.PortNum.NODEINFO_APP and to in self.nodes:
            self.later(2.0, lambda: self.send(
                self.packet(to, MY_NUM, portnums_pb2.PortNum.NODEINFO_APP, self.nodes[to].user, request_id=p.id)
            ))

    def handle_admin(self, p: mesh_pb2.MeshPacket) -> None:
        admin = admin_pb2.AdminMessage()
        admin.ParseFromString(p.decoded.payload)
        kind = admin.WhichOneof("payload_variant")
        print(f"ADMIN {kind}")
        if kind == "set_config":
            section = admin.set_config.WhichOneof("payload_variant")
            getattr(self.config, section).CopyFrom(getattr(admin.set_config, section))
        elif kind == "set_module_config":
            section = admin.set_module_config.WhichOneof("payload_variant")
            getattr(self.module, section).CopyFrom(getattr(admin.set_module_config, section))
        elif kind == "set_channel":
            self.channels[admin.set_channel.index].CopyFrom(admin.set_channel)
        elif kind == "set_owner":
            user = self.nodes[MY_NUM].user
            user.long_name = admin.set_owner.long_name
            user.short_name = admin.set_owner.short_name
        elif kind == "set_favorite_node" and admin.set_favorite_node in self.nodes:
            self.nodes[admin.set_favorite_node].is_favorite = True
        elif kind == "remove_favorite_node" and admin.remove_favorite_node in self.nodes:
            self.nodes[admin.remove_favorite_node].is_favorite = False
        elif kind == "remove_by_nodenum":
            self.nodes.pop(admin.remove_by_nodenum, None)
        elif kind == "set_fixed_position":
            self.nodes[MY_NUM].position.CopyFrom(admin.set_fixed_position)
        elif kind == "get_config_request" and admin.get_config_request == admin_pb2.AdminMessage.ConfigType.SESSIONKEY_CONFIG:
            resp = admin_pb2.AdminMessage()
            resp.session_passkey = b"fakekey1"
            resp.get_config_response.sessionkey.SetInParent()
            self.send(self.packet(MY_NUM, MY_NUM, portnums_pb2.PortNum.ADMIN_APP, resp, request_id=p.id))
            return
        self.later(0.5, self.ack, MY_NUM, p.id)

    def telemetry_packet(self, sender, request_id=0):
        node = self.nodes[sender]
        tel = telemetry_pb2.Telemetry()
        tel.time = int(time.time())
        dm = node.device_metrics
        dm.channel_utilization = round(random.uniform(2, 25), 2)
        dm.air_util_tx = round(random.uniform(0.1, 4), 2)
        dm.uptime_seconds += 60
        tel.device_metrics.CopyFrom(dm)
        return self.packet(sender, MY_NUM if request_id else BROADCAST, portnums_pb2.PortNum.TELEMETRY_APP, tel, request_id=request_id)

    def local_stats(self):
        tel = telemetry_pb2.Telemetry()
        tel.time = int(time.time())
        s = tel.local_stats
        s.uptime_seconds = int(time.monotonic())
        s.num_packets_tx = random.randint(100, 200)
        s.num_packets_rx = random.randint(500, 900)
        s.num_packets_rx_bad = random.randint(0, 20)
        s.num_tx_relay = random.randint(10, 60)
        s.num_online_nodes = len(self.nodes)
        s.num_total_nodes = len(self.nodes)
        s.channel_utilization = round(random.uniform(2, 25), 2)
        return self.packet(MY_NUM, BROADCAST, portnums_pb2.PortNum.TELEMETRY_APP, tel)

    # -------------------------------------------------------------- loops

    def chatter_loop(self) -> None:
        while True:
            time.sleep(random.uniform(20, 45))
            others = [n for n in self.nodes if n != MY_NUM]
            if not others or not self.clients:
                continue
            sender = random.choice(others)
            choice = random.random()
            if choice < 0.4:
                text = random.choice(CHATTER).encode()
                self.send(self.packet(sender, BROADCAST, portnums_pb2.PortNum.TEXT_MESSAGE_APP, text, channel=random.choice([0, 0, 1])))
            elif choice < 0.8:
                self.send(self.telemetry_packet(sender))
            else:
                self.send(self.telemetry_packet(MY_NUM))
                self.send(self.local_stats())

    def client_loop(self, client: socket.socket) -> None:
        buf = b""
        with self.lock:
            self.clients.append(client)
        try:
            while True:
                chunk = client.recv(4096)
                if not chunk:
                    break
                buf += chunk
                while True:
                    start = buf.find(bytes([START1, START2]))
                    if start < 0:
                        buf = buf[-1:]
                        break
                    buf = buf[start:]
                    if len(buf) < 4:
                        break
                    length = struct.unpack(">H", buf[2:4])[0]
                    if len(buf) < 4 + length:
                        break
                    frame, buf = buf[4 : 4 + length], buf[4 + length :]
                    try:
                        self.handle_to_radio(client, frame)
                    except Exception as err:  # noqa: BLE001
                        print("bad frame:", err)
        finally:
            with self.lock:
                if client in self.clients:
                    self.clients.remove(client)
            client.close()
            print("client disconnected")


def control_loop(radio: FakeRadio, host: str, port: int) -> None:
    """Inject text messages for automation tests.

    Each UDP datagram is "<from hex>|<channel index or dm>|<text>", e.g.
    "10000000|1|otworz" (channel 1) or "10000000|dm|otworz" (PKI direct message).
    """
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((host, port))
    print(f"Control port (UDP) on {host}:{port}")
    while True:
        data, _ = sock.recvfrom(1024)
        try:
            sender_hex, channel, text = data.decode().split("|", 2)
            sender = int(sender_hex, 16)
            direct = channel == "dm"
            fr = radio.packet(
                sender,
                MY_NUM if direct else BROADCAST,
                portnums_pb2.PortNum.TEXT_MESSAGE_APP,
                text.encode(),
                channel=0 if direct else int(channel),
            )
            if direct:
                fr.packet.pki_encrypted = True
            radio.send(fr)
            print(f"INJECT from {sender:08x} {'DM' if direct else 'ch' + channel}: {text}")
        except Exception as err:  # noqa: BLE001
            print("bad control message:", err)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="0.0.0.0")
    parser.add_argument("--port", type=int, default=4403)
    parser.add_argument("--control-port", type=int, default=4404)
    parser.add_argument("--lat", type=float, default=52.2297)
    parser.add_argument("--lon", type=float, default=21.0122)
    parser.add_argument("--quiet", action="store_true", help="no random chatter")
    args = parser.parse_args()
    radio = FakeRadio(args.lat, args.lon)
    if not args.quiet:
        threading.Thread(target=radio.chatter_loop, daemon=True).start()
    threading.Thread(
        target=control_loop, args=(radio, args.host, args.control_port), daemon=True
    ).start()
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind((args.host, args.port))
    server.listen()
    print(f"Fake Meshtastic radio listening on {args.host}:{args.port}")
    while True:
        client, addr = server.accept()
        print("client connected", addr)
        threading.Thread(target=radio.client_loop, args=(client,), daemon=True).start()


if __name__ == "__main__":
    main()
