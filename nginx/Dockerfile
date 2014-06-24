FROM busybox-base
MAINTAINER damien.duportal@gmail.com

RUN opkg-install nginx

# Clean existing configuration to ensure our is used
RUN rm -v /etc/nginx/nginx.conf

# Prepare our data struct
COPY nginx.conf /app/conf/
COPY index.html /app/docs/
RUN mkdir -p /DATA/logs

EXPOSE 80
CMD nginx -c /etc/nginx/nginx.conf