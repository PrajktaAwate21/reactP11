import React, { Component } from 'react';
import './CompStyling.css'

class CompStyling extends Component {
    render() {
        const internal={
            color:'orange',
            textAlign:'left'
        }
        return (
            <div>
                {/* inline class */}
                <h1 style={{color:'red',textAlign:'center'}}>Hello,This is Prajkta...!!!</h1>

                {/* Internal CSS */}
                <h2 style={internal}>Im Learning a ReactJS.</h2>

                <h2 className='heading'>React is a liabrary....</h2>
            </div>
        );
    }
}

export default CompStyling;