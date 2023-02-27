import React, { useState } from 'react'

function HooksInReact() {
    //create state 
    const [car,setCar]=useState({
        brand:"Kia",
        model:'Seltos',
        year:'2022',
        color:'white'
    })

    const updateCarDetails =()=>{
        setCar(previousState =>{
            return {...previousState,model:"Seltos XTX"}
        })
    }
    
  return (
    <div>
      <h1>Hooks in React function comp</h1>
      {/* used state  */}
      <h2>Car details</h2>
      <h3>Car Brand :{car.brand}</h3>
      <h3>Car Model :{car.model}</h3>
      <h3>Car year :{car.year}</h3>
      <h3>Car color :{car.color}</h3>

      <button onClick={updateCarDetails}> Update Car </button>
    </div>
  )
}

export default HooksInReact
