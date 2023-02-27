import React, { Component } from 'react';

class ConditionalRenderingReact extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn :true
        }
    }
    render() {
        // if(this.state.isLoggedIn){
        //     return <div><h2>
        //        Welcome....!!!!                
        //         </h2></div>
        // }else{
        //     return <div>
        //          <h2>Hello Everyone....!</h2>
        //     </div>
        // }

        //Using variable
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Prajkta....</div>
        // }
        // else{
        //     message=<div>Hello Everyone...</div>
        // }
        // return message

        //conditional or ternary operator
        // return this.state.isLoggedIn ? <div><h2>Welcome</h2></div> : <div><h2>Getout</h2></div>
           
        //4.=>Short circit
        return this.state.isLoggedIn && <div>
            <h1>Welcome......</h1>
        </div>
    }
}

export default ConditionalRenderingReact;