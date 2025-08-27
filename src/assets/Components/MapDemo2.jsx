import React from 'react'

function MapDemo2() {
    var users = [
        {
            id:101,
            name:"ram",
            age:23,
            gender:"male",
            salary:25000
        },
        {
            id:102,
            name:"seeta",
            age:22,
            gender:"female",
            salary:24000
        },
        {
            id:103,
            name:"janki",
            age:25,
            gender:"female",
            salary:35000
        },
        {
            id:104,
            name:"Bharat",
            age:27,
            gender:"male",
            salary:40000
        }
    ]



  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{textAlign:'center'}}>Map Demo 2</h1>

        {/* {
            users.map((user)=>
                 <ul type='none'>
                    <li>id :- {user.id}</li>
                    <li>Name :- {user.name}</li>
                    <li>Age :- {user.age}</li>
                    <li>gender :- {user.gender}</li>
                    <li>Salary :- {user.salary}</li>
                </ul>
            )    
        } */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.salary}</td>
                        </tr>
                    }
                    )
                }
            </tbody>

        </table>

    </div>
  )
}

export default MapDemo2