# 🎓 Student Management System

A full-stack web application for managing student records.  
This project allows users to add, update, delete, and view student information through a simple user interface.

---

# 🚀 Features

- Add new students
- View student list
- Update student details
- Delete students
- Search students
- Pagination support
- REST API integration
- Full-stack architecture

---

# 🛠️ Tech Stack

## Frontend
- React
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL

## Version Control
- Git & GitHub

---

# 🏗️ Project Architecture

```
Frontend (React)
        ↓
REST API Requests (Axios)
        ↓
Backend (Node.js + Express)
        ↓
Database Queries (pg library)
        ↓
PostgreSQL Database
```

The React frontend sends HTTP requests to the Express backend.  
The backend processes these requests and interacts with the PostgreSQL database.

---

# 📂 Project Structure

```
student-management-system

backend
│
├── controllers
│   └── studentController.js
│
├── routes
│   └── studentRoutes.js
│
├── db.js
├── server.js
└── package.json

frontend
│
├── src
│   ├── components
│   │   ├── AddStudent.js
│   │   ├── EditStudent.js
│   │   └── StudentList.js
│   │
│   ├── App.js
│   └── index.js
│
├── public
└── package.json

README.md
.gitignore
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/student-management-system.git
```

Navigate to project folder:

```bash
cd student-management-system
```

---

# 2️⃣ Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=studentdb
```

Start backend server:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

Open new terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React app:

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🗄️ Database Setup

Create database in PostgreSQL:

```sql
CREATE DATABASE studentdb;
```

Create table:

```sql
CREATE TABLE students (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
course VARCHAR(100)
);
```

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|------|------|------|
GET | /students | Fetch all students |
POST | /students | Add new student |
PUT | /students/:id | Update student |
DELETE | /students/:id | Delete student |

---

# 📸 Screenshots

(Add screenshots of your UI here)

Example:

- Student List Page
- Add Student Form
- Edit Student Page

---

# 🔒 Environment Variables

Sensitive data such as database credentials are stored in `.env`.

`.env` is excluded from GitHub using `.gitignore`.

---

# 📈 Future Improvements

- Authentication system
- Role-based access control
- Backend pagination
- Docker containerization
- Cloud deployment

---

# 👨‍💻 Author

**Dinesh Sonawane**

GitHub: https://github.com/Dinesh23123

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.