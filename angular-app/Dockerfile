FROM node:8.7.0-alpine

RUN apk add --update --upgrade --no-cache tini \
  libc6-compat

RUN mkdir /home/service
WORKDIR /home/service

#ARG DEVELOPMENT=false
#RUN if [ $DEVELOPMENT == true ]; then yarn global add @angular/cli; fi

RUN yarn global add @angular/cli

COPY package.json .

RUN yarn install

RUN rm -rf /tmp/*

COPY . .

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
