import React, { useState } from 'react'


function UseStateDemo3() {
const [fruits, setFruits] = useState( 
    {
        id :101,
        fname : "Apple",
        price : 100
    })

    const increPrice = ()=>{
        console.log(fruits);
       

        // var f = {
        //   id : fruits.id,
        //   fname : fruits.fname ,
        //   price : 300
        // }

        // setFruits(f)
        // console.log(fruits);

        setFruits({...fruits,price:300})
        // console.log(fruits);



        
    }

    
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>

        <h2>{fruits.id} -- {fruits.fname} -- {fruits.price}</h2>
        
        <br />
        <button onClick={increPrice}>Incre price</button>
    </div>
  )
}

export default UseStateDemo3