FROM nginx
FROM node:8.6.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /var/www/seedom.io/html
RUN mkdir -p /var/www/ropsten.seedom.io/html

COPY nginx/seedom.io /etc/nginx/sites-available
COPY nginx/ropsten.seedom.io /etc/nginx/sites-available

RUN ln -s /etc/sites-available/seedom.io /etc/sites-enabled/seedom.io
RUN ln -s /etc/sites-available/ropsten.seedom.io /etc/sites-enabled/ropsten.seedom.io

COPY static/build /usr/share/nginx/html
