import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import '../../css/Form/formdyn.css'



export const DynamicForm = () => {
  const {register,handleSubmit,control}= useForm({defaultValues:{passengers:[{name:"",age:"",gender:""}]}})
  const {fields,append,remove} = useFieldArray({control, name : "passengers"})
  const [output, setoutput] = useState("")
const submitHandler=(data)=>{
  console.log(data.passengers);
    setoutput(data.passengers)
  
}
  return (
    <div>
        <h1>DynamicForm</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((filed,index)=>{
                    return <div>
                        <>
                            <label htmlFor="">Name :- </label>
                            <input type="text" {...register(`passengers.${index}.name`)} />
                        </>
                        <>
                            <label htmlFor="">Age :- </label>
                            <input type="number" {...register(`passengers.${index}.age`)} />
                        </>
                        <>
                            <label htmlFor="">Gender:- </label>
                            <input type="text" {...register(`passengers.${index}.gender`)} />
                        </>
                        <>
                            <button onClick={()=>{append([{name:"",age:"",gender:""}])}}>Add Passnger</button>
                            <button onClick={()=>{remove([{name:"",age:"",gender:""}])}}>remove</button>
                        </>
                    </div>
                })
            }
            <div>
                <input type="submit" />
            </div>
        </form><br />
        <div>
            {
                output && <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        output.map((filed)=>{
                            return <tr>
                                <td>{filed.name}</td>
                                <td>{filed.age}</td>
                                <td>{filed.gender}</td>
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
