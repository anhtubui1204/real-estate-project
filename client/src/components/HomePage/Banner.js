import React, { Component } from 'react';
import './css/banner.css';

class Banner extends Component {
    render() {
        return (
            <div>
                <div className="banner-area">
                    <div className="banner-inner d-flex align-items-center">
                        <div className="container">
                            <h5 className="title">find your new home</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;