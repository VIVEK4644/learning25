import React from 'react'

function EmployeeList(props) {
//employees..  getEmployeesData... ....deleteGetEmployeesData
  return (
    <div style={{textAlign:'center'}}>
        <h1>EmployeeList</h1>
        {
            props.employees.length == 0 && <h1>Employee Data Not Found</h1>
        }
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>Gender</th>
                    <th>post</th>
                    <th>salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((Emplo)=>{
                        return <tr>
                            <td>{Emplo.id}</td>
                            <td>{Emplo.name}</td>
                            <td>{Emplo.Age}</td>
                            <td>{Emplo.gender}</td>
                            <td>{Emplo.post}</td>
                            <td>{Emplo.salary}</td>
                            <td>
                                    <button className='btn btn-info' onClick={()=>{props.getEmployeesData(Emplo.id)}} >info</button>
                                    <button style={{margin:"2px"}} className='btn btn-danger' onClick={()=>{props.deleteGetEmployeesData(Emplo.id)}} >Delete</button>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList