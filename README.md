# MERN E-Commerce with Role-Based Authentication

This is a **full-stack MERN application** featuring **role-based authentication**, **secure JWT tokens**, **password hashing**, and a modern frontend powered by **Tailwind CSS**, **DaisyUI**, and **Zustand** for state management.  
It includes an **admin dashboard** with dummy product data and an **items page** for regular users.

---

## 🚀 Tech Stack
- **MongoDB** – NoSQL database for user and product data.
- **Express.js** – Backend server framework.
- **React.js** – Frontend UI.
- **Node.js** – Runtime environment for backend.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **DaisyUI** – Tailwind CSS component library.
- **Zustand** – Lightweight state management for React.
- **JWT (JSON Web Token)** – Secure authentication.
- **bcrypt** – Password hashing.

---

## 🔐 Features
- **Authentication Requirement** – Secure login and signup required for protected pages.
- **Password Hashing** – All passwords hashed before storing in the database.
- **Role-Based Routing** –  
  - `user` role → Home, Items, Profile, About.  
  - `admin` role → Admin Dashboard.  
- **JWT Secure Authentication** – Tokens stored securely in `localStorage` for protected API calls.
- **Strict Middleware Conditions** – Ensures only authorized roles access certain routes.
- **Dummy Product Data** –  
  - **Dashboard**: Admin view for managing products (dummy data).  
  - **Items Page**: Public-facing product list for users.

---

## 📸 Screenshots

<img width="1343" height="562" alt="Image" src="https://github.com/user-attachments/assets/e5f0a053-6f0a-4821-8165-7f1b8aed0d38" />

<img width="1330" height="615" alt="Image" src="https://github.com/user-attachments/assets/8565f730-aae8-4b9f-82c1-3d41047c776a" />

<img width="1334" height="617" alt="Image" src="https://github.com/user-attachments/assets/3ac2c58c-97a4-41b5-8202-5f7c89747b52" />

<img width="1290" height="618" alt="Image" src="https://github.com/user-attachments/assets/ef0473de-752b-431c-9fe4-fd03150103a8" />

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Backend Setup
cd backend
npm install
npm run dev

# Frontend Setup
cd frontend
npm install
npm run dev

```
# Make sure to configure your .env files for both backend and frontend, including:

MONGO_URI – MongoDB connection string

JWT_SECRET – Secret key for JWT signing

PORT – Backend port

# 🛡️ Role-Based Navigation
Role	Accessible Pages
User	/, /items, /profile, /about
Admin	/dashboard

# Note
Most of the Frontend design build by help of AI to maximize the speed
