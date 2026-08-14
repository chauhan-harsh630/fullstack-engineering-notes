# 🐳 Docker & Containerization

## 📖 Overview

**Docker** packages applications and their dependencies (runtime libraries, OS utilities, environment configurations) into lightweight, isolated **Containers**. Containers run consistently across development laptops, staging environments, and cloud servers.

---

## 🛠 Dockerfile for Node.js App

Create `Dockerfile` at the root of the project:

```dockerfile
# Use official lightweight Node.js base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency manifests first (Leverage Docker layer caching)
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose port
EXPOSE 3000

# Specify container start command
CMD ["node", "src/server.js"]
```

---

## 🛠 Multi-Container Orchestration (`docker-compose.yml`)

```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - DATABASE_URL=postgres://postgres:secret@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### Essential CLI Commands:
```bash
docker build -t my-backend-api .
docker run -p 3000:3000 my-backend-api
docker-compose up -d --build
docker-compose down
```

---

## 📌 Summary
* Docker eliminates "works on my machine" bugs by bundling application logic and OS runtimes together.
