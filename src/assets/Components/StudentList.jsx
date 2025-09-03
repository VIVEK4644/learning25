import React from 'react'

function StudentList(props) {
  return (
    // Student....students
    <div>

        <h1>StudentList</h1>

        {
            props.student.length==0 && <h1>No student found..</h1>
        }
        

        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    props.student.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>{props.getStudentData(stu.id)}}>Info</button>
                                <button style={{margin:"2px"}} className='btn btn-danger' onClick={()=>{props.deleteStudent(stu.id)}}>Delete</button>
                           
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentList