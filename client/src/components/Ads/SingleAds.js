import React, { Component } from 'react';
import './css/ads.css';
import numFormatter from '../../utils/numFormatter';


class SingleAds extends Component {
    render() {
        const{title, image, price, district, city, area, nBedRoom, nFloor, className} = this.props
        return (
            <div className={className}>
                <div className="ads-item">
                    <div className="ads-media">
                        <img className="img-responsive" src={image} alt="img"/>
                    </div>
                    <div className="ads-card-content">
                        <h3 style={{margin: '0px 0px 5px 0px'}}>{title}</h3>
                        <div className="ads-address">
                            <i className="fas fa-map-marker-alt" style={myStyle.address}></i>
                            <span style={myStyle.address}>District: {district}</span>
                            <span style={myStyle.address}>City: {city}</span>
                        </div>
                        <div className="ads-price">
                            <strong>$ {numFormatter(price)}</strong>
                        </div>
                    </div>
                    <div className="ads-extra-content">
                        <ul>
                            <li>
                                Area
                                <span>{area} m2</span>
                            </li>
                            <li>
                                Bed Rooms
                                <span>{nBedRoom}</span>
                            </li>
                            <li>
                                Floors
                                <span>{nFloor}</span>
                            </li>
                            <li>
                                <button className="btn btn-info">Detail</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const myStyle={
    address:{
        padding: "0 5px 0 5px",
        color:"#bdbdbd"
    }
}


export default SingleAds;