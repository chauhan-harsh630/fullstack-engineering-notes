# 📈 Backend Scalability Strategies

## 📖 Overview

Scalability is the capability of a backend system to handle growing amounts of work (traffic, concurrent users, data volume) seamlessly by adding resources.

---

## 🛠 Vertical vs Horizontal Scaling

* **Vertical Scaling (Scale Up)**: Upgrading server hardware (adding more CPU cores, RAM, SSD storage). Has physical hardware limits and introduces single points of failure.
* **Horizontal Scaling (Scale Out)**: Adding more machine instances behind a Load Balancer.

---

## 🏗️ Core Scalability Building Blocks

1. **Stateless Web Tier**: Store sessions in Redis or JWT cookies so any app server instance can handle any incoming user request.
2. **Load Balancing**: Distribute incoming traffic evenly across app instances (Nginx, AWS ALB).
3. **Database Read Replicas**: Separate database writes (Primary Node) from reads (Replica Read Nodes).
4. **Database Sharding**: Partitioning large tables horizontally across distinct database servers based on a shard key.

---

## 📌 Summary
* Keep application stateless to allow seamless horizontal auto-scaling.
