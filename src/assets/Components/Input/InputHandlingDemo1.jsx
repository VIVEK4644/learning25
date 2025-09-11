import React, { use, useState } from 'react'

function InputHandlingDemo1() {
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [submit, setsubmit] = useState(false)
  const [color, setColor] = useState("black")


  const nameHandler = (event) => {

    console.log(event.target.value);
    setname(event.target.value)
  }

  const emailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const CityHandler = (event) => {

    console.log(event.target.value);
    setCity(event.target.value)

  }
  const submitHandler = () => {
    // alert(`Name :- ${name} \n Email :- ${email} \n City :- ${city}`);
    console.log(`Name :- ${name} \n Email :- ${email} \n City :- ${city}`);
    setsubmit(true);

  }



  return (
    <div>
      <h1>InputHandlingDemo1</h1>
      <label>Name :  <input type="text" placeholder='name' onChange={(event) => { nameHandler(event) }} />
        {/* {name} */}
      </label><br />
      <label>Email : <input type="email" placeholder='Email' onChange={(event) => { emailHandler(event) }} />
        {/* {email} */}
      </label><br />
      <label>City :  <input type="text" placeholder='City' onChange={(event) => { CityHandler(event) }} />
        {/* {city} */}
      </label><br />
      <br />
      <div>
        <label>CHoose color : <input type="color" onChange={()=>{setColor(event.target.value)}} /></label><br /><br />
      </div>

      <button onClick={submitHandler} >Submit</button>
      <div>
          {
              submit == true && <div style={{color:color}}>
              <h1>OutPut</h1>
              <h2>Name : {name}</h2>
              <h3>Email :- {email}</h3>
              <h4>City :- {city}</h4>
            </div>
            
          }
      </div>
    </div>
  )
}

export default InputHandlingDemo1