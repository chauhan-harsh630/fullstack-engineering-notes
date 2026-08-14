# 🐧 Linux CLI Basics for Backend Engineers

## 📖 Overview

Linux powers the vast majority of cloud infrastructure, production servers, and Docker containers worldwide. Mastering fundamental Linux CLI commands is essential for backend engineering.

---

## 🛠 Essential Linux Commands Cheat Sheet

### File & Directory Management
```bash
ls -la          # List all files with permissions and sizes
pwd             # Print current working directory
mkdir -p a/b/c  # Create nested directory tree
rm -rf folder   # Recursively delete folder without prompt
cp -r src dest  # Copy files recursively
mv old new      # Move or rename file
```

### System Monitoring & Process Management
```bash
htop            # Interactive process monitor (CPU/RAM)
df -h           # Check disk space usage
free -m         # Check RAM memory usage
ps aux | grep node # Find process ID (PID) of running Node app
kill -9 <PID>   # Force kill process by PID
```

### Networking & Logs
```bash
netstat -tulpn  # List open listening network ports
curl -i https://api.com # Make HTTP request from terminal
tail -f -n 100 /var/log/nginx/error.log # Stream live error log
```

---

## 📌 Summary
* Master `ls`, `grep`, `tail -f`, `htop`, and `netstat` for daily production server management and debugging.
