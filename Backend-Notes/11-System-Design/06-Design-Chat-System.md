# 💬 System Design Case Study: Real-Time Chat Application (WhatsApp/Slack)

## 📖 Overview

Design a scalable real-time 1-on-1 and group chat system capable of supporting millions of concurrent connected users.

---

## 🎯 High-Level Requirements

1. Real-time messaging with low latency ($<100\text{ ms}$).
2. Support 1-on-1 chats and group chats.
3. Message status indicators (Sent, Delivered, Read).
4. Store chat message history persistently.
5. Online/Offline user status indicators.

---

## 🏗️ High-Level Architecture

```text
Sender Client ──► Load Balancer ──► WebSocket Servers ──► Message Queue ──► Chat DB (NoSQL / Cassandra)
                                         │                    (Kafka)
                                         ▼
                             Presence Service (Redis) ──► Receiver Client (WebSocket)
```

---

## 🛠 Tech Stack Selection

1. **Protocol**: WebSockets for persistent full-duplex communication.
2. **Web Services**: Node.js + Socket.IO servers handling client WS connections.
3. **Presence Service**: Redis Key-Value store to track online status (`user:100:status = "online"`).
4. **Database**: NoSQL wide-column store (Apache Cassandra / ScyllaDB) or MongoDB for write-heavy chat history logs (O(1) sequential append writes).

---

## 📌 Summary
* WebSockets + Redis Presence + Message Broker (Kafka) + Cassandra enables scalable, low-latency chat applications.
