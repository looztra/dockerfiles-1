Centos-chefdev
=============

What will I find here ?
-----------------------

This container will run all the chefdk tools stack.
It's aimed to power integration test with test-kitchen thru docker driver. So you should mount your docker bin and unix socket or run as dind. 
Given this container is not well portable, i assume that you'll also share the folder containing all your chef recipes.


Quickstart
----------

Fetch the repository where you got a Docker running and just build & run. Requires centos-base to be built :

```
cd <repo>/centos-imgs
docker build -t centos-base:latest centos-base/
docker build -t centos-chefdev:latest centos-chefdev/
docker run -ti -v $(which docker):$(which docker) -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/DATA centos-chefdev:latest
$ docker --version
Docker version ...
```
