import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import LoginLogout from '../Users/LoginLogout';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AppNavbar1/>
                <div className="container" style={myStyle.mainBody} >
                    <h1>Hello</h1>
                </div>
            </div>
        );
    }
}

const myStyle = {
    mainBody: {
        padding: '80px 0 0 0'
    }
}

export default HomePage;