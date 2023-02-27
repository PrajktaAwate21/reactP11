import React, { Component } from 'react'
import './Post.css'
 class AddNewPostBtn extends Component {
  render() {
    return (
      <div className='addNewPost'>
        <button onClick={()=>this.props.updatePostFlagState(false)}>ADD NEW POST</button>
      </div>
    )
  }
}

export default AddNewPostBtn