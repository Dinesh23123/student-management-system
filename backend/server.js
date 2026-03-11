require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware       this order is important, cors should be before express.json() to allow cross-origin requests to be parsed correctly
app.use(cors());              // Request → Middleware → Routes → Response  correct order of middleware and routes
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Student Management API Running");
});

// Test database route
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database connection error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});