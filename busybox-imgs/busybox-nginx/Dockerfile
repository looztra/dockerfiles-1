FROM busybox-base:latest
MAINTAINER damien.duportal@gmail.com

RUN opkg-install nginx

# Clean existing configuration to ensure our is used
RUN rm -f /etc/nginx/nginx.conf

# Prepare our data struct
ADD conf /app/conf
ADD docs /app/docs
RUN mkdir -p /DATA/logs /var/log/nginx /var/lib/nginx

EXPOSE 80
CMD nginx -c /app/conf/nginx.conf