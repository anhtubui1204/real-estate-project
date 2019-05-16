import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './css/ads.css'
import numFormatter from "../../utils/numFormatter";
import Moment from 'react-moment';
import checkAuth from '../../utils/checkAuth';

class ViewAdsDetail extends Component {
    render() {
        const {ads} = this.props;
        const localToken = localStorage.getItem('jwtToken')
        if(ads){console.log(checkAuth(localToken, ads.user._id))}
        

        console.log(ads)
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
                            <div className="col-8">
                                <div className="ads-title">
                                    <h1>{ads.title}</h1>
                                </div>
                                {ads.project && (
                                    <div className="project-info">
                                    <span>From project: </span><span className="project-name">{ads.project.name}</span>
                                    </div>
                                )}
                            </div>
                            <div className="col-4">
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
                <div className="ads-detail-extra">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-7">
                                <div className="extra-detail">
                                    <div className="caption mb-1">Extra Facilities</div>
                                    <div className="facilities-list">
                                        <div className="facility">
                                            <span className="facility-title">Bedrooms</span>
                                            <div className="facility-content">
                                            <div className="f-icon"><i className="fas fa-bed"></i></div>
                                            <span className="value">{ads.nBedRooms}</span>
                                            </div>
                                        </div>
                                        <div className="facility">
                                            <span className="facility-title">Floors</span>
                                            <div className="facility-content">
                                            <div className="f-icon"><i className="fas fa-building"></i></div>
                                            <span className="value">{ads.nFloors}</span>
                                            </div>
                                        </div>
                                        <div className="facility">
                                            <span className="facility-title">Area</span>
                                            <div className="facility-content">
                                            <div className="f-icon"><i className="fas fa-vector-square"></i></div>
                                            <span className="value">{ads.areaSqm} Sq m.</span>
                                            </div>
                                        </div>
                                        <div className="facility">
                                            <span className="facility-title">Direction</span>
                                            <div className="facility-content">
                                            <div className="f-icon"><i className="fas fa-compass"></i></div>
                                            <span className="value">{ads.direction}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="caption mb-1">Address</div>
                                    <div className="address-content">
                                        <span><i className="fas fa-map-marker-alt"></i></span>
                                        <span>{ads.address.street}, District {ads.address.district}, {ads.address.city}</span>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="caption mb-1">Contact Info</div>
                                    <div className="address-content">
                                        <span><i className="fas fa-id-badge"></i></span>
                                        <span>{ads.contactInfo.name}, {ads.contactInfo.phone}</span>
                                    </div>
                                </div>
                                {checkAuth(localToken, ads.user._id) && (
                                    <div className="edit-btn">
                                        <button className="btn btn-dark">Edit Ads</button>
                                    </div>
                                )}
                               
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="contact-info">
                                   <div className="row">
                                        <div className="col-6">
                                            <div className="float-lg-right py-3">
                                                <h5>Posted by</h5>
                                                <h3>{ads.user.name}</h3>
                                                <Moment format="YYYY/MM/DD">{ads.postDate}</Moment>
                                            </div>
                                            
                                        </div>
                                        <div className="col-6">
                                            <div className="contact-avatar">
                                                <img className="img-thumbnail" alt="avatar" src={ads.user.avatar}/>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                            </div>
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