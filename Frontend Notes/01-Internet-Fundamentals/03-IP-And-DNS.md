# 📍 IP Addresses and DNS Lookup

## 📖 Overview

Computers on a network communicate using numerical **IP Addresses** (e.g., `93.184.216.34`). Because humans remember domain names (`example.com`), the **Domain Name System (DNS)** translates human-readable domain names into IP addresses.

---

## 🔄 DNS Resolution Lookup Sequence

```text
User enters "example.com"
        │
        ▼
1. Check Browser Cache
        │ (If not found)
        ▼
2. Check OS Resolver Cache / HOSTS file
        │ (If not found)
        ▼
3. Query Recursive Resolver (ISP)
        │
        ▼
4. Query Root Name Server (.)
        │
        ▼
5. Query TLD Name Server (.com)
        │
        ▼
6. Query Authoritative Name Server (example.com) ──► Returns IP: 93.184.216.34
```

---

## 📌 Summary
* DNS acts as the internet's phonebook, translating domain names to IP addresses.
