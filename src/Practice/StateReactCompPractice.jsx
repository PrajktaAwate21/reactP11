import React, { Component } from 'react';

class StateReactCompPractice extends Component {
    constructor(){
        super()
        //with variable
        this.message='Good Evening..!'
        //with state
        this.state={
            message:'Good Evening..!'
        }
    }
    changeMessage(){
        console.log('Message Changed....!')
        this.message='Have a  good day !'
        console.log(this.message);
    }
    changeMessageWithState(){
        this.setState({
            message :'Have a  good day !'
        })
        console.log('Message Changed with State...')
    }
    render() {
        console.log('Component Rener...');
        return (
            <div>
                <h4>Message From Variable:{this.message}</h4>
                <button onClick={this.changeMessage.bind(this)}>Change Message</button>
                <h4>Message From State:{this.message}</h4>
                <button onClick={this.changeMessageWithState.bind(this)}>Change Message with State</button>
            </div>
        );
    }
}

export default StateReactCompPractice;