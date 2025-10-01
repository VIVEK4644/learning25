import React, { useState } from 'react'
import { AddExpense } from './AddExpense'
import { ListExpenss } from './ListExpenss'

export const Expenss = () => {
    const [expenses, setExpenses] = useState([localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []]);

    const appendexpenses = (exp)=>{
        console.log("Expens call",exp);

        setExpenses([...expenses,exp]);  
        // console.log(...expenses[0],exp); 
    }
    const storage = ()=>{
      localStorage.setItem("expenses",JSON.stringify(expenses))
      console.log("localStorage",JSON.parse(localStorage.getItem(expenses)));
    }
  return (
    <div>
        <h1>Expenss</h1>
        <AddExpense appendexpensess = {appendexpenses}></AddExpense>
        <button onClick={()=>{storage()}} className='btn btn-primary'>store</button>
        <ListExpenss expenses = {expenses}></ListExpenss>
    </div>
  )
}
