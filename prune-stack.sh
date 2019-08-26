#!/usr/bin/env bash

docker service rm demo_traefik
docker service rm demo_viz
docker service rm demo_mongodb
docker service rm demo_rabbit
docker service rm demo_web
docker service rm demo_server
docker service rm demo_worker
docker network rm demo_verse