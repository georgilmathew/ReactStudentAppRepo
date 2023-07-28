import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({ id: "", Name: "", Email: "", RollNumber: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent(student);
    setStudent({ id: "", Name: "", Email: "", RollNumber: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <table><tr><td>
          Name: </td><td><input
        type="text"
        name="Name"
        value={student.Name}
        onChange={handleChange}
        placeholder="Name"
        required
      /></td></tr><tr><td>
          Email: </td><td>
      <input
        type="email"
        name="Email"
        value={student.Email}
        onChange={handleChange}
        placeholder="Email"
        required
      /></td></tr><tr><td>
          Roll Number: </td><td>
      <input
        type="number"
        name="RollNumber"
        value={student.RollNumber}
        onChange={handleChange}
        placeholder="Roll Number"
        required
      /></td></tr></table>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
