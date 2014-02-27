FROM centos

RUN yum install -y http://yum.postgresql.org/9.3/redhat/rhel-6-x86_64/pgdg-redhat93-9.3-1.noarch.rpm
RUN yum install -y postgresql93-server postgresql93-contrib

USER postgres
RUN /usr/pgsql-9.3/bin/initdb -D /var/lib/pgsql/data

ADD pg_hba.conf /var/lib/pgsql/data/
ADD postgresql.conf /var/lib/pgsql/data/


EXPOSE 5432

CMD /usr/pgsql-9.3/bin/postgres -D /var/lib/pgsql/data