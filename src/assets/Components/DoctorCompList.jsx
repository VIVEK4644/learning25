import React from 'react'

function DoctorCompList(props) {
    //..doctors ...getDoctorData   ...deleteDoctorData
  return (
    <div>
        <h1>DoctorCompList</h1>

        {
            props.doctors.length == 0  && <h1>Doctor Data Not found</h1>
        }
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>specialization</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.doctors.map((doc)=>{
                        return <tr>
                            <td>{doc.id}</td>
                            <td>{doc.name}</td>
                            <td>{doc.age}</td>
                            <td>{doc.gender}</td>
                            <td>{doc.phone}</td>
                            <td>{doc.email}</td>
                            <td>{doc.specialization}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>{props.getDoctorData(doc.id)}}>info</button>
                                <button style={{margin:"4px"}} className='btn btn-danger' onClick={()=>{props.deleteDoctorData(doc.id)}}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default DoctorCompList