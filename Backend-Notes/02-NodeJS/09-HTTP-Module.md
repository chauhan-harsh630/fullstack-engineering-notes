# 🌐 HTTP Module

## 📖 Overview

The `http` module is a built-in Node.js module used to transfer data over HTTP and construct basic web servers without external frameworks like Express.

---

## 🚀 Creating a Basic Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to Node.js HTTP Server' }));
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route Not Found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 🧠 Interview Questions

### Why do developers use Express.js instead of the raw `http` module?
The raw `http` module requires manually parsing URLs, body data streams, headers, status codes, and routing parameters. Frameworks like Express provide high-level abstractions like robust routing, middleware pipelines, and body parsers out of the box.

---

## 📌 Summary
* The `http` module forms the underlying bedrock of all Web frameworks in Node.js.
* Low-level server creation involves handling the `req` (IncomingMessage) readable stream and writing to the `res` (ServerResponse) writable stream.
