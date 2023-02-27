import React, { Component } from 'react';

class StateReactComp extends Component {
    constructor(){
        super()
        //with variable
        this.user='Welcome'
        this.state={
            user:'Welcome'
        }
    }
    changeUserName(){
        console.log("button clicked....")
        this.user='React World....'
    }

    changeUserNameWithState(){
        this.setState({
            user :'React world.....'
        })
        console.log('button click from state...');
    }

    render() {
        console.log("Component render");
        return (
            <div>
                <h4>User from Variable:{this.user}</h4>
                <button onClick={this.changeUserName.bind(this)}>Change User</button>
                <br /><br />
                <h5>User from state:{this.state.user}</h5>
                <button onClick={this.changeUserNameWithState.bind(this)}>Change User with State</button>
            </div>
        );
    }
}

export default StateReactComp;