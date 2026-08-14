# ⚡ Distributed Caching Patterns & Eviction Policies

## 📖 Overview

Selecting the right caching strategy dictates data freshness, system availability, and cache invalidation complexity.

---

## 🛠 Caching Patterns

1. **Cache-Aside (Lazy Loading)**: Application queries cache first. If miss, queries database, writes result to cache, and returns response.
2. **Write-Through**: Application writes data to cache, and the cache synchronously writes to database before returning success.
3. **Write-Back (Write-Behind)**: Application writes data to cache immediately. Cache asynchronously batches writes to database later (ultra-fast, but risk of data loss if cache crashes).

---

## 🗑 Cache Eviction Policies

When cache memory (RAM) is full, eviction policies choose which keys to remove:
* **LRU (Least Recently Used)**: Discards the item that hasn't been requested for the longest time.
* **LFU (Least Frequently Used)**: Discards the item requested least number of times overall.
* **FIFO (First In First Out)**: Evicts oldest key inserted regardless of access count.

---

## 📌 Summary
* Cache-Aside + LRU eviction is the gold standard combination for most web application read-heavy workloads.
