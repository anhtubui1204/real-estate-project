import React, { Component } from 'react';


class SingleAds extends Component {
    render() {
        const{title, image, price, district, city} = this.props
        console.log(image)
        return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                <div className="ads-item">
                    <img className="img-fluid" src={image}/>
                </div>
            </div>
        );
    }
}



export default SingleAds;