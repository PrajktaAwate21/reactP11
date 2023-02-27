import React, { Component } from 'react';
import './Center.css'

class RefsInClassComp extends Component {
    constructor(props){
        super(props)
        //create ref
        this.inputRef = React.createRef()
    }
    //access and add focus to it
    componentDidMount(){
        this.inputRef.current.focus();
    }
    render() {
        return (
            <form className='center'>
                <div className='items'>
                Login Form
                </div>
                <div className='items'>
                    <label>User Name :</label>
                    <input type="text" name='' id='' ref={this.inputRef} />
                </div>
                <div className='items'>
                    <label>Password :</label>
                    <input type="password" name='' id='' />
                </div>
                <div className='items'>
                    <button type='submit'>Login</button>
                </div>
            </form>
           
        );
    }
}

export default RefsInClassComp;
