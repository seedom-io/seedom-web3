FROM nginx

RUN apt-get update && apt-get install -y nodejs npm

RUN mkdir -p /var/www/seedom.io/html
RUN mkdir -p /var/www/ropsten.seedom.io/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx/seedom.io.conf  /etc/nginx/conf.d
COPY nginx/ropsten.seedom.io.conf /etc/nginx/conf.d

COPY static/src /var/www/seedom.io/html

RUN echo "HELLO ROPSTEN.SEEDOM.IO" > /var/www/ropsten.seedom.io/html/index.html
