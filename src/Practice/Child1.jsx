import React from 'react'

const Child1 = () => {
    console.log('Hello this is Memo....')
  return (
    <div>Child1</div>
  )
}

export default React.memo( Child1)