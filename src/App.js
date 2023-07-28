import React, { useState, useEffect } from 'react';
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';
import { getAllStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addStudentHandler = async (newStudent) => {
  try {
    const response = await addStudent(newStudent);
    setStudents([...students, response.data]);
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

const editStudentHandler = async (id, updatedStudent) => {
  try {
    await updateStudent(id, updatedStudent);
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, ...updatedStudent } : student
    );
    setStudents(updatedStudents);
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

const deleteStudentHandler = async (id) => {
  try {
    await deleteStudent(id);
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};

  return (
    <div>
      <h1>Student Management App</h1>
      <h2>Add Student</h2><StudentForm addStudent={addStudentHandler} /><br/><br/><br/>
      <h2>Student List</h2>
	  <StudentList
        students={students}
        editStudent={editStudentHandler}
        deleteStudent={deleteStudentHandler}
      />
    </div>
  );
}

export default App;
