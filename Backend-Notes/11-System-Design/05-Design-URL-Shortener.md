# 🔗 System Design Case Study: URL Shortener (TinyURL)

## 📖 Overview

Design a scalable URL shortening service (like TinyURL or bit.ly) that converts long URLs into short 7-character alias URLs.

---

## 🎯 Requirements

### Functional Requirements
1. Given a long URL, system generates a short URL (e.g., `https://tiny.url/abc123X`).
2. Visiting short URL redirects client to original long URL with `301 Permanent Redirect` or `302 Found`.
3. High availability and sub-50ms redirection latency.

### Scale Estimation
* 100 Million new URLs created per day.
* Read-to-Write ratio: 10:1 (1 Billion redirections per day).
* 7-character Base62 encoding ($[a-z, A-Z, 0-9]$): $62^7 \approx 3.5\text{ Trillion}$ unique short URLs!

---

## 🏗️ High-Level Architecture

```text
Client ──► Load Balancer ──► Web Server ──1. Read Short URL──► Redis Cache
                                │                                 │
                                ├──2. Cache Hit (301 Redirect)◄──┘
                                │
                                ├──3. Cache Miss
                                ▼
                         SQL Database
                        (id, short_code, original_url)
```

---

## 🛠 Base62 Encoding vs MD5 Hashing

* **Base62 Encoding**: Convert auto-incrementing database ID or Distributed Unique ID (Twitter Snowflake ID) to Base62.
* **301 vs 302 Redirect**:
  * `301 Permanent Redirect`: Browser caches redirection locally. Decreases server load, but prevents analytics tracking.
  * `302 Temporary Redirect`: Browser hits shortener server every time. Enables click analytics tracking!

---

## 📌 Summary
* Base62 encoding on unique IDs + Redis caching produces high performance URL shorteners.
