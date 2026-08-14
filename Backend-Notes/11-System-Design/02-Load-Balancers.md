# ⚖️ Load Balancing Algorithms & Layer 4/7 Load Balancers

## 📖 Overview

A **Load Balancer** acts as a traffic cop sitting in front of backend servers, routing client requests across all servers capable of fulfilling those requests to maximize speed and capacity utilization while ensuring no single server is overworked.

---

## 🛠 Load Balancing Algorithms

1. **Round Robin**: Requests are distributed sequentially across servers in list order.
2. **Weighted Round Robin**: Servers with higher hardware processing capacity receive proportionally more requests.
3. **Least Connections**: Directs traffic to the server with the fewest active open connections.
4. **IP Hash**: Hashes client IP to assign client requests consistently to the same server (session affinity).

---

## ⚡ Layer 4 vs Layer 7 Load Balancing

* **Layer 4 (Transport Layer)**: Routes traffic based on IP address and TCP/UDP ports without inspecting packet HTTP content. Extremely fast.
* **Layer 7 (Application Layer)**: Routes traffic based on HTTP headers, URLs, cookies, or payload content. Allows smart path routing (`/api/users` $\rightarrow$ User Service, `/api/payments` $\rightarrow$ Payment Service).

---

## 📌 Summary
* Layer 7 load balancers (Nginx, AWS ALB) allow path-based microservice routing and SSL termination.
