
FROM centos:centos7

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y nodejs npm

COPY . /home/jamespamplin.com

WORKDIR /home/jamespamplin.com

ENV NODE_ENV production

RUN /usr/bin/npm install

CMD ["npm", "start"]

EXPOSE 5000
