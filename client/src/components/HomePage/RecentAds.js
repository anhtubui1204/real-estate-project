import React, { Component } from 'react';
import './css/recentAds.css';
import SingleAds from './SingleAds';

class RecentAds extends Component {
    render() {
        const {adsList} = this.props
        
        var listAds = (!adsList || !adsList.length)? (
            <p>No Ads, sorry</p>
        ) :
            adsList.map((ads, index)=>(
            <SingleAds
                key={index}
                image={ads.imageURL.imageMain}
                title={ads.title}
                price={ads.price}
                district={ads.address.district}
                city={ads.address.city}
            />
        )
        )

        return (
            <div className="properties-area">
                <div className="container">
                    <div className="title">
                        <h1>most recent ads</h1>
                    </div>
                    <div className="ads-list row d-flex justify-content-center">
                        {listAds}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentAds;