# 🔄 Continuous Integration & Deployment (CI/CD)

## 📖 Overview

**CI/CD** automates the building, testing, and deployment pipeline for code changes.
* **Continuous Integration (CI)**: Automatically builds code and runs unit/integration tests whenever developers push code to Git.
* **Continuous Deployment (CD)**: Automatically deploys validated code changes to staging or production servers.

---

## 🛠 GitHub Actions Pipeline Example (`.github/workflows/deploy.yml`)

```yaml
name: Node.js CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4

      - name: Set up Node.js runtime
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run automated test suite
        run: npm test

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Trigger Cloud Deployment Webhook
        run: echo "Deploying container image to Cloud Server..."
```

---

## 📌 Summary
* CI/CD pipelines prevent broken builds from ever reaching production environments.
