# [JamesPamplin.com](http://www.jamespamplin.com)
My personal website with stuff about me.

For more info see: http://www.jamespamplin.com/post/my-own-blog-finally

## Local environment
Spin up local environment with [Fig](http://www.fig.sh/). Builds containers
and runs with necessary links and environment for local development mode.

    fig up

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
