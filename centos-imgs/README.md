Centos based docker images
===========================

What will I find here ?
-----------------------

You'll find here some Centos based docker images.
We use Centos 6.4 as base from now.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run. You shall build the Centos-base base before all others:

```
cd <repo>/centos-imgs
docker build -t centos-base:latest Centos-base
docker build -t <NAME OF IMAGE> <image folder name>
docker run <OPTS> <NAME OF IMAGE>
```


Detailled images list and their own documentation
-------------------------------------------------

Given each image has its own behaviours, just grab their specific documentations :
* [centos-base](centos-base/)
* [centos-nodejs](centos-nodejs/)
