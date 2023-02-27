import React, { Component } from 'react'

export default class Couter extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    handleClick = ()=>{
        this.setState(({Counter})=>({
            counter :Counter +1
        }))
    }
  render() {
    if(this.state.counter === 5){
        throw new Error('Crashed !!!!!')
    }
    return (
      <div>
<button onClick={this.handleClick}>Click {this.state.counter} times</button>
      </div>
    )
  }
}
