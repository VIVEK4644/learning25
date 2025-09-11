import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function FormDemo2() {
  const [output, setoutput] = useState("")
 

  const { register, handleSubmit } = useForm()

  const submitHandler = (data) => {
    console.log(data.first);
    console.log(data.last);
    console.log(data.age);
    console.log(data.color);
    setoutput(data)

  }

  return (
    <div>
      <h1>FormDemo2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label >First Name :</label> <input type="text" {...register("first")} /> <br />

        <label >Last Name :</label> <input type="text" {...register("last")} /> <br />
        <label >Age :</label> <input type="number" {...register("age")} /> <br />
        <input type="color" {...register("color")} />
        <br /><br />

        <input type="submit" />

      </form>

      <div style={{color:output.color}}>
        <h1>First Name :-  {output.first}</h1>
        <h1>Last Name :-  {output.last}</h1>
        <h1>Age :-  {output.age}</h1>

      </div>

    </div>
  )
}

export default FormDemo2