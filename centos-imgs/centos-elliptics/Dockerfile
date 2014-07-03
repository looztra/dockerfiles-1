FROM centos-base:latest
MAINTAINER damien.duportal@gmail.com

# Installation instructions from http://doc.reverbrain.com/elliptics:server-tutorial
COPY reverbrain.repo /etc/yum.repos.d/
# libev come from EPEL repository
RUN yum install -y libev elliptics

# Configure node
RUN mkdir -p /app/conf /app/content
RUN mkdir -p /DATA/logs /DATA/history
COPY ioserv.json /app/conf/

CMD ["/usr/bin/dnet_ioserv","-c","/app/conf/ioserv.json"]