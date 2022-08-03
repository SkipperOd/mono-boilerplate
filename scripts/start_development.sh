echo "--- Starting vs code ---"

code .

echo "--- Starting containers ---"
docker-compose up -d

docker-compose exec  mono-boiler-api-app /bin/bash

