# 📁 File System Module (`fs`)

## 📖 Overview

The `fs` (File System) module is a built-in Node.js module that allows developers to interact with the file system on their computer or server. It provides functions to create, read, update, delete, and rename files and directories.

---

## ⚡ Synchronous vs Asynchronous File Operations

Node.js offers three ways to handle file operations:

1. **Synchronous (Blocking)**: Blocks execution until the operation completes (`fs.readFileSync`).
2. **Asynchronous Callbacks (Non-Blocking)**: Uses callback functions (`fs.readFile`).
3. **Promises-based (`fs/promises`)**: Uses `async/await` for clean non-blocking code.

---

## 🛠 Common File Operations

### 1. Reading Files (`fs/promises`)

```js
const fs = require('fs/promises');

async function readFileExample() {
  try {
    const data = await fs.readFile('./notes.txt', 'utf8');
    console.log('File Content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileExample();
```

### 2. Writing & Appending Files

```js
const fs = require('fs/promises');

async function writeExample() {
  // Overwrites existing content or creates file
  await fs.writeFile('./output.txt', 'Hello World!\n');

  // Appends content to existing file
  await fs.appendFile('./output.txt', 'Appended content.');
}
```

### 3. Deleting & Unlinking Files

```js
const fs = require('fs/promises');

async function deleteExample() {
  try {
    await fs.unlink('./temp.txt');
    console.log('File deleted successfully');
  } catch (err) {
    console.error('File deletion failed:', err.message);
  }
}
```

### 4. Working with Directories

```js
const fs = require('fs/promises');

async function dirExample() {
  // Create directory
  await fs.mkdir('./logs', { recursive: true });

  // Read directory contents
  const files = await fs.readdir('./logs');
  console.log('Logs directory files:', files);
}
```

---

## 🧠 Interview Questions

### 1. Why should you avoid synchronous `fs` methods in production web servers?
Synchronous methods (like `fs.readFileSync`) block the single main execution thread of Node.js. While reading a file synchronously, no incoming HTTP requests can be processed.

### 2. What is the difference between `fs.writeFile` and `fs.appendFile`?
`fs.writeFile` overwrites the file content completely if it exists, whereas `fs.appendFile` adds the content to the end of the file.

---

## 📌 Summary
* Always prefer `fs/promises` or asynchronous callbacks over synchronous methods in web applications.
* Specify character encoding (`'utf8'`) when reading text files to receive strings instead of raw binary buffers.
