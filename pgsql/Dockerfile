FROM centos

RUN yum install -y http://yum.postgresql.org/9.3/redhat/rhel-6-x86_64/pgdg-redhat93-9.3-1.noarch.rpm
RUN yum install -y postgresql93-server postgresql93-contrib

USER postgres
RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" &&\
    createdb -O docker docker

#ADD ph_hba.conf 

#EXPOSE 5432
#RUN service postgresql-9.3 initdb
