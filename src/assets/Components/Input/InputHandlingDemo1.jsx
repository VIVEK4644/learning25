import React, { useState } from 'react'

function InputHandlingDemo1() {
const [name, setname] = useState("")
const [email, setEmail] = useState("")
const [city, setCity] = useState("")


const nameHandler = (event)=>{

    console.log(event.target.value); 
    setname(event.target.value)
  }

  const emailHandler = (event)=>{
    console.log(event.target.value);
    setEmail(event.target.value); 
  }

  const CityHandler = (event)=>{
    
    console.log(event.target.value);
    setCity(event.target.value)
    
  }



  return (
    <div>
        <h1>InputHandlingDemo1</h1>
        <label>Name :  <input type="text" placeholder='name' onChange={(event)=>{nameHandler(event)}} />{name}</label><br />
        <label>Email : <input type="email" placeholder='Email' onChange={(event)=>{emailHandler(event)}} />{email}</label><br />
        <label>City :  <input type="text" placeholder='City' onChange={(event)=>{CityHandler(event)}} />{city}</label>
    </div>
  )
}

export default InputHandlingDemo1