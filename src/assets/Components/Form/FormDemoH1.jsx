import React from 'react'
import { useForm } from 'react-hook-form'

function FormDemoH1() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        fnameValidation: {
            required: {
                value: true,
                message: "first name is required"
            },
            minLength: {
                value: 5,
                message: "first name must be input 5 character"
            },
            maxLength: {
                value: 20,
                message: "first name is less than 20 character"
            }
        },
        lnameValidation: {
            required: {
                value: true,
                message: "last name is requred"
            },
            minLength: {
                value: 5,
                message: "last name must be input 5 character"
            },
            maxLength: {
                value: 20,
                message: "last name is less than 20 character"
            }
        },
        emailValidation: {
            required: {
                value: true,
                message: "email is requred"
            },
            minLength: {
                value: 5,
                message: "email must be input 5 character"
            },
            maxLength: {
                value: 20,
                message: "email is less than 20 character"
            }
        },
        passwordValidation: {
            required: {
                value: true,
                message: "password is required"
            },
            minLength: {
                value: 5,
                message: "email must be input 5 character"
            },
            maxLength: {
                value: 8,
                message: "password input 8 character"
            }
        },
        genderValidation: {
            required: {
                value: true,
                message: "gender is required"
            }
        },
        ageValidation: {
            required: {
                value: true,
                message: "age is required"
            },
            min: {
                value: 18,
                message: "age must be 18"
            },
            max: {
                value: 60,
                message: "age less 60"
            }
        }
    }



    return (
        <div>
            <h1>FormDemoH1</h1><br /><br />
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="">First Name :- </label>
                        <input type="text" placeholder='First Name' {...register("fname", validationSchema.fnameValidation)} />
                        {errors.fname?.message}
                    </div><br />
                    <div>
                        <label htmlFor="">Last Name :- </label>
                        <input type="text" placeholder='Last Name' {...register("lname", validationSchema.lnameValidation)} />
                        {errors.lname?.message}
                    </div><br />
                    <div>
                        <label htmlFor="">Email :- </label>
                        <input type="text" placeholder='Email' {...register("email", validationSchema.emailValidation)} />
                        {errors.email?.message}
                    </div><br />
                    <div>
                        <label htmlFor="">password :-</label>
                        <input type="text" placeholder='password' {...register("password", validationSchema.passwordValidation)} />
                        {errors.password?.message}
                    </div><br />
                    <div>
                        <label htmlFor="">Gender : </label>
                        &nbsp;&nbsp;<input type="radio" value="male" {...register("gender", validationSchema.genderValidation)} /> <label htmlFor="">Male</label>
                        &nbsp;&nbsp;<input type="radio" value="female" {...register("gender", validationSchema.genderValidation)} /> <label htmlFor="">Female</label>
                        &nbsp;&nbsp;&nbsp;{errors.gender?.message}
                    </div><br />
                    <div>
                        <label htmlFor="">Age :- </label>
                        <input type="number" placeholder='age' {...register("age", validationSchema.ageValidation)} />
                        {errors.age?.message}
                    </div><br />
                    <input type="submit" />
                </form>
           

        </div>
    )
}

export default FormDemoH1