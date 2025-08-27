import React from 'react'
import "../css/header.css"
import { Users } from './Users'
import { UserList } from './UserList'

function HeaderComponent(props) {
    const heading1 = {
        // color : "Blue",
        // heaight : "80px",
        // backgroundColor : "red",
        // textalign : "ce",
        // align : "center"
        
    }


  return (


    <div className='header'>
        <h1>{props.title}</h1>
        <h1></h1>
           
    </div>
  )
}

export default HeaderComponent