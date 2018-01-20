FROM node:8.6.0-alpine
FROM nginx

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /var/www/seedom.io/html
RUN mkdir -p /var/www/ropsten.seedom.io/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx/seedom.io.conf  /etc/nginx/conf.d
COPY nginx/ropsten.seedom.io.conf /etc/nginx/conf.d

RUN echo "HELLO SEEDOM.IO" > /var/www/seedom.io/html/index.html
RUN echo "HELLO ROPSTEN.SEEDOM.IO" > /var/www/ropsten.seedom.io/html/index.html
