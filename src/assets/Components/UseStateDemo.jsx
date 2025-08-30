import React, { useState } from 'react'

function UseStateDemo() {
  // var count = 0;
const[count,setCount]=useState(0)

  
  const increacount = ()=>{
    // count++;
    
     setCount(count+1)  
    console.log("Count :-" + count);
  }

  return (
      <div style={{textAlign:"center"}}>
        <h1>useStateDemo</h1>
        <h3>{count}</h3>
        <button onClick={increacount}>increase</button>
     </div>
  )
}

export default UseStateDemo