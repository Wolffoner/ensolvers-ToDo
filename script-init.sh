#!/bin/sh
user="root"
pass="Admin123."
DB="generateDB.sql"

#Run sql needs config user and pass remember everything you run this command taskToDoDB is DROPED
mysql -u "$user" -p"$pass" < "$DB"

chmod +x run-back.sh
chmod +x run-front.sh

x-terminal-emulator -e ./run-back.sh&
x-terminal-emulator -e ./run-front.sh

