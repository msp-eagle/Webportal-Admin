
FROM nginx
COPY default.conf /etc/nginx/conf.d/
COPY dist/web-portal-admin /usr/share/nginx/html
