FROM progrium/busybox
# Using this base image and some basic commands from https://registry.hub.docker.com/u/progrium/busybox/

MAINTAINER damien.duportal@gmail.com

RUN opkg-install curl bash git vim nano tcpdump bind-dig

RUN mkdir -p /DATA
VOLUME "/DATA"

COPY bash-profile /.bashrc

CMD ["/bin/bash"]
