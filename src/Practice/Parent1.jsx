import React,{useState} from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    const[count,setcount]=useState(0)
    setInterval(() => {
        setcount(count+1)
    }, 2000);
  return (
    <div>
        <h1>Count is:{count}</h1>
        <Child1/>
    </div>
  )
}

export default Parent1