server {
  listen 80 default_server;
  listen [::]:80 default_server ipv6only=on;

  root /var/www/seedom.io;
  index index.html;

  server_name seedom.io www.seedom.io;

  location / {
      try_files $uri $uri/ =404;
  }
}
