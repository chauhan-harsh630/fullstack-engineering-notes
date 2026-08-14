# Event Loop in Node.js

The **Event Loop** is the heart of Node.js. It allows Node.js to perform **non-blocking (asynchronous) operations** even though JavaScript runs on a **single thread**.

Instead of waiting for slow tasks like reading files or making API calls, Node.js delegates those tasks to **libuv** or the **Operating System** and continues executing other code. Once the task is completed, the Event Loop executes its callback.

> **Simple Definition**
>
> The Event Loop is a mechanism that continuously checks whether asynchronous tasks have completed and executes their callback functions when the Call Stack becomes empty.

---

# Why Do We Need the Event Loop?

Suppose your application needs to:

- Read a file
- Query a database
- Call an external API
- Wait for a timer

If JavaScript waited for every task to finish, the server would become very slow.

Instead, Node.js:

1. Starts the asynchronous operation.
2. Continues executing other JavaScript code.
3. Executes the callback when the operation finishes.

This makes Node.js extremely efficient for I/O-intensive applications.

---

# Components Involved

## 1. Call Stack

The Call Stack stores functions currently being executed.

Example

```js
function greet() {
    console.log("Hello");
}

greet();
```

Call Stack

```text
greet()
Global()
```

The Call Stack follows the **LIFO (Last In First Out)** principle.

---

## 2. libuv

Node.js uses **libuv**, a C library that provides:

- Event Loop
- Thread Pool
- File System APIs
- Timers
- TCP Networking
- DNS

It is responsible for handling asynchronous operations.

---

## 3. Operating System

Many operations like networking are handled directly by the operating system.

Examples

- HTTP
- TCP
- UDP
- Sockets

These operations usually do **not** use the Thread Pool.

---

## 4. Thread Pool

Some operations cannot be handled asynchronously by the OS.

These tasks are executed inside libuv's Thread Pool.

Examples

- fs.readFile()
- fs.writeFile()
- bcrypt.hash()
- crypto.pbkdf2()
- zlib.gzip()
- dns.lookup()

Default Thread Pool Size

```text
4 Threads
```

You can change it using:

```bash
UV_THREADPOOL_SIZE=8
```

---

## 5. Callback Queue

When an asynchronous operation finishes, its callback is placed inside the Callback Queue.

Example

```js
fs.readFile("notes.txt", () => {
    console.log("Completed");
});
```

The callback waits until the Event Loop moves it to the Call Stack.

---

## 6. Event Loop

The Event Loop continuously checks:

```text
Is the Call Stack Empty?
```

If the answer is **Yes**, it executes the next callback waiting in the appropriate queue.

---

# How the Event Loop Works

```text
JavaScript Code
        │
        ▼
   Call Stack
        │
        ├──────────────► Synchronous Code
        │
        └──────────────► Async Task
                             │
                             ▼
                           libuv
                             │
                  Thread Pool / OS
                             │
                             ▼
                     Callback Queue
                             │
                             ▼
                       Event Loop
                             │
                             ▼
                        Call Stack
                             │
                             ▼
                         Execute
```

---

# Example

```js
const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", () => {
    console.log("Reading Completed");
});

console.log("End");
```

Output

```text
Start
End
Reading Completed
```

---

# Event Loop Phases

The Event Loop executes callbacks in multiple phases.

```text
┌──────────────────────────────┐
│ 1. Timers                    │
├──────────────────────────────┤
│ 2. Pending Callbacks         │
├──────────────────────────────┤
│ 3. Idle / Prepare            │
├──────────────────────────────┤
│ 4. Poll                      │
├──────────────────────────────┤
│ 5. Check                     │
├──────────────────────────────┤
│ 6. Close Callbacks           │
└──────────────────────────────┘
```

Let's understand each phase.

---

# 1. Timers Phase

Executes callbacks scheduled by

- setTimeout()
- setInterval()

Example

```js
setTimeout(() => {
    console.log("Timer");
}, 1000);
```

---

# 2. Pending Callbacks Phase

Executes some system-level callbacks that were deferred from the previous iteration.

Most developers rarely interact with this phase directly.

---

# 3. Idle / Prepare Phase

Used internally by libuv.

No user code runs here.

---

# 4. Poll Phase

This is the most important phase.

Responsibilities:

- Execute I/O callbacks
- Wait for incoming I/O events
- Process completed file operations

Example

```js
fs.readFile("notes.txt", () => {
    console.log("Done");
});
```

The callback is executed during the Poll phase.

---

# 5. Check Phase

Executes callbacks scheduled using

```js
setImmediate()
```

Example

```js
setImmediate(() => {
    console.log("Immediate");
});
```

---

# 6. Close Callbacks Phase

Executes callbacks for closed resources.

Example

```js
socket.on("close", () => {
    console.log("Connection Closed");
});
```

---

# Microtask Queue

The Microtask Queue has **higher priority** than the Event Loop phases.

Examples

```js
Promise.resolve().then(...)
queueMicrotask(...)
```

These callbacks execute **before** the Event Loop continues to the next phase.

---

# process.nextTick()

Node.js has a special queue called the **Next Tick Queue**.

```js
process.nextTick(() => {
    console.log("Next Tick");
});
```

This queue has an even **higher priority** than the Microtask Queue.

Priority Order

```text
Highest

process.nextTick()

↓

Promise.then()

↓

setTimeout()

↓

I/O Callbacks

↓

setImmediate()

Lowest
```

---

# Examples of Execution Order

```js
console.log("Start");

process.nextTick(() => {
    console.log("Next Tick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

Output

```text
Start
End
Next Tick
Promise
Timer
```

---

# Interview Questions

## 1. What is the Event Loop?

The Event Loop is a mechanism that continuously checks the Call Stack and executes asynchronous callbacks when the Call Stack becomes empty.

---

## 2. Why is the Event Loop important?

It allows Node.js to perform asynchronous, non-blocking operations while JavaScript executes on a single thread.

---

## 3. What is the Poll phase?

The Poll phase processes completed I/O operations and executes their callbacks.

---

## 4. Which executes first?

```js
Promise.then()
setTimeout()
```

**Answer:** `Promise.then()` because it belongs to the Microtask Queue.

---

## 5. Which executes first?

```js
process.nextTick()
Promise.then()
```

**Answer:** `process.nextTick()` because the Next Tick Queue has the highest priority in Node.js.

---

# Summary

- JavaScript runs on a single thread.
- The Event Loop enables asynchronous execution.
- libuv manages background operations.
- Completed callbacks wait in queues.
- `process.nextTick()` has the highest priority.
- Promises execute before timers.
- The Poll phase handles most I/O callbacks.
- Node.js is ideal for I/O-bound applications because it avoids blocking the main thread.
