FROM centos:centos7
MAINTAINER damien.duportal@gmail.com

ENV FIG_VERSION 0.5.2

# Install FIG and docker, using compressed cmd (AUFS / 42 layers...)
RUN curl --insecure -L https://github.com/orchardup/fig/releases/download/${FIG_VERSION}/linux > /usr/local/bin/fig \
	&& chmod +x /usr/local/bin/fig

# Configure the env var DOCKER_HOST to point to the unix/TCP socket you want fig to use to communicate with Docker's daemon
#ENV DOCKER_HOST tcp://10.0.2.15:2375

# Mount the directory containing your fig.yml file into /app
VOLUME ["/app"]
WORKDIR /app

# This container is a chrooted fig
ENTRYPOINT ["/usr/local/bin/fig"]
CMD ["--version"]
