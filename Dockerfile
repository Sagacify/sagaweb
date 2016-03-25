FROM node:0.10.40

ENV APP_NAME saga-website
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

WORKDIR /var/www

ADD package.json /tmp/package.json
RUN cd /tmp && npm config set registry http://registry.npmjs.org/ && npm config set loglevel info && npm install --no-optional
RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www && cp /tmp/package.json /var/www && cd /var/www

COPY ./index.js /var/www/index.js
COPY ./public /var/www/public
COPY ./views /var/www/views

CMD ["npm", "start"]
