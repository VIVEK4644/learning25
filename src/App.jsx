import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Component } from './assets/Components/Component'
import HeaderComponent from './assets/Components/HeaderComponent'
import FooterComponent from './assets/Components/FooterComponent'
import MapDemo1 from './assets/Components/MapDemo1'
import MapDemo2 from './assets/Components/MapDemo2'
import MapDemo3 from './assets/Components/MapDemo3'
import MapDemo4 from './assets/Components/MapDemo4'
import { Users } from './assets/Components/Users'
import UseStateDemo from './assets/Components/UseStateDemo'
import UseStateDemo2 from './assets/Components/UseStateDemo2'
import UseStateDemo3 from './assets/Components/UseStateDemo3'
import Students from './assets/Components/Students'
import Employee from './assets/Components/Employee'





function App(props) {

    var title = "React.js"
  return (
   
      <div>
        <HeaderComponent title = {title}></HeaderComponent> 
       {/* <Students></Students> */}
       <Employee></Employee>
            
      </div>
        
    
  )
}

export default App
