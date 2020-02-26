#!/bin/bash

docker run -itd -p 3333:3000 --name cert-api-service \
--env PORT=3000 \
-v $(pwd)/configs:/home/app/configs \
-v $(pwd)/certs/cert.pem:/home/certs/cert.pem \
hlf-tools/cert-api-service:latest
