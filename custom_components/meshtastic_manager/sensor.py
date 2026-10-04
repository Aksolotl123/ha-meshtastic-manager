"""Sensors of the local Meshtastic radio."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from datetime import timedelta
import time
from typing import Any

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.const import (
    PERCENTAGE,
    EntityCategory,
    UnitOfElectricPotential,
    UnitOfTime,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback
from homeassistant.util import dt as dt_util

from . import MeshtasticConfigEntry
from .client import MeshtasticClient
from .const import ONLINE_WINDOW
from .entity import MeshtasticEntity

SCAN_INTERVAL = timedelta(seconds=60)


def _metric(key: str) -> Callable[[MeshtasticClient, dict[str, Any]], Any]:
    return lambda client, local: (local.get("deviceMetrics") or {}).get(key)


def _battery(client: MeshtasticClient, local: dict[str, Any]) -> Any:
    level = (local.get("deviceMetrics") or {}).get("batteryLevel")
    # 101 means "powered, no battery"
    return min(level, 100) if level is not None else None


def _nodes_online(client: MeshtasticClient, local: dict[str, Any]) -> int | None:
    if not client.connected:
        return None
    cutoff = time.time() - ONLINE_WINDOW
    return sum(
        1
        for n in client.nodes()
        if n.get("num") != client.my_num and (n.get("lastHeard") or 0) >= cutoff
    )


def _nodes_total(client: MeshtasticClient, local: dict[str, Any]) -> int | None:
    return len(client.nodes()) if client.connected else None


def _messages_today(client: MeshtasticClient, local: dict[str, Any]) -> int:
    midnight = dt_util.start_of_local_day().timestamp()
    return client.store.messages_since(midnight)


def _local_stat(key: str) -> Callable[[MeshtasticClient, dict[str, Any]], Any]:
    return lambda client, local: client.local_stats.get(key)


@dataclass(frozen=True, kw_only=True)
class MeshtasticSensorDescription(SensorEntityDescription):
    """Sensor description with a value function."""

    value_fn: Callable[[MeshtasticClient, dict[str, Any]], Any]
    needs_connection: bool = True


SENSORS: tuple[MeshtasticSensorDescription, ...] = (
    MeshtasticSensorDescription(
        key="battery",
        device_class=SensorDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=_battery,
    ),
    MeshtasticSensorDescription(
        key="voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        state_class=SensorStateClass.MEASUREMENT,
        suggested_display_precision=2,
        value_fn=_metric("voltage"),
    ),
    MeshtasticSensorDescription(
        key="channel_utilization",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        suggested_display_precision=1,
        value_fn=_metric("channelUtilization"),
    ),
    MeshtasticSensorDescription(
        key="air_util_tx",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        suggested_display_precision=2,
        value_fn=_metric("airUtilTx"),
    ),
    MeshtasticSensorDescription(
        key="uptime",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        suggested_unit_of_measurement=UnitOfTime.HOURS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_metric("uptimeSeconds"),
    ),
    MeshtasticSensorDescription(
        key="nodes_online",
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=_nodes_online,
    ),
    MeshtasticSensorDescription(
        key="nodes_total",
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=_nodes_total,
    ),
    MeshtasticSensorDescription(
        key="messages_today",
        state_class=SensorStateClass.TOTAL,
        value_fn=_messages_today,
        needs_connection=False,
    ),
    MeshtasticSensorDescription(
        key="packets_tx",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_local_stat("numPacketsTx"),
    ),
    MeshtasticSensorDescription(
        key="packets_rx",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_local_stat("numPacketsRx"),
    ),
    MeshtasticSensorDescription(
        key="packets_rx_bad",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_local_stat("numPacketsRxBad"),
    ),
    MeshtasticSensorDescription(
        key="packets_relayed",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_local_stat("numTxRelay"),
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: MeshtasticConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up sensors."""
    client = entry.runtime_data
    async_add_entities(MeshtasticSensor(client, d) for d in SENSORS)


class MeshtasticSensor(MeshtasticEntity, SensorEntity):
    """Sensor reading a value of the local node."""

    entity_description: MeshtasticSensorDescription
    # Online-node counts age without new packets, so refresh periodically.
    _attr_should_poll = True

    def __init__(self, client: MeshtasticClient, description: MeshtasticSensorDescription) -> None:
        """Initialise."""
        super().__init__(client, description.key)
        self.entity_description = description

    @property
    def available(self) -> bool:
        """Available while connected (unless the value is stored locally)."""
        return self.client.connected or not self.entity_description.needs_connection

    @property
    def native_value(self) -> Any:
        """Return the current value."""
        return self.entity_description.value_fn(self.client, self.local)

    async def async_update(self) -> None:
        """Values are computed on read; polling only refreshes the state."""
