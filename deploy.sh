docker build -t daongocthanh/demo-web:latest -t daongocthanh/demo-web:$SHA -f ./client/Dockerfile ./web
docker build -t daongocthanh/demo-server:latest -t daongocthanh/demo-server:$SHA -f ./server/Dockerfile ./server
docker build -t daongocthanh/demo_worker:latest -t daongocthanh/demo_worker:$SHA -f ./worker/Dockerfile ./worker

docker push daongocthanh/demo-web:latest
docker push daongocthanh/demo-server:latest
docker push daongocthanh/demo_worker:latest

docker push daongocthanh/demo-web:$SHA
docker push daongocthanh/demo-server:$SHA
docker push daongocthanh/demo_worker:$SHA