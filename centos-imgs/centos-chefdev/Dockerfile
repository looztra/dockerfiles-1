FROM centos-base:latest
MAINTAINER damien.duportal@gmail.com

RUN rpm -ivh https://opscode-omnibus-packages.s3.amazonaws.com/el/6/x86_64/chefdk-0.1.0-1.el6.x86_64.rpm

ENV PATH /opt/chefdk/bin:/opt/chefdk/embedded/bin:/.chefdk/gem/ruby/2.1.0/bin:$PATH

RUN for GEMNAME in strainer kitchen-docker librarian-chef knife-spec; \
		do chef gem install ${GEMNAME} --no-ri --no-rdoc; \
	done

WORKDIR /DATA


CMD ["/bin/bash"]
