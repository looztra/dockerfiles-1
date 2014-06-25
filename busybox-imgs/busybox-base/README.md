Busybox-base
============

What will I find here ?
+++++++++++++++++++++++

THis the busybox-base. From [Progrium's original image](https://github.com/progrium/busybox), we'll install some packages and pre-creates some folder layout.

It can be used as a quick image to launch interactive bash into.

Quickstart
++++++++++

Fetch the repository where you got a Docker running and just build & run :

```
cd <repo>/busybox
docker build -t busybox-base:latest busybox-base
docker run -ti busybox-base
bash $ # You're done !
```
