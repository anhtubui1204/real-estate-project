import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import Loader from 'react-loader-spinner'

class SingleAds extends Component {
    render() {
        const{title, image, price, district, city} = this.props
        return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                <div className="ads-item">
                    <img className="img-fluid" src={image} alt="img"/>
                </div>
            </div>
        );
    }
}



export default SingleAds;