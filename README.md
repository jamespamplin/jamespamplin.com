# [JamesPamplin.com](http://www.jamespamplin.com)
My personal website with stuff about me.

For more info see: http://www.jamespamplin.com/post/my-own-blog-finally

## Deployment
Use `cloud-config.yml` for startup User Data in a CoreOS node.

## Builds
TODO: CI

    docker build -t jamespamplin/jamespamplin.com .
    docker push jamespamplin/jamespamplin.com

    docker build -t jamespamplin/jamespamplin.com-nginx ./nginx/
    docker push jamespamplin/jamespamplin.com-nginx

## Local environment
Spin up local environment with [Docker-Compose](https://docs.docker.com/compose/).
Builds containers and runs with necessary links and environment for local development mode.

    docker-compose up

## Manual Setup

Local setup:

    npm install

Start manually:

    npm start

Build containers:

    docker build -t jp-www .
    docker build -t jp-nginx ./nginx/nginx.conf

Run containers manually:

    docker run --name jp-www jp-www
    docker run --name jp-nginx --link jp-www:www -p 80:80 jp-nginx


### Systemd

Enable services:

    sudo systemctl enable `pwd`/jamespamplin-www.service
    sudo systemctl enable `pwd`/jamespamplin-nginx.service

Start services:

    sudo systemctl start jamespamplin-www.service
    sudo systemctl start jamespamplin-nginx.service

View service logs/stdout:

    journalctl -f -u jamespamplin-www.service
    journalctl -f -u jamespamplin-nginx.service
