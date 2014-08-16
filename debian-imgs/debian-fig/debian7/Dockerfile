FROM debian:7.6
MAINTAINER damien.duportal@gmail.com


RUN apt-get update && apt-get install -y -q curl
# This is a tmp build from https://github.com/docker/fig/pull/405
RUN curl --insecure -L https://dl.dropboxusercontent.com/u/2524496/fig-bin-0.5.2-dev > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

# TO use for the next fig version
#ENV FIG_VERSION XXX
#RUN curl --insecure -L https://github.com/orchardup/fig/releases/download/${FIG_VERSION}/linux > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

VOLUME ["/app"]
WORKDIR /app

# This container is a chrooted fig
ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
