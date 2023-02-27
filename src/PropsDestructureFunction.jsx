import React from "react";

function PropsDestructureFunction(props){
    const {name,city,company} = props
    return(
        <div>
            <h1>Props Destructuring in Functional Componant</h1>
            <h3>Name :{props.name}</h3>
            <h3>City :{props.city}</h3>
            <h3>Company :{props.company}</h3>
        </div>
    )
}
export default PropsDestructureFunction