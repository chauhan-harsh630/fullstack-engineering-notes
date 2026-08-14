# 📨 Message Queues (RabbitMQ & Kafka)

## 📖 Overview

In synchronous architectures, if Service A makes a direct HTTP call to Service B, Service A is blocked until Service B responds. If Service B goes down, the entire request fails.

**Message Queues** enable **asynchronous, event-driven communication** between backend microservices. Producers publish messages to a queue, and Consumers process them asynchronously when ready.

---

## ⚡ Comparison: RabbitMQ vs Apache Kafka

| Feature | RabbitMQ | Apache Kafka |
| ------- | -------- | ------------ |
| **Architecture** | Smart broker, dumb consumer (AMQP protocol) | Dumb broker, smart consumer (Distributed Log) |
| **Primary Use Case** | Complex routing, transactional message delivery | High-throughput streaming, log aggregation, real-time analytics |
| **Message Persistence** | Deleted once acknowledged by consumer | Retained on disk for set retention period (e.g., 7 days) |
| **Throughput** | ~10k - 100k msgs/sec | >1 Million msgs/sec |

---

## 📌 Summary
* Use message queues to decouple services, smooth traffic spikes, and process background tasks reliably.
