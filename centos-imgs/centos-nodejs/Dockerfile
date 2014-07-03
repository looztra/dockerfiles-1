FROM centos-base:latest

RUN yum install -y npm nodejs
RUN npm config set strict-ssl false

ADD docs /app/docs
WORKDIR /app/docs
RUN if [ -f package.json ]; then npm install; else echo "No package.json found : no npm install to run"; fi

EXPOSE  8080
CMD ["/usr/bin/node", "/app/docs/index.js"]
