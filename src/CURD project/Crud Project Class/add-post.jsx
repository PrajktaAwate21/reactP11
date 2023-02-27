import axios from 'axios';
import React, { Component } from 'react';

class AddPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
        title:'',
        body:'' 
      }
    }
    onSubmitPostData=async()=>{

        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify({
                title:this.state.title,
                body:this.state.body,
                userId:this.state.userid,
            }),
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
            },
        })

        if(res.status==200){
            alert("Post Data Added Successfully")
        }

        // this.props.updatePostFlagState(true)
    }
    render() {
        return (
            <div>
               <form onSubmit={this.onSubmitPostData}>
                <div>
                    <h5>ADD NEW POST</h5>
                </div>
                <div className='mrfBtn'>
                    UserID : <input type="text" className='mrgRight' value={this.state.userid} onChange={(e)=>this.setState({userid:e.target.value})} />
                    Title : <input type="text" className='mrgRight' value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} />
                    Body : <input type="text" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})} />
                </div>
                <div className='mrfBtn'>
                    <button type='submit'>SAVE POST</button>
                </div>
               </form>
            </div>
        );
    }
}

export default AddPost;