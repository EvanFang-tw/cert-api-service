#!/bin/bash

docker-compose -f docker-compose.dev.yml up -d

# Enter container
docker exec -it cert-api-service sh
