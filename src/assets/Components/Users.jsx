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

  const btntst = (x)=>{
    alert("Hello React Js...."+x)
  }
    
  return (
    <div>

        {/* <h1 style={{textAlign:"center", backgroundColor:"red"}}>Jaye SHree RSM</h1> */}
        {/* <button onClick={btntst}>Test</button> */}
        {/* <button onClick={btntst(100)}>Test 2</button> mistake */}
        {/* <button onClick={()=>{btntst(100)}}>Test 2</button> */}
        <UserList Apptitle={title}   AppNewTitle={users} newbtn={btntst} ></UserList>




        
    </div>
 )
}
