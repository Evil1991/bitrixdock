#!/bin/sh
set -e

# This script is meant for quick & easy install via:
#   $ curl -fsSL https://raw.githubusercontent.com/bitrixdock/bitrixdock/master/install.sh -o install.sh | sh install.sh

echo "Create folder struct"
mkdir -p /Users/(whoami)/web/ && \
cd /Users/(whoami)/web/bitrix && \
wget http://www.1c-bitrix.ru/download/scripts/bitrixsetup.php && \
cd /Users/(whoami)/web/ && \
git clone https://github.com/bitrixdock/bitrixdock.git && \
cd /Users/(whoami)/web/bitrixdock

echo "Config"
cp -f .env_template .env

echo "Run"
docker-compose up -d
