import React from "react";

const PropsComponent =()=>{
    console.log(props.user);
     props.name="Prajkta";  //props are read only cannot change its value
    return(
        <>
        <h1>This is props concept</h1>
        <h2>My name is :{props.user}</h2>
        </>
    )
}
export default PropsComponent