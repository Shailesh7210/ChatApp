# ChatApp 🚀

A full-stack **real-time chat application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Socket.IO** for real-time messaging. Users can register, login, update their profile, and chat in real-time with online users.

---

## 🌟 Features

- User authentication (Signup / Login / Logout)
- JWT-based authentication with secure cookies
- Update user profile
- Real-time messaging with Socket.IO
- Online/offline user detection
- Responsive and modern UI with React and Tailwind CSS
- Zustand for state management

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, Zustand, Tailwind CSS, react-hot-toast
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Cookie-Parser, CORS
- **Real-time communication:** Socket.IO
- **Version Control:** Git, GitHub

---




## 📂 Project Structure

chat_app/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── lib/
│ │ └── index.js
│ ├── package.json
│ └── .env
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── store/
│ ├── lib/
│ └── App.jsx
├── package.json
└── vite.config.js



🔑 Authentication Flow

Signup: /api/auth/signup → Creates a new user and returns a JWT cookie

Login: /api/auth/login → Authenticates user and sets JWT cookie

Protected routes: Middleware protectRoute checks JWT cookie

Logout: /api/auth/logout → Clears JWT cookie

💬 Real-Time Chat

Uses Socket.IO for real-time communication

Tracks online users and updates UI accordingly

Messages are sent and received instantly

✅ State Management

Zustand is used for global state in the frontend:

useAuthStore → Manages authentication, socket connection, and online users

useChatStore → Manages chat state

useThemeStore → Manages theme preferences

📌 Usage

Register a new account

Login to access chat features

Update your profile

Chat with online users in real-time

📦 Dependencies
Backend

express

mongoose

dotenv

cors

cookie-parser

jsonwebtoken

socket.io

Frontend

react

vite

react-hot-toast

zustand

axios

socket.io-client

tailwindcss

