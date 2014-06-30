FROM centos:6.4
MAINTAINER damien.duportal@gmail.com

RUN yum install -y nano wget dialog net-tools procps inetutils-telnet vim curl git

# DATA will be used for logging or data
# app will be used to store our applications and configs
RUN mkdir -p /DATA /app
VOLUME "/DATA"

COPY bash-profile /.bashrc

CMD ["/bin/bash"]

