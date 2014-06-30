Centos-base
============

What will I find here ?
-----------------------

This the centos-base img. 
From centos:6.4
* We'll install some packages
* Pre-creates some folder layout

It can be used as a quick image to launch interactive bash into.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run :

```
cd <repo>/centos-imgs
docker build -t centos-base:latest centos-base
docker run -ti centos-base
bash $ # You're done !
```
