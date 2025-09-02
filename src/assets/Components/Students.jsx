import React, { useState } from 'react'
import StudentList from './StudentList';

function Students() {
    const [students, setStudents] = useState([
    { id: 1, name: "ram", age: 23 },
    { id: 2, name: "shyam", age: 24 },
    { id: 3, name: "kunal", age: 25 },
  ]);

  const getStudentData = (id) =>{

    

    var foundStudent=students.find((stu) => stu.id == id);
    console.log("found student = ",foundStudent)

    // alert("id : "+id);
    alert("id : " +foundStudent.name);
    //  alert("Name = " +foundStudent.name); 
  }

   const deleteStudent = (id)=>{

    
        setStudents(students.filter((stu) => stu.id != id));

        alert("id :- "+id );
        
    }
   

  return (
    <div style={{textAlign:'center'}}>
        <h1>Students</h1>
        <StudentList student = {students} getStudentData={getStudentData} deleteStudent={deleteStudent} ></StudentList>
        
    </div>
  )
}

export default Students