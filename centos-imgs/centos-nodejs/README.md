Centos-nodejs
=============

What will I find here ?
-----------------------

This a basic nodejs which is centos-base based. 

It is based on the fact that your nodejs is in the local docs folder.
If you have package.json file at the root of docs, nppm install will be run.

Then we launch a single node js process to an expected index.js file.

Quickstart
----------

Fetch the repository where you got a Docker running and just build & run. Requires centos-base to be built :

```
cd <repo>/centos-imgs
docker build -t centos-base:latest centos-base/
docker build -t centos-nodejs:latest centos-nodejs/
CID=$(docker run -d centos-nodejs)
curl "http://$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' ${CID}):8080"
Hello World from node js
```
