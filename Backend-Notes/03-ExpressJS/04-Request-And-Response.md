# 📩 Request and Response Objects

## 📖 Overview

In Express, route handlers receive two primary objects:
1. `req` (**Request**): Represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
2. `res` (**Response**): Represents the HTTP response that an Express app sends when it gets an HTTP request.

---

## 📥 Request Object (`req`) Key Properties

* `req.body`: Contains key-value pairs of data submitted in the request body (requires `express.json()`).
* `req.params`: Object containing properties mapped to named route parameters.
* `req.query`: Object containing query string parameters.
* `req.headers`: Contains headers sent by the client (e.g., `authorization`, `content-type`).
* `req.ip`: The remote IP address of the request.
* `req.get(headerName)`: Helper method to retrieve a specific request header.

```javascript
app.post('/api/products', (req, res) => {
  const token = req.get('Authorization');
  const { title, price } = req.body;
  console.log('Headers:', req.headers);
});
```

---

## 📤 Response Object (`res`) Key Methods

* `res.json(data)`: Sends a JSON response with status 200 OK by default.
* `res.status(code)`: Sets the HTTP status for the response.
* `res.send(body)`: Sends a HTTP response (string, Buffer, object, array).
* `res.sendStatus(code)`: Sets status code and sends its text representation.
* `res.set(field, value)`: Sets response HTTP header.
* `res.redirect([status,] path)`: Redirects client to specified URL.
* `res.download(path)`: Prompts file download.

```javascript
app.get('/api/data', (req, res) => {
  res.status(200).json({ success: true, count: 1 });
});
```

---

## 📌 Summary
* `req` gathers incoming client data.
* `res` constructs and outputs the response.
* Chain methods like `res.status(404).json({ error: "Not Found" })`.
