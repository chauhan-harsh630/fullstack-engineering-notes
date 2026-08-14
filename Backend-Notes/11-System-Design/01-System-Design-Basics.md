# 🏛️ System Design Fundamentals

## 📖 Overview

**System Design** is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. It requires balancing trade-offs between availability, consistency, performance, and latency under high scale.

---

## ⚖️ CAP Theorem

In any distributed data store, you can simultaneously guarantee at most **two** out of three properties:
* **Consistency (C)**: Every read receives the most recent write or an error.
* **Availability (A)**: Every non-failing node returns a non-error response (without guaranteeing it contains the latest write).
* **Partition Tolerance (P)**: The system continues to operate despite arbitrary network drops or packet losses between nodes.

> In distributed networks, **Partition Tolerance (P)** is non-negotiable. Therefore, systems choose between **CP** (Consistency over Availability) or **AP** (Availability over Consistency).

---

## ⚡ Latency Numbers Every Backend Engineer Should Know

```text
L1 Cache Reference                      0.5 ns
Branch Mispredict                       5.0 ns
L2 Cache Reference                      7.0 ns
Main Memory (RAM) Read                100.0 ns
Read 1 MB sequentially from RAM        10,000 ns (10 µs)
Read 1 MB sequentially from SSD       200,000 ns (200 µs)
Read 1 MB sequentially from Disk    2,000,000 ns (2 ms)
Packet Round Trip (US to EU)      150,000,000 ns (150 ms)
```

---

## 📌 Summary
* Use CAP theorem principles to decide between strong consistency (SQL databases) vs high availability (Cassandra/DynamoDB).
