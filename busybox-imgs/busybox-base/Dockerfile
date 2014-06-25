FROM progrium/busybox
# Using this base image and some basic commands from https://registry.hub.docker.com/u/progrium/busybox/

MAINTAINER damien.duportal@gmail.com

# Common packages
RUN opkg-install curl bash git vim nano tcpdump bind-dig

# DATA will be used for logging or data
# app will be used to store our applications and configs
RUN mkdir -p /DATA /app
VOLUME "/DATA"

COPY bash-profile /.bashrc

CMD ["/bin/bash"]
