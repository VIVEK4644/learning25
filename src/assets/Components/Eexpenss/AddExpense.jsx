import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddExpense = (props) => {
    const {register,handleSubmit,reset} = useForm()
    const submiHandler =(data)=>{
        console.log("AddExpense:- " , data); 
        props.appendexpensess(data)
    }
    const [categorie, setcategorie] = useState(["fule","medical","groc","fashion"])
    const [expensemode, setExpensemode] = useState(["cash","card","upi"])
  return (
    <div>
        <h1>AddExpense</h1>
        <form onSubmit={handleSubmit(submiHandler)}>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="">Amount:-</label>
                <input type="text" {...register("amount")} />
            </div>
            <div>
                <label htmlFor="">Categroes :-</label>
                <select {...register("categorie")}>
                    <option value="">--select--</option>
                    {categorie.map((cat,i)=>{
                        return <option key={i} value={cat}>{cat}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="">Expenss Mode :-</label>
                <select {...register("mode")}>
                    <option value="">--select--</option>
                    {expensemode.map((mod,i)=>{
                        return <option key={i} value={mod}>{mod}</option>
                    })}
                </select>
            </div>
            <div>
                <input type="submit"  />
            </div>
        </form>
                <button onClick={()=>{reset()}}>rest</button>

    </div>
  )
}
