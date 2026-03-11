const pool = require("../db");

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Add student
exports.addStudent = async (req, res) => {
  const { name, email, course } = req.body;

  try {

    const result = await pool.query(
      "INSERT INTO students (name,email,course) VALUES ($1,$2,$3) RETURNING *",
      [name, email, course]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {

    if (error.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }

    console.error(error);
    res.status(500).json({ error: "Server error" });

  }
};

// Update student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  try {
    const result = await pool.query(
      "UPDATE students SET name=$1,email=$2,course=$3 WHERE id=$4 RETURNING *",
      [name, email, course, id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM students WHERE id=$1", [id]);
    res.json({ message: "Student deleted" });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
// Get single student
exports.getStudentById = async (req, res) => {

  try {

    const { id } = req.params;

    const student = await pool.query(
      "SELECT * FROM students WHERE id=$1",
      [id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json(student.rows[0]);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Failed to fetch student"
    });

  }

};