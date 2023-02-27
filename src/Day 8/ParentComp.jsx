import React, { Component } from 'react';
import ChildComp from './ChildComp';


class ParentComp extends Component {
    getDataFromChild(message){
        alert(`Function Called ${message}"`)
    }
    render() {
        return (
            <div>
                <h2>This is parent Component...</h2>
                <ChildComp ParentFunction={this.getDataFromChild}/>
            </div>
        );
    }
}

export default ParentComp