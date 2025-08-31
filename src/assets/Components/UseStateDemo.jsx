import React, { useState } from 'react'

function UseStateDemo() {
  // var count = 0 ;
  const [count, setCount] = useState(0)

  const increace = ()=>{

      console.log("Count :- " + count);
      // count++;
      setCount(count+1)
  }
  return (
    <div style={{textAlign:'center'}}>

        <h1>UseStateDemo</h1><br />
        <h3>{count}</h3>
        <button onClick={increace}>increace</button>
    </div>
  )
}

export default UseStateDemo



























