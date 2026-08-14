# 🔐 Authentication vs Authorization

## 📖 Overview

Although frequently used interchangeably, **Authentication** and **Authorization** represent two distinctly different security checkpoints in backend systems.

---

## ⚡ Key Differences

| Dimension | Authentication (AuthN) | Authorization (AuthZ) |
| --------- | ---------------------- | --------------------- |
| **Definition** | Verifies **who** a user is (Identity Verification). | Determines **what** actions an authenticated user can perform (Permissions). |
| **Question** | *"Who are you?"* | *"Are you allowed to perform this action?"* |
| **Mechanism** | Passwords, OTP, OAuth, Biometrics. | Role-Based Access Control (RBAC), Permissions matrix. |
| **Execution Order** | Must occur **first**. | Occurs **second** (after identity is verified). |
| **HTTP Status Code on Failure** | `401 Unauthorized` | `403 Forbidden` |

---

## 📌 Summary
* Authentication checks identity (`401` on failure).
* Authorization checks permissions (`403` on failure).
