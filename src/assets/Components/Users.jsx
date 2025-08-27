import React from 'react'
import { UserList } from './UserList'


export const Users = (props) => {
  var title = "Hello How Are ?"
   var users = [
    {
      id:Math.floor(Math.random()*10000),
      name:"ram",
      age:23
    },
    {
      id:Math.floor(Math.random()*10000),
      name:"shyam",
      age:24
    },
    {
      id:Math.floor(Math.random()*10000),
      name:"parth",
      age:25
    }
  ]
    
  return (
    <div>

        {/* <h1 style={{textAlign:"center", backgroundColor:"red"}}>Jaye SHree RSM</h1> */}
        <UserList Apptitle ={title}   AppNewTitle = {users} ></UserList> 
        
    </div>
 )
}
