import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { data } from 'react-router';

export const FormDemo1 = () => {
  const [output, setoutput] = useState("")
  const [isSubmitHandler, setIsSubmitHandler] = useState(false)
const [color, SetColor] = useState("black")

  const { register, handleSubmit } = useForm()


  const SubmitHandler = (data) => {
    console.log(data);
    setoutput(data)
    SetColor(data.color)
    setIsSubmitHandler(true)
  }



  return (
    <div>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div>
          <label >First Name : </label>
          <input type="text" {...register("firstname")} />
        </div><br />
        <div>
          <label >Last Name : </label>
          <input type="text" {...register("lastname")} />
        </div><br />
        <div>
          <label >Age : </label>
          <input type="text" {...register("age")} />
        </div><br />

        <div>
          <label >Gender : </label>
          <input type="radio" {...register("Gender")} value="Male" /> Male &nbsp;&nbsp;&nbsp;
          <input type="radio" {...register("Gender")} value="Female" /> Female
        </div><br />
        <div>
          <label >Hobbies : </label> &nbsp;&nbsp;&nbsp;
          <input type="checkbox" {...register("Hobbies")} value="Chess" />&nbsp; Chess &nbsp;&nbsp;&nbsp;
          <input type="checkbox" {...register("Hobbies")} value="Ckricket" />&nbsp; Ckricket &nbsp;&nbsp;&nbsp;
          <input type="checkbox" {...register("Hobbies")} value="football" /> &nbsp;football &nbsp;&nbsp;&nbsp;

        </div><br />
        <div>
          <label> Country : </label>
          <select name="" id="" {...register("Country")}>
            <option value="">None</option>
            <option value="India">India</option>
            <option value="Usa">Usa</option>
            <option value="Chaina">Chaina</option>
          </select>
        </div><br />
        <div><label>color : </label> &nbsp;
          <input type="color" name="" id="" {...register("color")} />
        </div>
        <input type="submit" name="" id="" />
      </form>
      {
        isSubmitHandler == true && <div style={{color:color}}>
          <h1>OutPut</h1>
          <h2>First Name : {output.firstname}</h2>
          <h2>Last Name : {output.lastname}</h2>
          <h2>Age : {output.age}</h2>
          <h2>Gender : {output.Gender}</h2>
          <h2>Hobbies :-</h2>
          {
                 output.Hobbies.map((hobby)=>{
            return (
              <h3>&nbsp;&nbsp;{hobby}</h3>
            )
            
          })
            
          }
          
          <h2>Country : {output.Country}</h2>

        </div>
      }
    </div>
  )
}
