server {
  listen 80 default_server;
  listen [::]:80 default_server ipv6only=on;

  root /var/www/ropsten.seedom.io/html;
  index index.html;

  server_name ropsten.seedom.io;

  location / {
      try_files $uri $uri/ =404;
  }
}
