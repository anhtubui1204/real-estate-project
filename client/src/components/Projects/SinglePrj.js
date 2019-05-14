import React, { Component } from 'react';

class SinglePrj extends Component {
    render() {
        const{prj, className}=this.props
        return (
            <div className={className}>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default SinglePrj;