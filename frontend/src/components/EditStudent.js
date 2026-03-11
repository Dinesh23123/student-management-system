import React, { useState } from "react";
import axios from "axios";

function EditStudent({ student, refreshStudents, cancelEdit }) {

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [course, setCourse] = useState(student.course);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/students/${student.id}`,
        { name, email, course }
      );

      alert("Student updated");

      refreshStudents();
      cancelEdit();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>

      <form onSubmit={handleUpdate}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Update</button>

        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>

      </form>
    </div>
  );
}

export default EditStudent;