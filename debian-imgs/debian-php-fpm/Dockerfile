FROM debian:7.6
MAINTAINER damien.duportal@gmail.com

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y -q --no-install-recommends php5-fpm

COPY php-fpm.conf /etc/php5/fpm/
COPY www.conf /etc/php5/fpm/pool.d/www.conf

EXPOSE 9000

CMD ["php5-fpm","-R"]
