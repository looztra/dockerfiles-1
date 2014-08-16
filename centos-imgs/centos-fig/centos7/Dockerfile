FROM centos:centos7
MAINTAINER damien.duportal@gmail.com

ENV FIG_VERSION 0.5.2
RUN curl --insecure -L https://github.com/orchardup/fig/releases/download/${FIG_VERSION}/linux > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

VOLUME ["/app"]
WORKDIR /app

ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
