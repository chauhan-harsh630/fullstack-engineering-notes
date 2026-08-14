# 🔌 Real-Time WebSockets (`Socket.IO`)

## 📖 Overview

Standard HTTP is stateless and request-response driven (client initiates, server responds). **WebSockets** (WS/WSS) establish a persistent, full-duplex, bi-directional TCP connection between client and server, allowing real-time data streaming without HTTP polling overhead.

---

## 🛠 `Socket.IO` Implementation Example

### Server (`server.js`)
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: 'http://localhost:3000' }
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Join a specific room
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
  });

  // Listen for chat message event
  socket.on('send_message', (data) => {
    // Broadcast message to everyone in the room
    io.to(data.roomId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(4000);
```

---

## 📌 Summary
* Use WebSockets for real-time applications: chat systems, live gaming, collaborative document editing, and trading platforms.
