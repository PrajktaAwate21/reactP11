import axios from 'axios'
import React, { Component } from 'react'
import './post.css'
import DeletePost from './delete-btn'
 class PostsList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    //fetch data using axios 
   async componentDidMount(){
     const res= await axios.get('https://jsonplaceholder.typicode.com/posts')   
     console.log(res)
     if(res.data.length>0){
        this.setState({
            posts:res.data
        })
     }
    }

  render() {
    return (
      <div className='postListTable'>
            {/* <h6>{JSON.stringify(this.state.posts)}</h6> */}
            <table>
                <thead>
                    <tr>
                        <th>USER ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      this.state.posts.map((post,index)=>{
                        return(
                            <tr key={index}>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>{<DeletePost id={post.id}/>}</td>
                            </tr>
                        )
                      })  
                    }
                </tbody>
            </table>
            
      </div>
    )
  }
}

export default PostsList 
