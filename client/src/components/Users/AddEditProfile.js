import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css'
import classnames from 'classnames';
import { urlProfile } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';

class AddEditProfile extends Component {
    constructor() {
        super()
        this.state = {
            handle:'',
            company:'',
            website: '',
            location: '',
            status:'',
            phone:'',
            bio:'',
            youtube:'',
            twitter:'',
            facebook:'',
            linkedIn:'',
            instagram:'',

            errors:{}
        }
    }

    componentDidMount(){
        if(this.props.location.state.profile){
            const {profile} = this.props.location.state;
            this.setState({
                handle: profile.handle? profile.handle : '',
                company: profile.company? profile.company : '',
                website: profile.website? profile.website : '',
                location: profile.location? profile.location : '',
                status: profile.status? profile.status : '',
                phone: profile.phone? profile.phone : '',
                bio: profile.bio? profile.bio : '',
                youtube: profile.youtube? profile.youtube : '',
                twitter: profile.twitter? profile.twitter : '',
                facebook: profile.facebook? profile.facebook : '',
                linkedIn: profile.linkedIn? profile.linkedIn : '',
                instagram: profile.instagram? profile.instagram : '',
            })
        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        const localToken = localStorage.getItem('jwtToken')
        const {handle, company, website, location, status, phone, bio, youtube, twitter, facebook, linkedIn, instagram} = this.state;
        fetch(urlProfile, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localToken
            },
            method: 'post',
            body: JSON.stringify({
                handle: handle,
                company: company,
                website: website,
                location: location,
                status: status,
                phone: phone,
                bio: bio,
                youtube: youtube,
                twitter: twitter,
                facebook: facebook,
                linkedIn: linkedIn,
                instagram: instagram
            })
        })
        .then(processResponse) //process response with status code
        .then(res=>{
            console.log(res)
            const {statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            }
            if(statusCode === 200){
                alert("Successfully Registered")
                this.props.history.push('/profile')
                
            }
        })
        .catch(err=> console.log(err))
    }

    render() {    
        const {errors, handle, company, website, location, status, phone, bio, youtube, twitter, facebook, linkedIn, instagram} = this.state;
        return (
            <div>
                <AppNavbar1/>
                <div className="py_80 bg_milk full_width">
                <div className="container">
                    <header className="header-section d-flex justify-content-center">
                        <h2 className="title">
                            Add/Edit Profile
                        </h2>
                    </header>
                    <div className="add-profile-form d-flex justify-content-center">
                        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputHandle">Handle <span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={handle} name="handle" type="text" className={classnames("form-control", {'is-invalid': errors.handle})} id="inputHandle" placeholder="Handle"/>
                                    {errors.handle && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.handle}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputStatus">Status <span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={status} name="status" type="text" className={classnames("form-control", {'is-invalid': errors.status})} id="inputStatus" placeholder="Status" />
                                    {errors.status && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.status}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputPhone">Phone <span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={phone} name="phone" type="text" className={classnames("form-control", {'is-invalid': errors.phone})} id="inputPhone" placeholder="Phone required to begin with +" />
                                    {errors.phone && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.phone}</div>)}
                                </div>
                                
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCompany">Company</label>
                                    <input onChange={this.handleChange.bind(this)} value={company} name="company" type="text" className="form-control" id="inputCompany" placeholder="Company" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputWebsite">Website</label>
                                    <input onChange={this.handleChange.bind(this)} value={website} name="website" type="text" className="form-control" id="inputWebsite" placeholder="Company Website" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input onChange={this.handleChange.bind(this)} value={location} name="location" type="text" className="form-control" id="inputAddress" placeholder="Company Address" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputBio">Bio</label>
                                <textarea onChange={this.handleChange.bind(this)} value={bio} name="bio" type="textarea" className="form-control" id="inputBio" placeholder="Your Bio"></textarea>
                            </div>

                            <label htmlFor="inputSocialLinks">Social Links</label>
                            <div className="form-row" id="inputSocialLinks">
                                <div className="form-group col-md-4">
                                    <input onChange={this.handleChange.bind(this)} value={linkedIn} name="linkedIn" type="text" className={classnames("form-control", {'is-invalid': errors.linkedIn})} id="inputHandle" placeholder="LinkedIn"/>
                                    {errors.linkedIn && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.linkedIn}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <input onChange={this.handleChange.bind(this)} value={facebook} name="facebook" type="text" className={classnames("form-control", {'is-invalid': errors.facebook})} id="inputStatus" placeholder="Facebook" />
                                    {errors.facebook && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.facebook}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <input onChange={this.handleChange.bind(this)} value={twitter} name="twitter" type="text" className={classnames("form-control", {'is-invalid': errors.twitter})} id="inputPhone" placeholder="Twitter" />
                                    {errors.twitter && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.twitter}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <input onChange={this.handleChange.bind(this)} value={youtube} name="youtube" type="text" className={classnames("form-control", {'is-invalid': errors.youtube})} id="inputPhone" placeholder="YouTube" />
                                    {errors.youtube && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.youtube}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <input onChange={this.handleChange.bind(this)} value={instagram} name="instagram" type="text" className={classnames("form-control", {'is-invalid': errors.instagram})} id="inputPhone" placeholder="Instagram" />
                                    {errors.instagram && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.instagram}</div>)}
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Profile</button>
                        </form>
                    </div>
                </div>
                
                </div>
            </div>
        );
    }
}

export default AddEditProfile;