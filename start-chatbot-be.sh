#!/bin/bash

#pem_key_path="/c/Users/SSAFY/Desktop/I9B204T.pem"
#
## 접속할 EC2 인스턴스의 주소
#ec2_instance_address="i9b204.p.ssafy.io"

sed -i 's/localhost:3306/mysql:3306/g' ./BE/mesc/src/main/resources/application.yml
sed -i 's/host: localhost/host: local-redis/g' ./BE/mesc/src/main/resources/application.yml
sed -i 's/http:\/\/localhost:8081\/mes/https:\/\/www.mescadmin.kr\/api\/mes/g' ./BE/mesc/src/main/java/com/ksol/mesc/
rm -rf ./BE/mesc/src/main/generated
global/config/WebClientConfig.java

docker-compose -f docker-compose-chatbot-be.yml pull //현재 프로젝트에있는 docker-compose

COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose-chatbot-be.yml up --build -d

docker rmi -f $(docker images -f "dangling=true" -q) || true
