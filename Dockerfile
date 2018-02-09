FROM nginx

# copy static and releases to html dir
COPY static /usr/share/nginx/html/static
COPY dist /usr/share/nginx/html

# set up NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf
