import React, { Component } from 'react';

class PropsDestructuringClassComp extends Component {
    render() {
        const {name,city,age} = this.props
        return (
        
            <div>
             <h1>Props Destructuring in class comp..</h1>
             <h3>Name:{this.props.name}</h3>
             <h3>City:{this.props.city}</h3>
             <h3>Age:{this.props.age}</h3>  

             {/* <h3>Name :{name}</h3>
                <h3>City :{city}</h3>
                <h3>Company:{company}</h3> */}
                 
            </div>
        );
    }
}
export default PropsDestructuringClassComp;