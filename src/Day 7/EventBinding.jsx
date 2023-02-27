import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(){
        super();
        this.changeMessage = this.changeMessage.bind(this)
        this.state ={
            message : 'Welcome....'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Farewell...'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>Event Binding</h1>
                {this.state.message}
                <button onClick={this.changeMessage.bind(this)}>Click me</button>
            </div>
        );
    }
}

export default EventBinding;