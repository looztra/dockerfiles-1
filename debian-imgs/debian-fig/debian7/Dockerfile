FROM debian:7.6
MAINTAINER damien.duportal@gmail.com

ADD https://github.com/docker/fig/releases/download/1.0.0/fig-Linux-x86_64 /usr/local/bin/fig
RUN chmod +x /usr/local/bin/fig

VOLUME ["/app"]
WORKDIR /app

# This container is a chrooted fig
ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
