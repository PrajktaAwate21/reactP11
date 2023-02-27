import React, { Component } from 'react';
import AddNewPostButton from './add-new-post-button'
import PostsList from './posts-list'
import AddPost from './add-post'

class CrudOperation extends Component {
    constructor(props)
     {
        super(props)
        this.state =
         {
           postFlag:true
        }
      }
               
      udatePostFlagState  =(flagValue)=>{
          this.setState({
              postFlag:flagValue
          })
      }
      
    render() {
      return (
        <div>
          <h4>POST MANAGEMENT</h4>
          {this.state.postFlag && <AddNewPostButton udatePostFlagState ={this.udatePostFlagState}/>}
          {/* <AddPost/>
          <PostsList/>  */}
           {this.state.postFlag ? <PostsList/> : <AddPost udatePostFlagState ={this.udatePostFlagState}/> }
        </div>
      )
    }
  }

export default CrudOperation;