import React, { Component } from 'react';

class ReactStateClassComp extends Component {
    constructor(){
        super()
        this.state={
            message :'Hello',
            name :'Prajkta',
            city :'Bararamati'
        }
    }
    changeMessage(){
        this.setState(
            {
                message :'Everyone....!!!',
            },
            ()=> console.log(this.state.message)
        )
    }
    changeName(){
        this.setState(
            {
                name :'Sonali',
            },
            ()=> console.log(this.state.name)
        )
    }
    render() {
        const {message,name,city} =this.state
        return (
            <div>
                <h2>React State</h2>
                <h3>Message :{this.state.message}</h3>
                <h3>Name :{this.state.name}</h3>
                <h3>City :{this.state.city}</h3>
                 <button onClick={this.changeName.bind(this)}>Change Name</button>
                <button onClick={this.changeMessage.bind(this)}>Change Message</button>
            </div>
        );
    }
}

export default ReactStateClassComp;