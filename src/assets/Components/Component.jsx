import React from 'react'

export const Component = () => {
    
    var name = "Royal techonosoft...!"
  var age = "20"
  let isActive = true, 
   user = {
    name : "Dev",
    age : "22"
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Hello React....!</h1>
       <h1 style={{color:"blue"}}>Name :- {name}</h1>
       <h1>Age :-  {age}</h1>
       <h1>Active :-  {isActive == true ? "Active" : "Not Active"}</h1>
       <h1>Name :- {user.name}</h1>
       <h1>Name :- {user.age}</h1>
    </div>
  )
}
