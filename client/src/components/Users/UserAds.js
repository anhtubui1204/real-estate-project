import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css'

class UserAds extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           ads:[],
           n_ads_per_page: 6,
           numPage: 1,
        }
    }
    
    render() {
        return (
            <div className="user-ads">
                <AppNavbar1/>
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                            <h2 className="title">Your Adds</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserAds;