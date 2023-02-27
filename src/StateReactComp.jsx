import React,{ Component } from "react";

class StateReactComp extends Component{
    constructor(){
        super()
        this.state={user:"Guest"} 
    }
    
    changeUserNameWithSate(){

        this.setState({
           user : 'admin' 
        })
        console.log("button from state Cliked");
        
    }
    render(){
        return(
            <div>
                <h3>User : {this.state.user}</h3>
                <button onClick={()=>{this.changeUserNameWithSate()}}>Change User</button>
            </div>
        )
    }
}
export default StateReactComp