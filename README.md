# Syntecxhub_Employee_Management_System
A full-stack Employee Management System built with MERN stack featuring secure CRUD operations, responsive React UI, Node.js &amp; Express backend, and MongoDB database integration. Includes employee record management, form validation, authentication, and modern dashboard design.

# 🚀 Employee Management System (EMS)

A modern full-stack Employee Management System built using the MERN Stack with advanced dashboard analytics, authentication, dark mode, export features, charts, and responsive UI.

---

# 📌 Features

## 🔐 Authentication System

* User Registration
* User Login
* Protected Routes
* JWT Authentication
* Persistent Login

## 👨‍💼 Employee Management

* Add Employee
* Edit Employee
* Delete Employee
* View Employee List
* Search Employees
* Department Filter

## 📊 Dashboard Analytics

* Employee Statistics Cards
* Department Analytics Chart
* Employee Distribution Pie Chart
* Salary Expense Overview

## 🌙 Premium UI Features

* Dark Mode / Light Mode
* Responsive Design
* Framer Motion Animations
* Toast Notifications
* Premium Dashboard Layout

## 📁 Export Features

* Export Employees to Excel
* Export Employees to PDF

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios
* Framer Motion
* React Toastify
* Recharts
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

# 📂 Project Structure

```bash
employee-management-system/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone <your-github-repo-link>
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# ▶️ Run The Project

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🌐 Frontend URL

```bash
http://localhost:5173
```

# 🌐 Backend URL

```bash
http://localhost:5000
```

---

# 📸 Screenshots

## Dashboard

* Employee Analytics
* Charts
* Dark Mode
* Employee Table

## Authentication

* Login Page
* Register Page

---

# 📦 Important Packages Used

```bash
npm install react-router-dom axios react-icons react-toastify framer-motion recharts
```

```bash
npm install xlsx file-saver jspdf jspdf-autotable
```

---

# 🔒 Authentication Flow

1. User Registers
2. Password gets encrypted using bcrypt
3. JWT Token generated after login
4. Token stored in localStorage
5. Protected routes verify authentication

---

# 📈 Future Improvements

* Employee Profile Image Upload
* Attendance Management
* Payroll System
* Admin Roles
* Employee Leave System
* Email Notifications
* Cloud Deployment
* AI Analytics

---

# 🚀 Deployment

## Frontend

* Vercel
* Netlify

## Backend

* Render
* Railway
* Cyclic

## Database

* MongoDB Atlas

---

# 👨‍💻 Author

Purushottam Singh

---

# ⭐ If You Like This Project

Give this repository a star ⭐ on GitHub.
