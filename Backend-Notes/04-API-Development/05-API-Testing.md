# 🧪 API Testing & Validation

## 📖 Overview

Automated API testing ensures backend routes correctly parse inputs, return proper HTTP status codes, interact accurately with databases, and handle edge cases cleanly.

---

## 🛠 Integration Testing with Jest and Supertest

### Setup
```bash
npm install -D jest supertest
```

### Example Test Suite (`tests/user.test.js`)
```javascript
const request = require('supertest');
const app = require('../src/app');

describe('GET /api/v1/users', () => {
  it('should return 200 OK and list of users', async () => {
    const res = await request(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body.status).toBe('success');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe('POST /api/v1/users', () => {
  it('should return 400 Bad Request if email is missing', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({ name: 'Alice' });

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBeDefined();
  });
});
```

---

## 📌 Summary
* Use `supertest` to make HTTP calls directly against an Express `app` instance without manually opening network ports.
* Test both happy paths and failure/validation cases.
