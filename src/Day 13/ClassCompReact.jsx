import React, { Component } from 'react';

class ClassCompReact extends Component {
    constructor(){
        super()
        this.state ={
            color :"Red"
        }
    }
    render() {
        const changeColor =()=>{
            this.setState({
                color :"Green"
            })
        }
        return (
            <div>
                <h1>Class Component</h1>
                <h3>Color:{this.state.color}</h3>
                <button onClick={changeColor}>Change Color</button>
            </div>
        );
    }
}

export default ClassCompReact;