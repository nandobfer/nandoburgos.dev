#!/bin/bash

yarn build
echo 'Uploading files to oracle'
scp -r build/* nandoburgos.dev:/var/www/nandoburgos.dev/
# ssh hostgator "chown -R bapkasorvetes:bapkasorvetes /home/bapkasorvetes/cupons_webserver/* && screen -XS bapka-api quit"
# ssh hostgator "cd /home/bapkasorvetes/cupons_webserver/bapka-api/ && git pull && sh /scripts/fernando/bapka-api.sh"