import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import '../../css/Form/formdyn.css'


export const DynamicForm2 = () => {
  const { register, handleSubmit, control } = useForm({ defaultValues: { person: [{ name: "", age: "", doss: "" }] } })
  const { fields, append, remove } = useFieldArray({ control, name: "person" })
  const [output, setoutput] = useState("")
  const submitHandler = (data) => {
    console.log(data);
    setoutput(data.person)
  }
  return (
    <div>
      <h1>DynamicForm2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {
          fields.map((filed, index) => {
            return <div>
              <>
                <label htmlFor="">Name : </label>
                <input type="text" {...register(`person.${index}.name`)} />
              </>
              <>
                <label htmlFor="">Age : </label>
                <input type="text" {...register(`person.${index}.age`)} />
              </>
              <>
                <label htmlFor="">Doss : </label>
                <input type="text" {...register(`person.${index}.doss`)} />
              </>

              <>
                <button onClick={() => { append([{ name: "", age: "", doss: "" }]) }}>Add New</button>
                <button onClick={() => { remove([{ name: "", age: "", doss: "" }]) }}>remove</button>
              </>
            </div>
          })
        }
        <div>
          <input type="submit" />
        </div>
      </form>

      <div>
        <h1>Out Put</h1>
        {
          output && <table border="2px" align='center'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Doss</th>
              </tr>
            </thead>
            <tbody>
              {
                output.map((filed)=>{
                  return <tr>
                    <td>{filed.name}</td>
                    <td>{filed.age}</td>
                    <td>{filed.doss}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

