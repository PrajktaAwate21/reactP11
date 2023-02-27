import React from 'react'

function ChildComp(props) {
  return (
    <div>
    <h1>Child Component</h1>
    <button onClick={()=>props.ParentFunction("Welcome Parent Component")}>Pass Data to Parent Component</button>
    </div>
  )
}

export default ChildComp