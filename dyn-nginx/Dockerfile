FROM nginx:1.7.7
MAINTAINER damien.duportal@gmail.com

ENV DOCKER_GEN_VERSION 0.3.5
ENV DOCKER_HOST tcp://10.0.2.15:2375

ENV http_proxy http://10.0.4.2:3128
ENV https_proxy http://10.0.4.2:3128

ADD https://github.com/jwilder/docker-gen/releases/download/${DOCKER_GEN_VERSION}/docker-gen-linux-amd64-${DOCKER_GEN_VERSION}.tar.gz /usr/local/bin/

RUN tar xzf /usr/local/bin/docker-gen-linux-amd64-${DOCKER_GEN_VERSION}.tar.gz -C /usr/local/bin/ \
	&& rm -f /usr/local/bin/docker-gen-linux-amd64-${DOCKER_GEN_VERSION}.tar.gz \
	&& chmod a+x /usr/local/bin/docker-gen

RUN sed -i "/error_log/d" /etc/nginx/nginx.conf \
	&& sed -i "/daemon/d" /etc/nginx/nginx.conf \

RUN echo "daemon off;" >> /etc/nginx/nginx.conf \
	&& echo "error_log  /dev/stdout warn;" >> /etc/nginx/nginx.conf

COPY entrypoint.sh /usr/local/bin/
COPY nginx.tmpl /etc/nginx/

RUN

CMD ["/bin/bash","/usr/local/bin/entrypoint.sh"]
