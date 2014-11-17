FROM debian:wheezy
MAINTAINER damien.duportal@gmail.com

ENV GEOSERVER_VERSION 2.6.1
ENV JAVA_HOME /usr/lib/jvm/java-7-openjdk-amd64/jre
ENV GEOSERVER_HOME /app/geoserver-2.6.1
ENV GEOSERVER_DATA_DIR /app/geoserver-2.6.1/data_dir

RUN apt-get update && apt-get install --no-install-recommends -y \
	curl \
	openjdk-7-jre-headless \
  	unzip

WORKDIR /app

RUN curl -L -o /app/geoserver-${GEOSERVER_VERSION}.zip "http://downloads.sourceforge.net/project/geoserver/GeoServer/${GEOSERVER_VERSION}/geoserver-${GEOSERVER_VERSION}-bin.zip?r=http%3A%2F%2Fgeoserver.org%2Frelease%2Fstable%2F&ts=1416258685&use_mirror=garr" \
	&& unzip /app/geoserver-${GEOSERVER_VERSION}.zip \
	&& rm -f geoserver-${GEOSERVER_VERSION}.zip

EXPOSE 8080

CMD ["/app/geoserver-2.6.1/bin/startup.sh"]