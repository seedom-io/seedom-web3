FROM nginx

# copy dist
COPY dist/ /usr/share/nginx/html/

# set up NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf
