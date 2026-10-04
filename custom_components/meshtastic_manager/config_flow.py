"""Config flow for Meshtastic Manager."""

from __future__ import annotations

import asyncio
import logging
import time
from typing import Any

import voluptuous as vol

from homeassistant.components import usb
from homeassistant.config_entries import ConfigFlow, ConfigFlowResult
from homeassistant.helpers.selector import (
    SelectOptionDict,
    SelectSelector,
    SelectSelectorConfig,
    SelectSelectorMode,
)

from .const import (
    CONF_CONNECTION_TYPE,
    CONF_DEVICE,
    CONF_HOST,
    CONF_PORT,
    CONNECT_TIMEOUT,
    CONNECTION_SERIAL,
    CONNECTION_TCP,
    DEFAULT_TCP_PORT,
    DOMAIN,
)

_LOGGER = logging.getLogger(__name__)

MANUAL_PATH = "manual"


def _list_ports_pyserial() -> list[Any]:
    """Fallback port scan for Home Assistant versions before 2026.5."""
    from serial.tools import list_ports  # noqa: PLC0415

    return list(list_ports.comports())


def _probe(data: dict[str, Any]) -> dict[str, Any]:
    """Connect once, read node identity, disconnect. Runs in the executor."""
    from .client import _close_iface, _connect_iface, _create_iface  # noqa: PLC0415

    iface = _create_iface(data)
    try:
        _connect_iface(iface)
        num = iface.myInfo.my_node_num
        user = (iface.nodesByNum or {}).get(num, {}).get("user", {})
        # Let the library send its first heartbeat before the port is closed.
        time.sleep(0.5)
        return {"num": num, "long_name": user.get("longName"), "short_name": user.get("shortName")}
    finally:
        _close_iface(iface)


class MeshtasticManagerConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow."""

    VERSION = 1

    def __init__(self) -> None:
        """Initialise."""
        self._ports: dict[str, str] = {}

    async def async_step_user(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        """Choose the connection type."""
        return self.async_show_menu(step_id="user", menu_options=["serial", "tcp"])

    async def _async_validate(self, data: dict[str, Any]) -> tuple[dict[str, Any] | None, str | None]:
        try:
            info = await asyncio.wait_for(
                self.hass.async_add_executor_job(_probe, data), timeout=CONNECT_TIMEOUT
            )
        except TimeoutError:
            return None, "timeout"
        except BaseException as err:  # noqa: BLE001 - library may raise SystemExit
            if isinstance(err, asyncio.CancelledError):
                raise
            target = data.get(CONF_DEVICE) or f"{data.get(CONF_HOST)}:{data.get(CONF_PORT)}"
            _LOGGER.warning("Cannot connect to Meshtastic radio at %s: %s", target, err)
            # The port opened but nothing answered the Meshtastic handshake:
            # most likely not a Meshtastic radio (e.g. the board's own UART).
            if "Timed out" in str(err) or isinstance(err, TimeoutError):
                return None, "no_response"
            return None, "cannot_connect"
        return info, None

    async def _stable_path(self, device: str) -> str:
        """Prefer /dev/serial/by-id/... so a reboot or replug cannot renumber the port."""
        return await self.hass.async_add_executor_job(usb.get_serial_by_id, device)

    async def _async_finish(self, data: dict[str, Any], info: dict[str, Any]) -> ConfigFlowResult:
        await self.async_set_unique_id(f"{info['num']:08x}")
        self._abort_if_unique_id_configured(updates=data)
        title = info.get("long_name") or f"Meshtastic {info['num']:08x}"
        return self.async_create_entry(title=title, data=data)

    async def async_step_serial(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        """Pick a serial port."""
        errors: dict[str, str] = {}
        if user_input is not None:
            device = user_input[CONF_DEVICE]
            if device == MANUAL_PATH:
                return await self.async_step_serial_manual()
            data = {CONF_CONNECTION_TYPE: CONNECTION_SERIAL, CONF_DEVICE: await self._stable_path(device)}
            info, error = await self._async_validate(data)
            if info is not None:
                return await self._async_finish(data, info)
            errors["base"] = error or "cannot_connect"

        if hasattr(usb, "async_scan_serial_ports"):
            ports = await usb.async_scan_serial_ports(self.hass)
        else:
            ports = await self.hass.async_add_executor_job(_list_ports_pyserial)
        options = [
            SelectOptionDict(
                value=port.device,
                label=usb.human_readable_device_name(
                    port.device,
                    port.serial_number,
                    port.manufacturer,
                    port.description,
                    getattr(port, "vid", None),
                    getattr(port, "pid", None),
                ),
            )
            for port in ports
        ]
        if not errors and not any(getattr(port, "vid", None) for port in ports):
            # Only built-in UARTs (e.g. /dev/ttyAMA10 on a Raspberry Pi 5) are present.
            errors["base"] = "no_usb_ports"
        options.append(SelectOptionDict(value=MANUAL_PATH, label="Enter path manually"))
        return self.async_show_form(
            step_id="serial",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_DEVICE): SelectSelector(
                        SelectSelectorConfig(
                            options=options,
                            mode=SelectSelectorMode.LIST,
                            translation_key="serial_port",
                        )
                    )
                }
            ),
            errors=errors,
        )

    async def async_step_serial_manual(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Enter a serial device path."""
        errors: dict[str, str] = {}
        if user_input is not None:
            data = {
                CONF_CONNECTION_TYPE: CONNECTION_SERIAL,
                CONF_DEVICE: await self._stable_path(user_input[CONF_DEVICE]),
            }
            info, error = await self._async_validate(data)
            if info is not None:
                return await self._async_finish(data, info)
            errors["base"] = error or "cannot_connect"
        return self.async_show_form(
            step_id="serial_manual",
            data_schema=vol.Schema({vol.Required(CONF_DEVICE): str}),
            errors=errors,
        )

    async def async_step_tcp(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        """Enter host and port of a network-connected radio."""
        errors: dict[str, str] = {}
        if user_input is not None:
            data = {
                CONF_CONNECTION_TYPE: CONNECTION_TCP,
                CONF_HOST: user_input[CONF_HOST],
                CONF_PORT: user_input[CONF_PORT],
            }
            info, error = await self._async_validate(data)
            if info is not None:
                return await self._async_finish(data, info)
            errors["base"] = error or "cannot_connect"
        return self.async_show_form(
            step_id="tcp",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_HOST): str,
                    vol.Required(CONF_PORT, default=DEFAULT_TCP_PORT): vol.All(
                        vol.Coerce(int), vol.Range(min=1, max=65535)
                    ),
                }
            ),
            errors=errors,
        )
