#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

if command -v nvm >/dev/null 2>&1 && [ -f "${APP_DIR}/../.nvmrc" ]; then
  nvm use >/dev/null
fi

if command -v brew >/dev/null 2>&1 && [ -d "/usr/local/opt/node@20/bin" ]; then
  export PATH="/usr/local/opt/node@20/bin:$PATH"
fi

export NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED:-1}
export NODE_OPTIONS=${NODE_OPTIONS:---max_old_space_size=4096}

pushd "${APP_DIR}" >/dev/null

if [ -f package-lock.json ]; then
  npm ci --prefer-offline --include=prod
else
  npm install --prefer-offline
fi

npx next build

popd >/dev/null
