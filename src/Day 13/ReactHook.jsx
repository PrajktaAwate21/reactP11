import React,{ useState } from 'react'

function ReactHook() {
    const [color,setColor] =useState('Yellow')
    const changeColor =()=>{
        setColor('Red')
    }

  return (
    <div>
 <h1>React Hook ....!!!</h1>
 <h2>Color:{color}</h2>
 <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default ReactHook