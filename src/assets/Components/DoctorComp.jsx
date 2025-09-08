import React, { useState } from 'react'
import DoctorCompList from './DoctorCompList'

function DoctorComp() {
    const [doctors, setDoctors] = useState([
        {
            id:1,
            name:"magan",
            age : 22,
            gender : "male",
            phone: "+91 9999999999",
            email : "magan11@gmail.com",
            specialization: "Cardiologist"
        },
        {
            id:2,
            name:"chhagan",
            age : 25,
            gender : "male",
            phone: "+91 8888888888",
            email : "chhagan345@gmail.com",
            specialization: "Dermatologist"
        },
        {
            id:3,
            name:"lagan",
            age : 25,
            gender : "male",
            phone: "+91 7777777777",
            email : "lagan55@gmail.com",
            specialization: "Pediatrician"
        }   
    ])

    const getDoctorData = (id)=>{
        alert("Doctor id:- " + id);
    }

    const deleteDoctorData = (id)=>{
        // alert("Doctro id :- "+id);
        setDoctors(doctors.filter((doc)=>doc.id != id))
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>DoctorComp</h1>
        <DoctorCompList doctors = {doctors}  getDoctorData={getDoctorData} deleteDoctorData={deleteDoctorData}></DoctorCompList>
    </div>
  )
}

export default DoctorComp