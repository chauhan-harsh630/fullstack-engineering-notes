# 🌊 Streams and Buffers

## 📖 Overview

When handling large datasets (such as a 2 GB video file or a huge log file), loading the entire file into memory before processing causes high RAM consumption and server failure. Node.js solves this using **Streams** and **Buffers**.

---

## 🧩 What is a Buffer?

A **Buffer** is a temporary holding area in memory (RAM) used to store raw binary data before or during processing.

```js
// Create a buffer from string
const buf = Buffer.from('Hello Node.js');

console.log(buf); // <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 2e 6a 73>
console.log(buf.toString()); // Hello Node.js
```

---

## 🌊 What is a Stream?

A **Stream** is an abstract interface for working with streaming data in Node.js. Instead of loading an entire file into memory at once, data is processed chunk-by-chunk in pieces.

### Types of Streams:
1. **Readable Stream**: Used to read data (e.g., `fs.createReadStream`).
2. **Writable Stream**: Used to write data (e.g., `fs.createWriteStream`).
3. **Duplex Stream**: Both Readable and Writable (e.g., TCP socket).
4. **Transform Stream**: Duplex stream that can modify data as it is written and read (e.g., `zlib.createGzip`).

---

## 🔄 Pipe and Pipeline

The `.pipe()` method connects a readable stream to a writable stream.

```js
const fs = require('fs');

const readStream = fs.createReadStream('./large-input.txt');
const writeStream = fs.createWriteStream('./output-copy.txt');

// Pipe chunk data directly from reader to writer
readStream.pipe(writeStream);
```

---

## 🧠 Interview Questions

### 1. Why are Streams crucial for high-performance Node.js applications?
Streams allow memory-efficient processing of large files or network responses by processing data chunk-by-chunk, resulting in very low memory overhead and low time-to-first-byte latency.

---

## 📌 Summary
* **Buffers** handle raw binary data in memory.
* **Streams** handle data sequentially in chunks without flooding RAM.
