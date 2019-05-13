import React, { Component } from 'react';
import SingleAds from './SingleAds';
import './css/ads.css';

class ViewAdsList extends Component {
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
                area={ads.areaSqm}
                nBedRoom={ads.nBedRooms}
                nFloor = {ads.nFloors}
                className={"col-12 col-sm-12 col-md-4 col-lg-4 ads-col"}
            />
        )
        )

        return (
            
            <div className="row d-flex justify-content-center">
                {listAds}
            </div>
        );
    }
}

export default ViewAdsList;