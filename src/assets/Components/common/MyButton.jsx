import React from 'react'

export const MyButton = (props) => {
  return (
    <div>
       
        <button onClick={()=>{props.funcName();}}>{ props.name || "test"}</button>
    </div>
  )
}
