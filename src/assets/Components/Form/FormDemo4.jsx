import React from 'react'
import { useForm } from 'react-hook-form'
import { MyButton } from '../common/MyButton'

export const FormDemo4 = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "all",defaultValues:{name: "Vivek Kumar", contact:"9429337729"} })   //onChange  = input after clear , onTouched , onBlur = without any input ,onTouched and onBlur both condition same
    const submitHandler = (data) => {                         
        console.log(data);
    }

    const formdemo=()=>{
        alert(".....Form")
    }
    const validationSchema = {
        nameValidatior: {
            required: {
                value: true,
                message: "name is required *"
            },
            minLength: {
                value: 5,
                message: "name must be input character 5 or greater"
            },
            maxLength: {
                value: 20,
                message: "name must be input character 20 or less than"
            }
        },
        genderValidation: {
            required: {
                value: true,
                message: "gender is required * "
            }
        },
        numberValidation: {
            required: {
                value: true,
                message: "Contact is required * "
            },
            min: {
                value: 6,
                message: "number input must be digit start 6"
            },
            max: {
                value: 9999999999,
                message: "only input 10 digit number "
            },
            pattern: {
                value: /[6-9]{1}[0-9]{9}/,
                message: "contact invalida"
            }
        }
    }
    return (
        <div>
            <h1>FormDemo4</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="">Name :- </label>
                    <input type="text" {...register("name", validationSchema.nameValidatior)} />
                    {errors.name?.message}
                </div>
                <div>
                    <label htmlFor="">Gender :- </label>&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="male" {...register("gender", validationSchema.genderValidation)} /> Male &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="female"  {...register("gender", validationSchema.genderValidation)} /> Female  &nbsp;&nbsp;&nbsp;
                    {errors.gender?.message}
                </div>
                <div>
                    <label htmlFor="">Mobile No :- </label>
                    <input type="number" {...register("contact", validationSchema.numberValidation)} />
                    {errors.contact?.message}
                </div>
                <input type="submit" />
            </form>

        <MyButton funcName={formdemo} name="home"></MyButton>

        </div>
    )
}
