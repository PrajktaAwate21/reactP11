import React, { Component } from 'react'
import AddNewPostBtn from './add-new-post-btn'
import PostList from './PostList'
import AddPost from './add-post'
 class Post extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PostFlag:true
    }
  }

  updatePostFlagState=(flagValue)=>{
    this.setState({
      PostFlag:flagValue
    })

  }

  render() {
    return (
      <div>
       <b><h1 style={{color:'red',textAlign:'center'}}>POST MANAGEMENT</h1></b>
       <AddNewPostBtn updatePostFlagState ={this.updatePostFlagState}/>
       
       {this.state.PostFlag ? <PostList /> : <AddPost updatePostFlagState ={this.updatePostFlagState}/>}
      </div>
    )
  }
}
export default Post
