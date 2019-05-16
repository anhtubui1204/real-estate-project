import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './css/ads.css'
import numFormatter from "../../utils/numFormatter";

class ViewAdsDetail extends Component {
    render() {
        const {ads} = this.props;
        const adsDetail = (!ads)? (
            <p>Errors!!!!</p>
        ): (
            <div className="view-ads-detail">
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="header-content">
                            <div className="text-center title">
                                <h1>Property detail</h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link style={myStyle.link} to={'/'}>Home</Link></li>
                                    <li className="breadcrumb-item"><Link style={myStyle.link} to={'/ads'}>Ads List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Ads Detail</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="ads-detail-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="ads-title">
                                    <h1>{ads.title}</h1>
                                </div>
                                <div className="project-info">
                                    <span>From project: </span><span className="project-name">{ads.project.name}</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ads-price float-lg-right">
                                    <div className="price-content">
                                        <h5>Sale</h5>
                                        <h2>${numFormatter(ads.price)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ads-image">
                   <div className="container d-flex justify-content-center content-width">
                       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                           <div className="carousel-inner">
                               <div className="carousel-item active">
                                   <img src={ads.imageURL.imageMain} className="d-block w-100" alt="..." />
                               </div>
                               {ads.imageURL.otherImgages.image1 && (
                                   <div className="carousel-item">
                                       <img src={ads.imageURL.otherImgages.image1} className="d-block w-100" alt="..." />
                                   </div>
                               )}
                               {ads.imageURL.otherImgages.image2 && (
                                   <div className="carousel-item">
                                       <img src={ads.imageURL.otherImgages.image2} className="d-block w-100" alt="..." />
                                   </div>
                               )}
                               {ads.imageURL.otherImgages.image3 && (
                                   <div className="carousel-item">
                                       <img src={ads.imageURL.otherImgages.image3} className="d-block w-100" alt="..." />
                                   </div>
                               )}
                           </div>
                           <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                               <span className="carousel-control-prev-icon" aria-hidden="true" />
                               <span className="sr-only">Previous</span>
                           </a>
                           <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                               <span className="carousel-control-next-icon" aria-hidden="true" />
                               <span className="sr-only">Next</span>
                           </a>
                       </div>
                   </div>
                </div>


            </div>
        )
        return adsDetail
    }
}

const myStyle = {
    link:{
        color: "#e1dddd"
    }
}

export default ViewAdsDetail;