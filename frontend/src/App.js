import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {

  return (
    <div>

      <h1 className="title">Student Management System</h1>

      <div className="student-container">

        <div className="card">
          <AddStudent />
        </div>

        <div className="card">
          <StudentList />
        </div>

      </div>

    </div>
  );
}

export default App;