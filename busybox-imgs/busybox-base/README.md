Busybox-base
============

What will I find here ?
-----------------------

This the busybox-base. 
From [Progrium's original image](https://github.com/progrium/busybox) :
* We'll install some packages
* Pre-creates some folder layout
* And copying the bash-profile script to fine-tune our command line

It can be used as a quick image to launch interactive bash into.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run :

```
cd <repo>/busybox
docker build -t busybox-base:latest busybox-base
docker run -ti busybox-base
bash $ # You're done !
```
