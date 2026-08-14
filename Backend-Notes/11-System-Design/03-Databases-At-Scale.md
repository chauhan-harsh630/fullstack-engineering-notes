# 🗄️ Scaling Databases: Replication vs Sharding

## 📖 Overview

As read and write throughput grows, a single database node becomes a CPU and disk I/O bottleneck. Scaling databases involves **Replication** (for read scaling) and **Sharding** (for write scaling).

---

## 🔄 Replication (Read Scaling)

```text
               Write Requests
                     │
                     ▼
           ┌──────────────────┐
           │   Primary Node   │ (Handles all INSERT/UPDATE/DELETE)
           └────────┬─────────┘
                    │ Async / Sync Replication
        ┌───────────┴───────────┐
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│ Read Replica 1│       │ Read Replica 2│ (Handles all SELECT queries)
└───────────────┘       └───────────────┘
```

---

## ✂️ Database Sharding (Write Scaling)

**Sharding** partitions a massive table horizontally into smaller chunks called **Shards**, placed on distinct physical database servers.
* *Example*: User table sharded by `user_id % 4`.
  * Server 0: `user_id` ends in 0
  * Server 1: `user_id` ends in 1
  * Server 2: `user_id` ends in 2
  * Server 3: `user_id` ends in 3

---

## 📌 Summary
* Read Replicas scale read throughput. Sharding scales write throughput and data storage capacity.
