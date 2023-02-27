import React, { Component } from 'react'
import './post.css'
 class AddNewPostButton extends Component {
  render() {
    return (
      <div className='addNewpostButton'>
        <button onClick={()=>this.props.udatePostFlagState(false)}>ADD NEW POST</button>
      </div>
    )
  }
}

export default AddNewPostButton
