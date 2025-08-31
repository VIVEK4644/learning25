import React, { useState } from 'react'

function UseStateDemo2() {
    const [stoploading, setStoploading] = useState(true)
    const stoploadingg = ()=>{
        console.log("Hello");
        setStoploading(false)
        
    }   
  return (
    <div style={{textAlign:'center'}}>
        <h1>UseStateDemo2</h1>
        {
            stoploading == true &&  <h2>Loading......</h2>
        }
        <button onClick={stoploadingg}>Stoploading</button>
    </div>
  )
}

export default UseStateDemo2