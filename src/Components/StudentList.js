// StudentList.js
import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, editStudent, deleteStudent }) {
  return (
    <div>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          editStudent={editStudent}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;
