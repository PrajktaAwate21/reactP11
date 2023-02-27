import React from 'react'

function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={()=>props.parentFun('Welcome in Parent Component')}>Child to Parent</button>
    </div>
  )
}

export default Child