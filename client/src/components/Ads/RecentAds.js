import React, { Component } from 'react';
import './css/ads.css';
import SingleAds from './SingleAds';

class RecentAds extends Component {
    render() {
        const {adsList} = this.props

        //sort ads by date
        adsList.sort((a,b)=>{
            var dateA = new Date(a.postDate) 
            var dateB = new Date(b.postDate)
            return dateB - dateA; //return by most recent date
        })

        var listAds = (!adsList || !adsList.length)? (
            <p>No Ads, sorry</p>
        ) :
            adsList.filter((item, index)=> index < 2) //pick the first 2 elements of the array
                    .map((ads, index)=>(
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
                            id = {ads._id}
                            className={"col-12 col-sm-12 col-md-12 col-lg-6 ads-col"}
                        />
                    )
                )
        
        return (
            
            <div className="properties-area">
                <div className="container">
                    <div className="title">
                        <h1>most recent ads</h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {listAds}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentAds;