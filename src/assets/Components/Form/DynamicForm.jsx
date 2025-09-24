import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const DynamicForm = () => {
  const {register,handleSubmit,control}= useForm({defaultValues:{passengers:[{name:"",age:"",gender:""}]}})
  const {fields,append,remove} = useFieldArray({control, name : "passengers"})
  const [output, setoutput] = useState("")
const submitHandler=(data)=>{
  console.log(data.passengers);
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
        </form>
    </div>
  )
}
