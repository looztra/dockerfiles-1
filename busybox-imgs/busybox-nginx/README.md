Busybox-nginx
============

What will I find here ?
-----------------------

This the busybox-nginx img.
From [busybox-base](../busybox-base) :
* We'll install some nginx
* We'll copy nginx's conf and content into /app

It can be used as a quick image to launch a lightweight webserver with some static content or lightweight http reverse proxy.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run, beggining with [busybox-base](../busybox-base) :

```
cd <repo>/busybox-imgs
docker build -t busybox-base:latest busybox-base/
docker build -t busybox-nginx:latest busybox-nginx/
CID=$(docker run -d busybox-nginx)
curl "http://$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' ${CID})"
...
<h1>Hello World</h1>
...
```
