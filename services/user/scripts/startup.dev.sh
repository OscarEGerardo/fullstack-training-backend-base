#!/bin/bash

set -u

# shellcheck disable=SC1091
source /var/lib/core/database/postgres-create.sh

yarn install

# shellcheck disable=SC1091
source /var/lib/core/database/sequelize-migrations.sh

#nodemon app.js

# Uncomment this to run dev container without nodemon
tail -f /dev/null
