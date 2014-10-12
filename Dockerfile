
FROM centos:centos7

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y nodejs npm

COPY . /home/jamespamplin.com

WORKDIR /home/jamespamplin.com

RUN /usr/bin/npm install

CMD /usr/bin/npm start

EXPOSE 5000
