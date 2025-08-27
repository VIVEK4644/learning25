import React from 'react'

function MapDemo3() {
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
            age:42,
            gender:"female",
            salary:35000
        },
        {
            id:104,
            name:"Bharat",
            age:46,
            gender:"male",
            salary:40000
        }
    ]

  return (
    <div>
        <h1 align="center">MapDemo 3 </h1>

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
                        return <tr style={{backgroundColor : user.gender =="female" && "pink"}}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            {/* <td style={{color: user.age>=25 ? "red":"white"}}>{user.age}</td> */}
                            {/* <td style={{color: user.age>=25 && "red"}}>{user.age}</td> */}
                            <td style={{color: user.age>=25 && "red"}}>{user.age}
                                    {user.age>=40 && <span >sr st</span>}
                            </td>

                            {/* <td style={{backgroundColor:user.gender == "female" ? "pink": "blue"}}>{user.gender}</td> */}
                            <td style={{backgroundColor:user.gender == "female" && "pink"}}>{user.gender}</td>
                            {/* <td style={{backgroundColor: user.salary>=30000 ? "yellow" : "Blue"}}>{user.salary}</td> */}
                            <td style={{backgroundColor: user.salary>=30000 && "yellow"}}>{user.salary}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
    </div>

  )
}

export default MapDemo3