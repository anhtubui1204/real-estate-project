import React, { Component } from 'react';
import './css/users.css'
import {Link} from 'react-router-dom'

class ViewProfile extends Component {
    render() {
        const {profile, errors}=this.props

        var profileDisplay = (!errors || (typeof errors ==='object' && Object.keys(errors).length===0))? (

            (!profile || (typeof profile === 'object' && Object.keys(profile).length===0))? (
                <p>Profile Loading</p>
            ) : (
            <div className="row">
                <div className="col-7 col-sm-7 col-md-7 col-lg-8">
                    <div className="info-profile">
                        {profile.bio && (
                        <div className="profile-bio">
                            <p>{profile.bio}</p>
                        </div>
                        )}
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <ul>
                                    <li>
                                        <span>Name: </span> {profile.user.name}
                                    </li>
                                    <li>
                                        <span>Phone: </span> {profile.phone}
                                    </li>
                                    <li>
                                        <span>Status: </span> {profile.status}
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                <ul>
                                    <li>
                                        <span>Company: </span> {profile.company}
                                    </li>
                                    <li>
                                        <span>Website: </span> {profile.website}
                                    </li>
                                    <li>
                                        <span>Address: </span> {profile.location}
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="edit-btn">
                        <Link to = {{
                            pathname: '/addprofile',
                            state:{
                                profile: profile
                            }
                        }}><button className="btn btn-dark">Edit Profile</button></Link>
                    </div>
                </div>
                
                <div className="col-5 col-sm-5 col-md-5 col-lg-4">
                    <div className="profile-img">
                        <img className="img-responsive" src={profile.user.avatar} alt="profile-img"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="social-section">
                        <div className="container-fluid">
                            <div className="social-media-wrap">
                                <h2>my social profiles</h2>
                                {(!profile.social)? (
                                    <p>No Social Links</p>
                                ): (
                                    <div className="social-li">
                                    {profile.social.linkedIn && (
                                        <a href={profile.social.linkedIn}>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    )}
                                    {profile.social.facebook && (
                                        <a href={profile.social.facebook}>
                                         <i className="fab fa-facebook"></i>
                                        </a>
                                    )}
                                    {profile.social.twitter && (
                                         <a href={profile.social.twitter}>
                                         <i className="fab fa-twitter"></i>
                                     </a>
                                    )}
                                   {profile.social.youtube && (
                                       <a href={profile.social.youtube}>
                                       <i className="fab fa-youtube"></i>
                                   </a>
                                   )}
                                   {profile.social.instagram && (
                                       <a href={profile.social.instagram}>
                                       <i className="fab fa-instagram"></i>
                                   </a>
                                   )}
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        ) : (
            <div className="alert-section">
                <div className="alert alert-danger">
                    <h4>{errors.noprofile}</h4>
                    <div className="add-profile">
                        <span style={{padding:"0px 5px", color:"gray"}}>please add profile here</span>
                        <Link to={{
                            pathname:'/addprofile',
                            state:{
                                errors: errors
                            }
                        }}><span className="badge badge-pill badge-light">Add Profile</span></Link> 
                    </div>
                </div>
                
            </div>
        )

        return (
            <div className="view-profile">
                {profileDisplay}
            </div>
        );
    }
}

export default ViewProfile;