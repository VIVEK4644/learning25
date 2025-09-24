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
import DoctorComp from './assets/Components/DoctorComp'
import Netflixhome from './assets/Components/Netflix/Netflixhome'
import Navbar from './assets/Components/Navbar'
import { Route, Routes } from 'react-router'
import NetflixMovies from './assets/Components/Netflix/NetflixMovies'
import Error404 from './assets/Components/Error404'
import NetflicContent from './assets/Components/Netflix/NetflicContent'
import NetflixShow from './assets/Components/Netflix/NetflixShow'
import InputHandlingDemo1 from './assets/Components/Input/InputHandlingDemo1'
import InputHandlingDemo2 from './assets/Components/Input/InputHandlingDemo2'
import { FormDemo1 } from './assets/Components/Form/FormDemo1'
import FormDemo2 from './assets/Components/Form/FormDemo2'
import FormDemoH1 from './assets/Components/Form/FormDemoH1'
import FormDemoH2 from './assets/Components/Form/FormDemoH2'
import { FormDemoH3 } from './assets/Components/Form/FormDemoH3'
import { FormDemo3 } from './assets/Components/Form/FormDemo3'
import FormDemoH4 from './assets/Components/Form/FormDemoH4'
import { FormDemo4 } from './assets/Components/Form/FormDemo4'
import { DynamicForm } from './assets/Components/Form/DynamicForm'






function App(props) {

   var title = "React.js"
  return (
   
      <div style={{textAlign:'center'}}>
        
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Students/>}></Route>
          <Route path="/netflixhome" element={<Netflixhome/>} ></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>} ></Route>
          {/* <Route path="/*" element={<h2>not found</h2>} ></Route> */}
          <Route path="/*" element={<Error404/>} ></Route>
          <Route path='/watch/:name' element={<NetflicContent/>}></Route>
          <Route path='/netflixshow' element={<NetflixShow/>}></Route>
          {/* <Route path='/inputdemo1' element={<InputHandlingDemo1/>}></Route> */}
          {/* <Route path='/inputdemo2' element={<InputHandlingDemo2/>}></Route> */}
          {/* <Route path='/formdemoh1' element={<FormDemoH1/>}></Route> */}
          {/* <Route path='/formdemoh2' element={<FormDemoH2/>}></Route> */}
          {/* <Route path='/formdemoh3' element={<FormDemoH3/>}></Route> */}
          <Route path='/formdemoh4' element={<FormDemoH4/>}></Route>
          <Route path='/formdemo1' element={<FormDemo1/>}></Route>
          <Route path='/formdemo2' element={<FormDemo2/>}></Route>
          <Route path='/formdemo3' element={<FormDemo3/>}></Route>
          <Route path='/formdemo4' element={<FormDemo4/>}></Route>
          <Route path='/dynamicform' element={<DynamicForm/>}></Route>
        </Routes>
   
      </div>
        
    
  )
}

export default App
