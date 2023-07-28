// StudentItem.js
import React, { useState } from "react";

function StudentItem({ student, editStudent, deleteStudent }) {
  const [editing, setEditing] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState({ ...student });

  const handleEdit = () => {
    if (editing) {
      editStudent(student.id, updatedStudent);
    }
    setEditing(!editing);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleDelete = () => {
    deleteStudent(student.id);
  };

  return (
    <div><br/>
      {editing ? (
        <>
		<table><tr><td>
          Name: </td><td><input
            type="text"
            name="Name"
            value={updatedStudent.Name}
			required
            onChange={handleChange}/></td></tr><tr><td>
          Email: </td><td><input
            type="email"
            name="Email"
			required
            value={updatedStudent.Email}
            onChange={handleChange}/>
          </td></tr><tr><td>RollNumber: </td><td><input
            type="number"
            name="RollNumber"
			required
            value={updatedStudent.RollNumber}
            onChange={handleChange}/></td></tr></table>
        </>
      ) : (
        <>
          <table>
		  <tr><td>Name: </td><td>{student.Name}</td></tr>
		  <tr><td>Email: </td><td> {student.Email}</td></tr>
          <tr><td>RollNumber: </td><td>{student.RollNumber}</td></tr>
		  </table>
        </>
      )}
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default StudentItem;
