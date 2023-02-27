import React, { Component } from 'react';

class FormBasics extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            contactNo:'',
            lang:'React Native'
        }
    }
    //user Name
    ChangeUserName =(event)=>{
        console.log(event.target.value);
        this.setState({
            userName:event.target.value
        })
    }
    //contact no
    ChangeContactNo=(Event)=>{
        console.log(event.target.value);
        this.setState({
            contactNo:event.target.value
        })
    }
    //language
    ChangeLang=(event)=>{
        console.log(event.target.value);
        this.setState({
            lang:event.target.value
        })
    }
    
    //submit button
    submitData=(event)=>{
        alert(`User Name : ${this.state.userName} ContactNo : ${this.state.contactNo} Language : ${this.state.lang}`)
        event.preventDefault()
    }

    render() {
        
        return (
            <form onSubmit={this.submitData}>
                <div className='heading'>
                    <h1>User Registration Form</h1>
                    {/* <label>User Name</label> */}
                User Name : <input type="text" value={this.state.userName} onChange={this.ChangeUserName} />
                </div>
                <div className='heading'>
                ContactNo : <input type="telephone" value={this.contactNo} onChange={this.ChangeContactNo} />
                </div>
                <div className='heading'>
                Launguage : <select name="" id="" value={this.state.lang} onChange={this.ChangeLang}>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                </select>
                </div>
                <div className='heading'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        );
    }
}

export default FormBasics;