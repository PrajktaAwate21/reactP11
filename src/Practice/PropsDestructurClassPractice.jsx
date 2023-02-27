import React, { Component } from 'react';

class PropsDestructurClassPractice extends Component {
    render() {
        const {name, age} =this.props
        return (
            <div>
                <>
              <b><strong>  <h1>Props Destructuring using Class</h1></strong></b>
                <i><h4>Name :-{this.props.name}</h4></i>
                <i><h4>Age :-{this.props.age}</h4></i>
                </>
            </div>
        );
    }
}

export default PropsDestructurClassPractice;