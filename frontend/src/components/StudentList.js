import React, { useEffect, useState } from "react";
import axios from "axios";
import EditStudent from "./EditStudent";
import "../App.css";

function StudentList() {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  const fetchStudents = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);

      setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.course.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  if (loading) {
    return <h3 className="loading">Loading students...</h3>;
  }

  return (
    <div className="student-container">

      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {currentStudents.map((student) => (
            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => setEditingStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

      {/* Pagination Controls */}

      <div className="pagination">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

      {editingStudent && (
        <EditStudent
          student={editingStudent}
          refreshStudents={fetchStudents}
          cancelEdit={() => setEditingStudent(null)}
        />
      )}

    </div>
  );
}

export default StudentList;