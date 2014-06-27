Debian-base
============

What will I find here ?
-----------------------

This the debian-base img. 
From debian:jessie
* We'll install some packages
* Pre-creates some folder layout

It can be used as a quick image to launch interactive bash into.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run :

```
cd <repo>/debian-imgs
docker build -t debian-base:latest debian-base
docker run -ti debian-base
bash $ # You're done !
```
