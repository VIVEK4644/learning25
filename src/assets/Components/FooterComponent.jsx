import React from 'react'

export default function FooterComponent() {
  const footerStyle = {
    height:"150px",
    width:"auto",
    backgroundColor:"Black",
    color:"red",
    marginTop:"30px"
  }

  return (
    // <div style={{height:"150px", width:"auto",backgroundColor:"Black",color:"red",marginTop:"30px"}}>
    //     <h1>Footer  </h1>
    // </div>
    <div style={footerStyle}>
        <h1 style={{textAlign:"center"}}>Footer  </h1>
    </div>
  )
}
