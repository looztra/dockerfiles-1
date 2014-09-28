FROM centos:centos7
MAINTAINER damien.duportal@gmail.com

RUN yum install -y http://mirror.ibcp.fr/pub/epel/7/x86_64/e/epel-release-7-2.noarch.rpm
RUN yum install -y tar curl git mercurial bzr make

ENV GO_VERSION 1.3.2
ENV GOPATH /go
ENV PATH $PATH:$GOPATH/bin:/usr/local/go/bin

RUN curl -L -o /tmp/go.tgz "https://storage.googleapis.com/golang/go${GO_VERSION}.linux-amd64.tar.gz" \
	&& tar -C /usr/local -xzf /tmp/go.tgz \
	&& rm -f /tmp/go.tgz \
	&& go version

RUN go get github.com/mitchellh/gox \
	&& go get github.com/mitchellh/packer

WORKDIR /go/src/github.com/mitchellh/packer
RUN git fetch origin refs/pull/922/head && git checkout FETCH_HEAD

RUN make || echo "First try should not build"

RUN curl -s -L -o /tmp/gagc.tgz https://google-api-go-client.googlecode.com/archive/2f3a11c875227040c6420113d8d1a634a489031e.tar.gz \
	&& tar xzf /tmp/gagc.tgz \
	&& mkdir -p ${GOPATH}/src/code.google.com/p/google-api-go-client/compute/ \
	&& rsync -r ./google-api-go-client-2f3a11c87522/compute/v1beta16 ${GOPATH}/src/code.google.com/p/google-api-go-client/compute/ \
	&& rm -rf /tmp/gagc.tgz ./google-api-go-client-2f3a11c87522

RUN hg clone https://code.google.com/p/gosshold ${GOPATH}/src/code.google.com/p/gosshold \
	&& curl -L -o /tmp/gosshold_packer.patch "https://gist.githubusercontent.com/rickard-von-essen/10444950/raw/d4f6cf54e37e3ee1486b9a351f3e3908fe8564d3/gosshold_packer.patch" \
	&& curl -L -o /tmp/gosshold_packer-parallels.patch "https://gist.githubusercontent.com/rickard-von-essen/10444950/raw/c94106303d99119f535be94e70969de08ef45543/gosshold_packer-parallels.patch"

RUN git apply < /tmp/gosshold_packer.patch \
	&&  sed -i 's/go.crypto/gosshold/g' builder/cloudstack/ssh.go

RUN make

RUN ./pkg/linux_amd64/packer -v

CMD ["cat","/go/src/github.com/mitchellh/packer/pkg/linux_amd64/packer"]