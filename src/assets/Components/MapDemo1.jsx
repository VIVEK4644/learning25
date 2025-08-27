import React from 'react'

function MapDemo1() {
     
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
       <div>
        <h1>Map Demo 1</h1>
        {/* {users[0].name}
        {users[0].age} */}

         {/* <ul>
            <li>id : - {users[0].id}</li>
            <li>Name : - {users[0].name}</li>
            <li>age : - {users[0].age}</li>
            <li>salary : - {users[0].salary}</li>
        </ul> */}
        {
            users.map((user) =>{
                 <ul>
                     <li>id : - {user.id}</li>
                     <li>Name : - {user.name}</li>
                     <li>age : - {user.age}</li>
                     <li>gender : - {user.gender}</li>
                     <li>salary : - {user.salary}</li>
                </ul>

                
            })
        }
       
       
       
       
       </div>
  )
}

export default MapDemo1