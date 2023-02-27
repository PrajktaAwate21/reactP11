import React, { Component } from 'react';

class ClassCompLifeCycle extends Component {
    constructor(props) {
        console.log('i am from Constructor')
      super(props)
    
      this.state = {
        message:'welcome',
        color:'Red',
        showComp:true
      }
    }

    //mounting 
    //method 1  getDerivedStateFromProps()
    static getDerivedStateFromProps(props)
    {
        console.log('i am from getDerivedStateFromProps mounting 1st',props.msg)
        return {message:props.msg}
    }
    
    componentDidMount()
    {
        console.log('i am componentDidMount method...mounting 3rd')
    }
    
    //updating
    ////method 1  getDerivedStateFromProps()
    
    //method 2 shouldcomponentUpdate
      shouldComponentUpdate()
      {
        console.log('i am from shouldComponentUpdate ....update 2nd');
        return true
      }
      
      //method 3 render
      //method 4 getSnapshotBeforeUpdate
      getSnapshotBeforeUpdate()
      {
        console.log('i am from getSnapshotBeforeUpdate ...update 4th')
        return null
      }

      componentDidUpdate()
      {
        console.log("i am from componentDidUpdate method ..update 5th");
      }


    changeState=()=>
    {
       this.setState({
        color:'Orange',
        showComp:false
       })
    }
    render() {
        console.log('i am render method...  mounting 2nd');
        return (
            <div>
                <h2>LifeCycle Method</h2>
               <h3>Message is:{this.state.message}</h3>
               <h3>Color is:{this.state.color}</h3>
               <button onClick={this.changeState.bind(this)}>Change Color</button>
               {this.state.showComp && <Component1 />}
            </div>
        );
    }
}

export default ClassCompLifeCycle;

class Component1 extends Component{
    componentWillUnmount()
    {
        console.log('i am from  componentWillUnmount');
    }
render()
{
    return(
        <div>
       <h2>Show How Component will Unmount...</h2>
        </div>
    )
}
}