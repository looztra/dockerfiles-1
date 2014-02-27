# Dockerfile from tutorial http://docs.docker.io/en/latest/examples/nodejs_web_app/
FROM    centos

RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN     yum install -y npm curl

ADD . /src
RUN cd /src; npm install

EXPOSE  8080
CMD ["node", "/src/index.js"]
