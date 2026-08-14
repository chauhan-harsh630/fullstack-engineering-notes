# 🌐 Nginx Reverse Proxy & Load Balancer

## 📖 Overview

**Nginx** is a high-performance HTTP web server and reverse proxy. In production environments, client HTTP requests do not hit Node.js servers directly. Instead, Nginx sits in front as a **Reverse Proxy**, handling SSL/TLS termination, static asset serving, rate limiting, and load balancing across internal Node.js app processes.

---

## 🛠 Nginx Configuration (`/etc/nginx/sites-available/default`)

```nginx
server {
    listen 80;
    server_name api.myapp.com;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.myapp.com;

    ssl_certificate /etc/letsencrypt/live/api.myapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.myapp.com/privkey.pem;

    # Serve static files directly
    location /static/ {
        alias /var/www/static/;
        expires 30d;
    }

    # Reverse proxy dynamic API requests to Node.js on port 3000
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 📌 Summary
* Place Nginx in front of Node.js servers for HTTPS encryption termination, static file caching, and reverse proxying.
