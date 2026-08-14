# ⚡ Caching with Redis

## 📖 Overview

**Redis** (Remote Dictionary Server) is an open-source, in-memory data structure store used as a database, cache, and message broker. Because Redis keeps data in RAM, query response times are sub-millisecond ($<1\text{ ms}$).

Caching expensive SQL database query results or API calls in Redis dramatically reduces database server load and lowers API latency.

---

## 🔄 Cache-Aside (Lazy Loading) Pattern

```text
Client ──► Backend Server ──1. Check Cache──► Redis
             │                                  │
             ├──2. Cache Hit (Return Data)◄─────┘
             │
             ├──3. Cache Miss
             ▼
      Primary Database (SQL)
             │
             ├──4. Store Result in Redis (with TTL)
             ▼
      Return Response to Client
```

---

## 💻 Node.js Redis Implementation (`redis` / `ioredis`)

```javascript
const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect();

async function getProductDetails(req, res) {
  const productId = req.params.id;
  const cacheKey = `product:${productId}`;

  try {
    // 1. Check Redis Cache
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log('Cache Hit');
      return res.status(200).json(JSON.parse(cachedData));
    }

    // 2. Cache Miss: Query Database
    console.log('Cache Miss');
    const product = await db.query('SELECT * FROM products WHERE id = $1', [productId]);

    // 3. Save to Redis with 1 Hour Expiration (TTL: 3600 seconds)
    await client.setEx(cacheKey, 3600, JSON.stringify(product.rows[0]));

    res.status(200).json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

---

## 📌 Summary
* Set **TTL (Time to Live)** on cache keys to prevent stale data buildup.
* Use Redis to cache read-heavy endpoints.
