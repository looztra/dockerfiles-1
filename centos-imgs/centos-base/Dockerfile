FROM centos:6.4
MAINTAINER damien.duportal@gmail.com

# Using EPEL repository
RUN rpm -ivh http://mirrors.ircam.fr/pub/fedora/epel/6/i386/epel-release-6-8.noarch.rpm

RUN yum install -y nano wget vim curl git telnet tree

# DATA will be used for logging or data
# app will be used to store our applications and configs
RUN mkdir -p /DATA /app
VOLUME "/DATA"

COPY bash-profile /.bashrc

CMD ["/bin/bash"]

