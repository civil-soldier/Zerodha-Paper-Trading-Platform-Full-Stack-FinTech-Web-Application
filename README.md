# 🚀 ArthiQ – Paper Trading Platform

ArthiQ is a full-stack paper trading platform that allows users to simulate stock market trading using virtual money. It helps users learn, practice, and test trading strategies without risking real money.

---

## 🌐 Live Demo

👉 https://arthiq-paper-trading-platform-28xr.vercel.app/

---

## 🎥 Demo Video

[![ArthiQ - Paper Trading Platform Demo](https://i9.ytimg.com/vi_webp/XIyBg6d9JFs/mqdefault.webp?v=69dcc485&sqp=CPyI884G&rs=AOn4CLB79amMtvnOHZy9iMopLkt1YmfzGQ)](https://youtu.be/XIyBg6d9JFs)

> Click the thumbnail above to watch the demo on YouTube

---

## ✨ Features

- 💸 Virtual Trading with simulated funds
- 📊 Real-time Dashboard (Portfolio + Trades)
- 🔐 OTP-based Authentication (Email)
- 🔑 JWT-based secure sessions
- 📈 Buy/Sell stock simulation
- 🧠 Strategy testing without risk
- 🐳 Dockerized backend
- ☁️ AWS EC2 deployment (No cold starts)
- 🌐 Custom domain + HTTPS (Certbot)
- ⚡ PM2 process management

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas

**Authentication**
- JWT
- Email OTP (Resend)

**DevOps**
- Docker
- AWS EC2 (Ubuntu)
- Nginx
- PM2
- Certbot (SSL)
- GoDaddy (Domain)

---

## ⚙️ Local Setup

### Clone Repo

```bash
git clone https://github.com/<your-username>/arthiq-paper-trading-platform.git
cd arthiq-paper-trading-platform
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

Create `.env`:

```env
PORT=3002
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
EMAIL_API_KEY=your_resend_key
EMAIL_FROM=your_domain_email
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🐳 Docker (Backend Containerization)

The backend is fully containerized using Docker.

### 🔹 Docker Image

```
backend-backend:latest
```

---

### 🔹 Docker Compose Config

```yaml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "5000:3002"
    env_file:
      - .env
    restart: always
```

---

### 🔹 Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

---

### 🔹 Run Using Docker

```bash
docker-compose up --build
```

---

### 🔹 How to Access

After container starts:

```
http://localhost:5000
```

👉 Explanation:
- Container runs app on **port 3002**
- Docker maps it to **host port 5000**
- Access via **localhost:5000**

---

### 🔹 Why Docker Helps

- No dependency issues
- Same environment everywhere
- Easy setup for contributors
- One command startup

---

## ☁️ Production Deployment (AWS EC2)

This project is deployed on **AWS EC2 (Ubuntu)** for better performance and no cold start issues.

---

### 🔹 Infrastructure

- EC2 Instance (Ubuntu)
- PM2 (process manager)
- Nginx (reverse proxy)
- Certbot (HTTPS SSL)
- Domain via GoDaddy

---

### 🔹 Deployment Flow

1. SSH into EC2
2. Clone repo
3. Install dependencies
4. Start backend using PM2:

```bash
pm2 start server.js
pm2 save
pm2 startup
```

---

### 🔹 Nginx Setup

- Routes traffic from port 80 → backend
- Acts as reverse proxy

---

### 🔹 Domain Setup

- Domain purchased via GoDaddy
- A record points to EC2 public IP

Example:

```
papertrading.site
```

---

### 🔹 Enable HTTPS

```bash
sudo certbot --nginx
```

---

### 🌐 Live App

```
https://papertrading.site
```

---

## 📖 Usage Guide

### 🆕 New Users

1. Sign up using email
2. Verify OTP
3. Get virtual funds
4. Start trading

---

### 🔁 Existing Users

1. Login via OTP
2. Access dashboard
3. View portfolio & trades
4. Continue practicing

---

## 🧠 How It Works

- Users get virtual balance
- Trades are simulated
- Portfolio updates in real-time
- No real money involved

---

## 📂 Project Structure

```
arthiq-paper-trading-platform/
│
├── backend/
├── frontend/
├── docker-compose.yml
├── Dockerfile
└── README.md
```

---

## 🚀 Future Improvements

- Real-time stock APIs
- TradingView charts
- Leaderboard system
- Mobile optimization

---

## 🤝 Contributing

Open source project 🚀

```bash
git checkout -b feature/your-feature
```

- Fork repo
- Make changes
- Submit PR

---

## 📜 License

MIT License

---

## ⭐ Support

- Star ⭐ the repo
- Fork 🍴 it
- Share 📢

---

## 📬 Contact

- GitHub Issues / PRs

---

**Happy Trading 🚀**
