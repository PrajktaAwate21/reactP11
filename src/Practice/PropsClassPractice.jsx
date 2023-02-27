import React, { Component } from 'react';

class PropsClassPractice extends Component {
    render() {
        return (
            <div>
                <>
                <ins><h1>This is Props using Class</h1></ins>
                <em><h3>Hello,{this.props.message}</h3></em>
                </>
            </div>
        );
    }
}

export default PropsClassPractice;