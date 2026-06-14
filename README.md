# ⚽ Ballon d'Or Voting System Frontend

## 📖 Project Overview

The Ballon d'Or Voting System is a full-stack web application developed for the Special Topics in Computer Science course.

The platform allows football fans to browse award nominees, view player profiles, vote for their favorite players, and follow voting results in real time.

The frontend application communicates with the backend API to manage authentication, nominee data, voting operations, and results visualization.

---

## 👤 User Requirements

Users can:

- Register a new account
- Login securely
- Browse award categories
- View nominee information
- Access nominee profile pages
- Cast votes
- View live voting results

Administrators can:

- Login as admin
- Manage nominees
- Manage voting data
- Monitor voting results

---

## ✨ Features

- User Authentication (Login / Signup)
- Role-Based Access Control
- Protected Routes
- Dynamic Nominee Pages
- Nominee Profile Pages
- Voting System
- Results Dashboard
- Admin Dashboard
- API Integration
- Responsive Design

---

## 🛠 Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```bash
src/
│
├── assets/
├── components/
├── pages/
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the project root:

```env
VITE_API_URL=YOUR_BACKEND_URL
```

### 4. Run Development Server

```bash
npm run dev
```

---

## 🔗 API Connection

The frontend communicates with the backend API using environment variables.

Example:

```env
VITE_API_URL=YOUR_BACKEND_URL
```

The application accesses the API URL using:

```javascript
import.meta.env.VITE_API_URL;
```

---

## 🌐 Deployment

Frontend Deployment URL:

```text
Will be added after Railway deployment
```

Backend Deployment URL:

```text
Will be added after Railway deployment
```

---

## 🌿 Git Branches

Main feature branches used during development:

- feature/landing-page
- feature/home-page
- feature/categories-page
- feature/auth-pages
- feature/nominees-pages
- feature/nominee-profile
- feature/results-page
- feature/admin-dashboard
- feature/responsive-styling
- feature/frontend-admin-crud

---

## 👨‍💻 Author

Raheeq Mheidat

Special Topics in Computer Science Project
