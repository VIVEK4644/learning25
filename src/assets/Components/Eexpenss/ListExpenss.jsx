import React from 'react'

export const ListExpenss = (props) => {
    return (
        <div>
            <h1>ListExpenss</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Tittle </th>
                        <th>Amount  </th>
                        <th>Cat </th>
                        <th>Mode  </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                            props.expenses?.map((name,id)=>(
                                 <tr key={id}>
                                    <td>{name.name}</td>
                                    <td>{name.amount}</td>
                                    <td>{name.categorie}</td>
                                    <td>{name.mode}</td>
                                </tr>
                            ))
                        } */}
                    { 
                        props.expenses.length > 0 ? (
                            props.expenses.map((name, id) => (
                                <tr key={id}>
                                    <td>{name.name}</td>
                                    <td>{name.amount}</td>
                                    <td>{name.categorie}</td>
                                    <td>{name.mode}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    No expenses found
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
