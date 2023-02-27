import React, { useContext,createContext, useState } from 'react'
const myContext=createContext()

function PracticeYesterday() {
    const[user,setUser] = useState('Prajkta Awate')
  return (
    <div>
        <h2> {`Hello ${user}`}</h2>
        <myContext.Provider value={user}>
            <Child1 />
        </myContext.Provider>
       
    </div>
  )
}



function Child1(){
    return(
        <div>
            <h3>This is Child 1</h3>
            <Child2 />
        </div>
    )
}

function Child2(){
    return(
        <div>
            <h3>This is Child 2</h3>
            <Child3 />
        </div>
    )
}


function Child3(){
    const user=useContext(myContext)
    return(
        <div>
            <h3>This is Child 3</h3>
            <h4>{`Hello ${user} again in comp 4`}</h4>
            <Child4 />
        </div>
    )
}


function Child4(){
    const user= useContext(myContext)
    return(
        <div>
            <h3>This is Child 4</h3>
            <h4>{`Hello ${user} again in comp 4`}</h4>
        </div>
    )
}

export default PracticeYesterday