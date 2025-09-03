import React, { useState } from 'react'
import EmployeeList from './EmployeeList'

function Employee() {
    const [employees, setemployees] = useState([
        {id:101,
         name:"Ram",
         Age:25,
         salary:25000,
         post : "Manger",
         gender:"male"
        },
         {id:102,
         name:"Laxman",
         Age:25,
         salary:26000,
         post : "Senior-Manger",
         gender:"male"
        },
         {id:103,
         name:"Sita",
         Age:25,
         salary:28000,
         post : "assitant",
         gender:"female"
        },
         {id:104,
         name:"Bharat",
         Age:21,
         salary:17000,
         post : "Executive",
         gender:"male"
        },
    ])

    const getEmployeesData = (id)=>{
        alert("Id:- " + id);
         var foundemployeename = employees.find((emp) => emp.id == id);
        console.log("Employee :- ", foundemployeename.name);
    }

    const deleteGetEmployeesData = (id)=>{
        // alert("Alert....." + id);

        setemployees(employees.filter((emp)=>emp.id !=id));
       
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Employee</h1>
        <EmployeeList employees={employees} getEmployeesData={getEmployeesData}   deleteGetEmployeesData = {deleteGetEmployeesData} ></EmployeeList>
    </div>
  )
}

export default Employee