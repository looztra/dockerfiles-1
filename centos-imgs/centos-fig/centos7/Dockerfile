FROM centos:centos7
MAINTAINER damien.duportal@gmail.com

ENV FIG_VERSION 1.0.1

RUN curl --insecure -L https://github.com/docker/fig/releases/download/${FIG_VERSION}/fig-`uname -s`-`uname -m` > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

VOLUME ["/app"]
WORKDIR /app

ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
