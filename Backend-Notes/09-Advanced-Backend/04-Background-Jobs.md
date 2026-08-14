# ⚙️ Background Processing & Worker Queues (BullMQ)

## 📖 Overview

Long-running tasks like sending welcome emails, processing video encodings, generating PDF invoices, or pushing analytics events should **never** run synchronously inside HTTP route handlers. Blocking the main thread causes slow HTTP responses and request timeouts.

**Worker Queues** (like `BullMQ` backed by Redis) push tasks into a background queue and execute them asynchronously across dedicated worker processes.

---

## 🛠 `BullMQ` Implementation Example

```javascript
const { Queue, Worker } = require('bullmq');

// 1. Create Queue Producer (in Express Route)
const emailQueue = new Queue('emailQueue', { connection: { host: 'localhost', port: 6379 } });

app.post('/api/register', async (req, res) => {
  const user = await createUser(req.body);

  // Push job to queue (Returns HTTP response immediately!)
  await emailQueue.add('sendWelcomeEmail', { email: user.email, name: user.name });

  res.status(201).json({ message: 'User registered successfully!' });
});

// 2. Create Queue Worker (Separate background process)
const emailWorker = new Worker('emailQueue', async (job) => {
  console.log(`Processing email job for ${job.data.email}`);
  await sendEmail(job.data.email, job.data.name);
}, { connection: { host: 'localhost', port: 6379 } });

emailWorker.on('completed', job => console.log(`Job ${job.id} completed!`));
```

---

## 📌 Summary
* Offload non-blocking operations to Redis-backed background workers for sub-100ms API response times.
