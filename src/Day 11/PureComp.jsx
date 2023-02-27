import React, { Component,PureComponent } from 'react';

class PureComp extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            msg:'Welcome...'
        }
    }

     changeMessage =()=>{
        this.setState({
            msg:' Good Morning.....!'
        })
     }
    render() {
        console.log('I am Render Method.....')
        return (
            <div>
                <h1>Hello : {this.state.msg}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
            </div>
        );
    }
}

export default PureComp;