//! "HOC-to share the common functionality between the component"
//? 'A pattern where function takes a component as an argument and re'
//syntax - 'const NewComp =HigherOrderComponent(originalComponent)'
  
import React, { useState } from 'react'

const HigherOrderComponent = (originalComponent) => {

    //new component
  const NewComponent =()=>{
    //common functionality
    const[count,setcount]=useState(0)

    const handleClick=()=>{
        //increament count
        setcount(count+2)
    }
    return<originalComponent/>
  }
  //Return the new component 
  return<NewComponent/>
}
//export main component
export default HigherOrderComponent