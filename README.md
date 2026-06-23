# ⚽ Ballon d'Or Voting System Frontend

## 📖 Project Overview

The Ballon d'Or Voting System is a full-stack web application developed for the Special Topics in Computer Science course.

The platform allows users to browse Ballon d'Or award categories, view nominee details, register and log in, vote for their favorite nominees, and view voting results. The frontend is built with React and communicates with a deployed Express.js backend connected to a Railway PostgreSQL database.

---

## 🌐 Live Deployment

### Frontend URL

```text
https://ballon-dor-frontend-production.up.railway.app
```

### Backend API URL

```text
https://ballon-dor-backend-production.up.railway.app
```

### Example API Endpoint

```text
https://ballon-dor-backend-production.up.railway.app/api/nominees
```

---

## 👤 User Requirements

Users can:

- Register a new account
- Log in to the system
- Browse Ballon d'Or categories
- View nominees by category
- Open nominee profile pages
- Vote for nominees
- View voting results

Administrators can:

- Log in as admin
- Access the admin dashboard
- Add nominees
- Update nominees
- Delete nominees
- Monitor voting results

---

## ✨ Features

- Landing Page
- Home Page
- User Authentication
- Role-Based Access Control
- Protected Routes
- Award Categories Page
- Dynamic Nominee Pages
- Nominee Profile Pages
- Voting System
- Results Page
- Admin Dashboard
- API Integration with Backend
- External Football Club Data Integration
- Responsive User Interface

---

## 🛠 Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap
- CSS3
- JavaScript ES6
- Railway
- Git & GitHub

---

## 📂 Project Structure

```bash
ballon-dor-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Auth.jsx
│   │   ├── Categories.jsx
│   │   ├── KopaNominees.jsx
│   │   ├── Landing.jsx
│   │   ├── MenNominees.jsx
│   │   ├── NomineeProfile.jsx
│   │   ├── Results.jsx
│   │   ├── WomenNominees.jsx
│   │   └── YachineNominees.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .env
├── .env.sample
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Clone Repository

```bash
git clone <repository-url>
cd ballon-dor-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the project root:

```env
VITE_API_URL=https://ballon-dor-backend-production.up.railway.app
```

For local development, this can be changed to:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Run Development Server

```bash
npm run dev
```

---

## 🔗 API Connection

The frontend communicates with the backend API using Axios.

Production backend URL:

```text
https://ballon-dor-backend-production.up.railway.app
```

Main API endpoints used by the frontend:

| Method | Endpoint               | Purpose                                    |
| ------ | ---------------------- | ------------------------------------------ |
| POST   | /api/auth/register     | Register a new user                        |
| POST   | /api/auth/login        | Login user or admin                        |
| GET    | /api/nominees          | Retrieve all nominees                      |
| GET    | /api/nominees/:id      | Retrieve nominee profile details           |
| POST   | /api/nominees/:id/vote | Submit a vote                              |
| GET    | /api/clubs             | Retrieve football club data for About page |

---

## 🗄 Backend and Database

The frontend is connected to a deployed backend API built with Node.js and Express.js.

The backend is connected to a Railway PostgreSQL database containing:

- users
- categories
- nominees
- votes

---

## 🚀 Deployment

The frontend is deployed on Railway.

```text
Frontend:
https://ballon-dor-frontend-production.up.railway.app
```

The backend is also deployed on Railway.

```text
Backend:
https://ballon-dor-backend-production.up.railway.app
```

The database is hosted using Railway PostgreSQL.

---

## 🌿 Git Branches

Main branches used during development:

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
- update-backend-readme
- update-frontend-readme

---

## ✅ Final Deployment Status

The final deployed system supports:

- User registration
- User login
- Admin login
- Browsing nominees
- Viewing nominee profiles
- Voting
- Viewing results
- Admin nominee management
- Backend API communication
- Railway PostgreSQL database connection

---

## 👨‍💻 Author

Raheeq Mheidat

Special Topics in Computer Science
Full Stack Web Application Project

ra7eeq mheidat
