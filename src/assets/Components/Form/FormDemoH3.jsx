import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemoH3 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log("Errors :- ", errors);

  const submitHandler = (data) => {
    console.log(data);
  }
  const validationSchema = {
    nameValidation: {
      required: {
        value: true,
        message: "name is required"
      },
      minLength: {
        value: 5,
        message: "name must be input 5"
      },
      maxLength: {
        value: 20,
        message: "name must be input less than 20"
      }
    },
    emailValidation: {
      required: {
        value: true,
        message: "email is required"
      },
      minLength: {
        value: 7,
        message: "email must be input 7"
      },
      maxLength: {
        value: 25,
        message: "email must be input less than 25"
      }
    },
    contactValidation: {
      required: {
        value: true,
        message: "Contact number is required"
      },
      min: {
        value: 1111111111,
        message: "contact number input 10 digit"
      },
      max: {
        value: 9999999999,
        message: "contact number input 10 digit"
      }
    },
    usernameValidation: {
      required: {
        value: true,
        message: "username is required"
      },
      minLength: {
        value: 8,
        message: "usename must be input 8 "
      },
      maxLength: {
        value: 12,
        message: "username must be input less than 12"
      }
    },
    passwordValidation: {
      required: {
        value: true,
        message: "password is required"
      },
      minLength: {
        value: 8,
        message: "password must be input 8 character"
      },
      maxLength: {
        value: "12",
        message: "password input less than 12 character"
      }
    }
  }

  return (
    <div>
      <h1>FormDemoH3</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="">Name :- </label>
            <input type="text" {...register("name", validationSchema.nameValidation)} />
            {errors.name && errors.name.message}
          </div><br />
          <div>
            <label htmlFor="">Email :- </label>
            <input type="email" {...register("email", validationSchema.emailValidation)} />
            {errors.email?.message}
          </div><br />
          <div>
            <label htmlFor="">Contact :- </label>
            <input type="number" {...register("contact", validationSchema.contactValidation)} />
            {errors.contact?.message}

          </div><br />
          <div>
            <label htmlFor="">UserName :- </label>
            <input type="text" {...register("username", validationSchema.usernameValidation)} />
            {errors.username?.message}

          </div><br />
          <div>
            <label htmlFor="">password :- </label>
            <input type="password" {...register("password", validationSchema.passwordValidation)} />
            {errors.password?.message}
          </div><br />
          <div>
            <label htmlFor="">Country :- </label>  &nbsp;
            <select  {...register("country")}>
              <option value="">none</option>
              <option value="india">india</option>
              <option value="usa">usa</option>
              <option value="uk">uk</option>
            </select>
            {errors.country?.message}

          </div><br /><br />

          <input type="submit" name="" id="" />
        </form>
      </div>
    </div>
  )
}
