FROM node:latest

RUN npm install --global nodemon

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app/

WORKDIR /usr/app
ADD . /usr/app

EXPOSE 8080

CMD ["nodemon", "-L", "/usr/app/src"]