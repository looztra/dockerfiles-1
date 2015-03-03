FROM debian:wheezy
MAINTAINER damien.duportal@gmail.com

ADD https://github.com/docker/compose/releases/download/1.1.0/docker-compose-Linux-x86_64 \
	/usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

# This container is a chrooted docker-compose
WORKDIR /app
ENTRYPOINT ["/usr/local/bin/docker-compose"]
CMD ["--version"]
