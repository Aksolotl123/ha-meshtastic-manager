#!/bin/sh
# Dev helper: build the panel and copy the integration to a Home Assistant host
# over SSH (Advanced SSH & Web Terminal add-on). Usage: scripts/deploy.sh [ssh-host]
set -e
HOST="${1:-ha}"
cd "$(dirname "$0")/.."
(cd frontend && npm run build --silent)
tar --exclude=__pycache__ -cf - -C custom_components meshtastic_manager |
  ssh -o BatchMode=yes "$HOST" 'sudo -n rm -rf /config/custom_components/meshtastic_manager &&
    sudo -n tar --no-same-owner -xf - -C /config/custom_components'
echo "Deployed to $HOST. Restart Home Assistant to load Python changes."
