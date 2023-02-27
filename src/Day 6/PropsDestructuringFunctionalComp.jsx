import React from 'react'

function PropsDestructuringFunctionalComp({name,city,age}) {
    // const {name,city,company} = props
  return (
    <div>
    <h1>Props Destructuring in Functional Comp</h1>
      <h3>Name:{name}</h3>
      <h3>City:{city}</h3>
      <h3>Age:{age}</h3>
    </div>
  )
}

export default PropsDestructuringFunctionalComp