"""Actions (services) usable from automations and scripts."""

from __future__ import annotations

import base64
from collections.abc import Callable
import secrets
from typing import TYPE_CHECKING, Any

import voluptuous as vol

from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.service import async_register_admin_service

from .const import BROADCAST_NUM, DOMAIN, MAX_TEXT_BYTES

if TYPE_CHECKING:
    from .client import MeshtasticClient

SERVICE_SEND_TEXT = "send_text"
SERVICE_ADD_CHANNEL = "add_channel"
SERVICE_DELETE_CHANNEL = "delete_channel"
SERVICE_JOIN_CHANNEL = "join_channel"

KEY_RANDOM = "random"
KEY_DEFAULT = "default"
KEY_NONE = "none"
KEY_CUSTOM = "custom"

SEND_TEXT_SCHEMA = vol.Schema(
    {
        vol.Optional("config_entry_id"): cv.string,
        vol.Required("text"): cv.string,
        vol.Optional("to"): cv.string,
        vol.Optional("channel"): vol.All(vol.Coerce(int), vol.Range(min=0, max=7)),
        vol.Optional("channel_name"): cv.string,
    }
)

ADD_CHANNEL_SCHEMA = vol.Schema(
    {
        vol.Optional("config_entry_id"): cv.string,
        vol.Required("name"): cv.string,
        vol.Optional("key", default=KEY_RANDOM): vol.In(
            [KEY_RANDOM, KEY_DEFAULT, KEY_NONE, KEY_CUSTOM]
        ),
        vol.Optional("psk"): cv.string,
        vol.Optional("position_precision", default=13): vol.All(
            vol.Coerce(int), vol.Range(min=0, max=32)
        ),
        vol.Optional("uplink", default=False): cv.boolean,
        vol.Optional("downlink", default=False): cv.boolean,
        vol.Optional("muted", default=False): cv.boolean,
    }
)

DELETE_CHANNEL_SCHEMA = vol.All(
    vol.Schema(
        {
            vol.Optional("config_entry_id"): cv.string,
            vol.Optional("name"): cv.string,
            vol.Optional("index"): vol.All(vol.Coerce(int), vol.Range(min=1, max=7)),
        }
    ),
    cv.has_at_least_one_key("name", "index"),
)

JOIN_CHANNEL_SCHEMA = vol.Schema(
    {
        vol.Optional("config_entry_id"): cv.string,
        vol.Required("url"): cv.string,
        vol.Optional("replace", default=False): cv.boolean,
    }
)


def parse_node(value: str | int | None) -> int:
    """Parse '!a1b2c3d4', 'a1b2c3d4', a decimal string or int into a node number."""
    if value is None or value in ("", "broadcast", "^all"):
        return BROADCAST_NUM
    if isinstance(value, int):
        return value
    text = value.strip()
    if text.startswith("!"):
        return int(text[1:], 16)
    if text.isdigit():
        return int(text)
    return int(text, 16)


def _client_for_call(hass: HomeAssistant, entry_id: str | None) -> MeshtasticClient:
    entries = [
        e
        for e in hass.config_entries.async_loaded_entries(DOMAIN)
        if entry_id is None or e.entry_id == entry_id
    ]
    if not entries:
        raise ServiceValidationError(translation_domain=DOMAIN, translation_key="no_entry")
    if entry_id is None and len(entries) > 1:
        raise ServiceValidationError(
            translation_domain=DOMAIN, translation_key="entry_required"
        )
    return entries[0].runtime_data


def _iface(client: MeshtasticClient) -> Any:
    try:
        return client._require_iface()  # noqa: SLF001
    except ConnectionError as err:
        raise HomeAssistantError(
            translation_domain=DOMAIN, translation_key="not_connected"
        ) from err


def _invalid_channel(err: Exception) -> ServiceValidationError:
    return ServiceValidationError(
        translation_domain=DOMAIN,
        translation_key="invalid_channel",
        translation_placeholders={"error": str(err)},
    )


def find_channel_index(client: MeshtasticClient, name: str) -> int:
    """Index of the active channel with this display name (exact, then case-insensitive)."""
    iface = _iface(client)
    active = [
        c.index for c in (iface.localNode.channels or []) if c.role != 0  # 0 = DISABLED
    ]
    names = {index: client.channel_name(index) for index in active}
    for index, display in names.items():
        if display == name:
            return index
    for index, display in names.items():
        if display.casefold() == name.casefold():
            return index
    raise ServiceValidationError(
        translation_domain=DOMAIN,
        translation_key="channel_not_found",
        translation_placeholders={"name": name},
    )


def _register_admin(
    hass: HomeAssistant,
    service: str,
    func: Callable[[ServiceCall], Any],
    schema: vol.Schema,
    response: SupportsResponse,
) -> None:
    try:
        async_register_admin_service(
            hass, DOMAIN, service, func, schema, supports_response=response
        )
    except TypeError:  # Home Assistant < 2025.x without supports_response
        async_register_admin_service(hass, DOMAIN, service, func, schema)


def async_setup_services(hass: HomeAssistant) -> None:
    """Register all actions."""

    async def send_text(call: ServiceCall) -> dict[str, Any]:
        client = _client_for_call(hass, call.data.get("config_entry_id"))
        text: str = call.data["text"]
        if len(text.encode()) > MAX_TEXT_BYTES:
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key="text_too_long")
        try:
            to = parse_node(call.data.get("to"))
        except ValueError as err:
            raise ServiceValidationError(
                translation_domain=DOMAIN, translation_key="invalid_node"
            ) from err
        if "channel" in call.data:
            channel = call.data["channel"]
        elif call.data.get("channel_name"):
            channel = find_channel_index(client, call.data["channel_name"])
        else:
            channel = 0
        try:
            message = await client.async_send_text(text, to, channel)
        except ConnectionError as err:
            raise HomeAssistantError(
                translation_domain=DOMAIN, translation_key="not_connected"
            ) from err
        return {"id": message["id"], "channel": channel}

    async def add_channel(call: ServiceCall) -> dict[str, Any]:
        from . import protoutil  # noqa: PLC0415

        client = _client_for_call(hass, call.data.get("config_entry_id"))
        iface = _iface(client)
        key = call.data["key"]
        if key == KEY_RANDOM:
            psk = base64.b64encode(secrets.token_bytes(32)).decode()
        elif key == KEY_DEFAULT:
            psk = "AQ=="
        elif key == KEY_NONE:
            psk = ""
        else:
            psk = call.data.get("psk", "")
        try:
            settings = protoutil.channel_settings_from_dict(
                {
                    "name": call.data["name"].strip(),
                    "psk": psk,
                    "uplink_enabled": call.data["uplink"],
                    "downlink_enabled": call.data["downlink"],
                    "module_settings": {
                        "position_precision": call.data["position_precision"],
                        "is_muted": call.data["muted"],
                    },
                },
                require_name=True,
            )
            new = protoutil.plan_add(list(iface.localNode.channels or []), settings)
        except ValueError as err:
            raise _invalid_channel(err) from err
        await client.async_run(protoutil.write_channels, iface, [new])
        client.async_channels_changed()
        # The key is deliberately not returned: action responses end up in
        # automation traces. Share the channel from the panel (QR code).
        return {"index": new.index, "name": new.settings.name}

    async def delete_channel(call: ServiceCall) -> dict[str, Any]:
        from . import protoutil  # noqa: PLC0415

        client = _client_for_call(hass, call.data.get("config_entry_id"))
        iface = _iface(client)
        index = call.data.get("index")
        if index is None:
            index = find_channel_index(client, call.data["name"])
        try:
            writes = protoutil.plan_delete(list(iface.localNode.channels or []), index)
        except ValueError as err:
            raise _invalid_channel(err) from err
        await client.async_run(protoutil.write_channels, iface, writes)
        client.async_channels_changed()
        return {"deleted_index": index}

    async def join_channel(call: ServiceCall) -> dict[str, Any]:
        from . import protoutil  # noqa: PLC0415

        client = _client_for_call(hass, call.data.get("config_entry_id"))
        iface = _iface(client)
        try:
            protoutil.parse_channel_url(call.data["url"])
        except ValueError as err:
            raise _invalid_channel(err) from err
        try:
            result = await client.async_run(
                protoutil.import_channels, iface, call.data["url"], call.data["replace"]
            )
        except ValueError as err:
            raise _invalid_channel(err) from err
        client.async_channels_changed()
        return result

    hass.services.async_register(
        DOMAIN,
        SERVICE_SEND_TEXT,
        send_text,
        schema=SEND_TEXT_SCHEMA,
        supports_response=SupportsResponse.OPTIONAL,
    )
    _register_admin(hass, SERVICE_ADD_CHANNEL, add_channel, ADD_CHANNEL_SCHEMA, SupportsResponse.OPTIONAL)
    _register_admin(
        hass, SERVICE_DELETE_CHANNEL, delete_channel, DELETE_CHANNEL_SCHEMA, SupportsResponse.OPTIONAL
    )
    _register_admin(hass, SERVICE_JOIN_CHANNEL, join_channel, JOIN_CHANNEL_SCHEMA, SupportsResponse.OPTIONAL)
