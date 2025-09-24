import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const reffreco = ["royal","mihir","jagrut awwaaz"]

  const submitHandler = (data) => {
    console.log(data);
  }
  const ValidatorSchema = {
      contactValidation:{
        required:{
            value:true,
            message:"contact is required"
        },
        pattern:{
          value:/[6-9]{1}[0-9]{9}/,
          message:"invalid contact"
        } 
      },
      nameValidation:{
        required:{
          value:true,
          message:"name is required"
        },
        minLength:{
          value:5,
          message:"name must be input greater 5"
        },
        maxLength:{
          value:20,
          message:"name must be input less than 20"
        }
      },
      refferValidation:{
        required:{
          value:true,
          message:"reffer code is required"
        },
        // validate:(param)=>{
        //     // console.log("param:- ",param);
        //     return param ==  "royal" || "ref code must be royal"
            
        // }
        validate:(param)=>{
            // console.log("param:- ",param);
            return  reffreco.includes(param) || "ref code must be royal"
            
        }
      },
      hobbiesvalidation:{
        required:{
          value:true,
          message:"hobbies are required"
        },
        validate :(params)=>{

          return params?.length> 1 || "min 2 hobbies are required *"
        }
       
      }
  }

  return (
    <div>
      <h1>FormDemo3(pattetrn , validate)</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="">Name :- </label>
            <input type="text" {...register("name" ,ValidatorSchema.nameValidation)}  />
            {errors.name?.message}
          </div><br />
          <div>
            <label >contact:-</label>
            <input type="text" {...register("contact" , ValidatorSchema.contactValidation )} />
            {errors.contact?.message}
          </div><br />
          <div>
            <label htmlFor="">Reffer Code :</label>
            <input type="text" {...register("reffercode", ValidatorSchema.refferValidation)} />
            {errors.reffercode?.message}
          </div>
          <div>
            <label htmlFor="">Hobbies :- </label>
            reels : <input type="checkbox" {...register("Hobbies" ,ValidatorSchema.hobbiesvalidation)} value="reels" />
            reading : <input type="checkbox" {...register("Hobbies",ValidatorSchema.hobbiesvalidation)} value="reading" />
            music : <input type="checkbox" {...register("Hobbies",ValidatorSchema.hobbiesvalidation)} value="music" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {errors.Hobbies?.message}
          </div>
          <input type="submit"  />
        </form>
      </div>
    </div>
  )
}
