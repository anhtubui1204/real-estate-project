import React, { Component } from 'react';
import './home.css';

import AppNavbar1 from '../layout/AppNavbar1';
import LoginLogout from '../Users/LoginLogout';
import Banner from './Banner';
import FilterSearch from './FilterSearch';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="header-area">
                    <AppNavbar1/>
                    <Banner/>
                    <div className="container">
                    <FilterSearch/>
                    </div>
                </div>
                <div className="recent-properties">
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