FROM debian:jessie
MAINTAINER damien.duportal@gmail.com

RUN apt-get update && apt-get install -y nano wget dialog net-tools procps inetutils-telnet vim curl git

# DATA will be used for logging or data
# app will be used to store our applications and configs
RUN mkdir -p /DATA /app
VOLUME "/DATA"

COPY bash-profile /.bashrc

CMD ["/bin/bash"]

