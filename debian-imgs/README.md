Debian based docker images
===========================

What will I find here ?
-----------------------

You'll find here some debian based docker images.
We use debian jessie as base from now.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run. You shall build the debian-base base before all others:

```
cd <repo>/debian-imgs
docker build -t debian-base:latest debian-base
docker build -t <NAME OF IMAGE> <image folder name>
docker run <OPTS> <NAME OF IMAGE>
```


Detailled images list and their own documentation
-------------------------------------------------

Given each image has its own behaviours, just grab their specifi documentation :
* [debian-base](debian-base/)
