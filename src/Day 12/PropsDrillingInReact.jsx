
import React, { Component,createContext } from 'react'

const MessageContext = React.createContext()

class PropsDrillingInReact extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : "Welcome...! In react world !!!"
        }
    }
  render() {
    return (
      <div>
        <h2>PropsDrillingInReact</h2>
        <MessageContext.Provider value={this.state.message}>
            <Parent/>
        </MessageContext.Provider>
      </div>
    );
  }
}
export default PropsDrillingInReact;

class Parent extends Component{
    render(){
        return(
            <div>
                <h1>I'm Parent...!</h1>
                <Child1 message={this.props.message}/>
            </div>
        )
    }
}

class Child1 extends Component{
    render(){
        return(
            <div>
                <h2>I'm Child one..!!!</h2>
                <Child2 message={this.props.message}/>
            </div>
        )
    }
}
class Child2 extends Component{
    render(){
        return(
            <div>
                <h2>I'm Child two....!!!!</h2>
                <Child3 message={this.props.message}/>
            </div>
        )
    }
}
class Child3 extends Component{
    render(){
        console.log(this.props.message);
        return(
            <div>
              <h1>I'm Child three...!!!</h1>
              <MessageContext.Consumer>
                {value=><h1>{value}</h1>}
              </MessageContext.Consumer>
            </div>
        )
    }
}









