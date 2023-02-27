import React, { Component } from 'react'
import Couter from './Couter'

export default class ErrorBoundries extends Component {
    constructor(props){
        super(props)
        this.state={
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }
  render() {
    if (this.state.errorInfo){
        return(
            <div>
                <h2>an Error has occured</h2>
                <details>
                    {this.state.error && this.state.toString()}
                    <br/>
                    {this.state.errorInfo.ComponentStack}
                </details>
            </div>
        )
    }
    return <Couter/>
  }
}
