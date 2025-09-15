import React from 'react'
import { useForm } from 'react-hook-form'

function FormDemo2() {
    const {register , handleSubmit , formState:{errors} }= useForm()

    const submitHandler = (data)=>{
        console.log(data);
        
    }

    const validationSchema ={
             
        nameValidator :{
            required :{
                value :true , 
                message:"name is required"
            },
            minLength :{
                value : 5,
                message:"name must be 5 above"
            },
            maxLength : {
                value : 20,
                message : "name must 20 "
            }
        },
        emailValidator : {
            required : {
                value : true,
                message : "email is required"
            },
            minLength :{
                value : 7,
                message:"email input shoud be 7 charecter more"
            },
            maxLength : {
                value:20,
                message:"email input shoud less than 20"
            }
        },
        ageValidator : {
            required : {
                value : true ,
                message : "age is required"
            },
            min :{
                value : 18 ,
                message : "age must be 18 or greater"
            },
            max  :{
                value:60,
                message:"age must be less than 60"
            }
        }
    }

  return (
    <div>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name :- </label>
                <input type="text" {...register("name", validationSchema.nameValidator)} />
                {errors.name?.message}
            </div>
            <div>
                <label htmlFor="">Email :- </label>
                <input type="text" {...register("email",validationSchema.emailValidator)}  />
                {errors.email?.message}
            </div>
            <div>
                <label htmlFor="">Age :- </label>
                <input type="number" {...register("age" , validationSchema.ageValidator)}/>
                {errors.age?.message}

            </div>
            <input type="submit"  />
        </form>
    </div>
  )
}

export default FormDemo2