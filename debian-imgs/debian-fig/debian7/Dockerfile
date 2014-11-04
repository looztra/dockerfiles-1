FROM debian:7.6
MAINTAINER damien.duportal@gmail.com

ENV DEBIAN_FRONTEND noninteractive
ENV LC_ALL C.UTF-8
ENV FIG_VERSION 1.0.0


RUN echo 'LC_ALL=C.UTF-8' >> /etc/environment \
	&& echo 'DEBIAN_FRONTEND=noninteractive' >> /etc/environment \
	&& apt-get update && apt-get install -y -q --no-install-recommends curl \
	&& apt-get autoremove -y -q \
	&& apt-get clean -y -q \
	&& curl --insecure -L https://github.com/docker/fig/releases/download/${FIG_VERSION}/fig-`uname -s`-`uname -m` > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

VOLUME ["/app"]
WORKDIR /app

# This container is a chrooted fig
ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
