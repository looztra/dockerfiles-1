Busybox based docker images
===========================

What will I find here ?
-----------------------

You'll find here some busybox based docker images.
Thanks to [Progrium's works on its packaging root image](https://github.com/progrium/busybox), you'll find here some lightweight images to start quickly with.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run. You shall build the busybox-base base before all :

```
cd <repo>/busybox-imgs
docker build -t busybox-base:latest busybox-base
docker build -t <NAME OF IMAGE> <image folder name>
docker run <OPTS> <NAME OF IMAGE>
```


Detailled images list and their own documentation
-------------------------------------------------

Given each image has its own behaviours, just grab their specific documentations :
* [busybox-base](busybox-base/)
* [busybox-nginx](busybox-nginx/) 
