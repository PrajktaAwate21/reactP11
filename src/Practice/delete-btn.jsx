import axios from 'axios'
import React, { Component } from 'react'

 class DeletePost extends Component {
    deletePost =async()=>{
         const res =  await axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
         console.log(res)
         if(res.status ===200){
            alert("Post Data deleted successfully...")
         }
      
    }
  render() {
    return (
      <div>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    )
  }
}

export default DeletePost
