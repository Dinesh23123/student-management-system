import React, { useState } from "react";
import axios from "axios";

function AddStudent({ refreshStudents }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation
    if (!name || !email || !course) {
      alert("All fields are required");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/students",
        {
          name,
          email,
          course
        }
      );

      if (response.status === 200 || response.status === 201) {

        alert("Student added successfully");

        setName("");
        setEmail("");
        setCourse("");

        if (refreshStudents) {
          refreshStudents();
        }

      }

    } catch (error) {

      if (error.response) {
        alert(error.response.data.error || "Server error");
      } else {
        alert("Cannot connect to server");
      }

      console.error(error);

    }

  };

  return (
    <div className="add-student">

      <h2>Add Student</h2>

      <form className="add-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;