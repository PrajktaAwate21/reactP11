import axios from 'axios'
import React, { Component } from 'react'
import './Post.css'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[] 
      }
    }

   //fetch data using axios
    async fetchData(){
        const result=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(result);
        this.setState({
          posts:result.data
        }) 
    }

  render() {
    return (
      <div className='postListTable'>
           <button onClick={()=>this.fetchData()}>Fetch Data</button>
           {/* //only UI la show hoto  */}
           {/* <h4>{this.state.posts.map((Post)=>{
        return( <h2> {Post.userId}
        {Post.title}
        {Post.body}
        </h2>   
        )}
       )
        }
       </h4> */}
         {/* //Table format madhe show hoto */}
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
export default PostList