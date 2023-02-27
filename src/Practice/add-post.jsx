import axios from 'axios'
import React, { Component } from 'react'

export class AddPost extends Component {
    
     constructor(props) {
      super(props)
     this.state = {
         userid:'',
         title:'',
         body:''
      }
    }
    onSubmitPOstData = async(event)=>{
        try {
            const res = await  axios('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          console.log(res)   
      
        } catch (error) {
            console.log(error)
        }
          
            event.preventDefault()
       
    }

  render() {
    return (
      <div>
       <form onSubmit={this.onSubmitPOstData}>
        <div>
            <h5>ADD NEW POST</h5>
        </div>
        <div className='mrfBtm'>
          UserID : <input type="text" className='mrgRight' value={this.state.userid} onChange={(e)=>this.setState({userid:e.target.value})}/>
          Title : <input type="text" className='mrgRight' value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
          Body : <input type="text" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})}/>
        </div>
        <div className='mrfBtm'>
            <button type="submit">SAVE POST</button>
        </div>
       </form>
      </div>
    )
  }
}

export default AddPost
