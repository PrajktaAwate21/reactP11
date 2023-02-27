

import React, { Component } from 'react';

class PropsClassComp extends Component {
    render() {
        return (
            <div>
                <h1>Props in class component</h1>
                <h1>{this.props.massage}</h1>
            </div>
        );
    }
}

export default PropsClassComp;