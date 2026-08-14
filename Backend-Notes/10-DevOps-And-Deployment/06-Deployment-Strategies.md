# 🚀 Zero-Downtime Deployment Strategies

## 📖 Overview

Deploying new software updates to production without interrupting active user traffic requires zero-downtime deployment techniques.

---

## 🛠 Common Deployment Patterns

### 1. Blue-Green Deployment
* Two identical production environments exist: **Blue** (current live version) and **Green** (new release version).
* Green is deployed and fully tested in isolation.
* The Load Balancer router instantly switches 100% of live traffic from Blue to Green.
* If bugs occur, the router instantly switches traffic back to Blue.

### 2. Canary Deployment
* Gradually rolls out the new release to a tiny subset of users (e.g., 5% of traffic).
* System metrics (errors, latency, CPU) are monitored automatically.
* Traffic allocation scales up incrementally (5% $\rightarrow$ 25% $\rightarrow$ 50% $\rightarrow$ 100%).

### 3. Rolling Deployment
* Instances in a server pool are updated incrementally one-by-one or batch-by-batch behind the load balancer until all instances run the new version.

---

## 📌 Summary
* Blue-Green and Canary deployments enable instant rollbacks and eliminate downtime during code updates.
