import React from 'react'
import { Users } from './Users'

export const UserList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Users{props.Apptitle}</h1>

      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
            {
                props.AppNewTitle.map((user)=>
                {
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
              }
              )
            }
      </table>
    </div>
  )
}
