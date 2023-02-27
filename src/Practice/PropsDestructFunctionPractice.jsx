import React from 'react'

function PropsDestructFunctionPractice({name,address,education}) {
  return (
    <div>
        <b><i><h1>Props Dstructuring....</h1></i></b>
        <i><h4>Name:-{name}</h4></i>
        <i><h4>Address:-{address}</h4></i>
        <i><h4>Education:-{education}</h4></i>
    </div>
  )
}

export default PropsDestructFunctionPractice