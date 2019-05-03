import React, { Component } from 'react';
import './css/recentAds.css'


class SingleAds extends Component {
    render() {
        const{title, image, price, district, city} = this.props
        return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 ads-col">
                <div className="ads-item">
                    <div className="ads-media">
                        <img className="img-responsive" src={image} alt="img"/>
                    </div>
                    <div className="ads-card-content">
                        <h3 style={{margin: '0px 0px 5px 0px'}}>{title}</h3>
                        <div className="ads-address">
                            <i className="fas fa-map-marker-alt" style={{padding: "0 5px 0 5px"}}></i>
                            <span>{district}</span><span>{city}</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}



export default SingleAds;