import React, { Component } from 'react'

 class LyfeCyclePractice extends Component {
    constructor(props){
        super(props)
        this.state={favColor:"Red"}
    }
    // static getDerivedStateFromProps(props,state){
    //     return {favColor : props.favcol}
    // }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favColor:'Green'})
        }, 5000);
       
    }
  render() {
    return (
      <div> <h1>My Favorite Color is:{this.state.favColor}</h1>  </div>
    )
  }
}
export default LyfeCyclePractice