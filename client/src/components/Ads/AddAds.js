import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import classnames from 'classnames';
import {urlAds, urlProject} from '../../myURL'
import processResponse from '../../utils/ProcessResponse';
import isEmpty from '../../utils/isEmpty';

class AddAds extends Component {
    constructor() {
        super()
        this.state = {
            adsId:'',
            title:'',
            price:'',
            areaSqm: '',
            nBedRooms: '',
            nFloors:'',
            direction:'',
            street:'',
            district:'',
            city:'',
            name:'',
            phone:'',
            imageMain:'',
            image1:'',
            image2:'',
            image3:'',
            project:'',
            projects:[],

            errors:{}
        }
    }

    fetchProject=()=>{
        fetch(urlProject+'/all')
        .then(res=>res.json())
        .then(json=>this.setState({projects: json}))
        .catch(err=> console.log(err))
    }

    componentDidMount=()=>{
        if(this.props.location.state){
            const {ads} = this.props.location.state
            console.log(ads)
            this.setState({
                title: ads.title? ads.title : '',
                price:ads.price? ads.price : '',
                areaSqm: ads.areaSqm? ads.areaSqm : '',
                nBedRooms: ads.nBedRooms? ads.nBedRooms : '',
                nFloors:ads.nFloors? ads.nFloors : '',
                direction: ads.direction? ads.direction : '',

                street:ads.address.street? ads.address.street : '',
                district:ads.address.district? ads.address.district : '',
                city:ads.address.city? ads.address.city : '',

                name:ads.contactInfo.name? ads.contactInfo.name : '',
                phone:ads.contactInfo.phone? ads.contactInfo.phone : '',

                imageMain:ads.imageURL.imageMain? ads.imageURL.imageMain : '',
                image1:ads.imageURL.otherImgages.image1? ads.imageURL.otherImgages.image1 : '',
                image2:ads.imageURL.otherImgages.image2? ads.imageURL.otherImgages.image2 : '',
                image3:ads.imageURL.otherImgages.image3? ads.imageURL.otherImgages.image3 : '',

                project:ads.project? ads.project._id : '',
                adsId:ads._id?ads._id:''
            })
        }
        this.fetchProject()
    }
    
    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    

    handleSubmit=(e)=>{
        e.preventDefault();
        const localToken = localStorage.getItem('jwtToken')
        const {project, title, price, areaSqm, nBedRooms, nFloors, direction, street, district, city, name, phone, image1, image2, image3, imageMain} = this.state;
        fetch(urlAds, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localToken
            },
            method: 'post',
            body: JSON.stringify({
                title: title,
                price: price,
                areaSqm: areaSqm,
                nBedRooms: nBedRooms,
                nFloors: nFloors,
                direction: direction,
                street: street,
                district: district,
                city: city,
                name: name,
                phone: phone,
                imageMain: imageMain,
                image1: image1,
                image2: image2,
                image3: image3,
                project: project,
            })
        })
        .then(processResponse) //process response with status code, if the status code equal 200, it means the fetch is successfull, other than 200 means fail and errors will be returned
        .then(res=>{
            const {statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            }
            if(statusCode === 200){
                alert("Successfully Registered")
                this.props.history.push('/ads')
            }
        })
        .catch(err=> console.log(err))
    }

    handleSubmitPut=(e)=>{
        e.preventDefault();
        const{adsId}=this.state
        const localToken = localStorage.getItem('jwtToken')
        const {project, title, price, areaSqm, nBedRooms, nFloors, direction, street, district, city, name, phone, image1, image2, image3, imageMain} = this.state;
        fetch(urlAds+'/update/'+adsId, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localToken
            },
            method: 'put',
            body: JSON.stringify({
                title: title,
                price: price.toString(),
                areaSqm: areaSqm.toString(),
                nBedRooms: nBedRooms.toString(),
                nFloors: nFloors.toString(),
                direction: direction,
                street: street,
                district: district,
                city: city,
                name: name,
                phone: phone,
                imageMain: imageMain,
                image1: image1,
                image2: image2,
                image3: image3,
                project: project,
            })
        })
        .then(processResponse) //process response with status code, if the status code equal 200, it means the fetch is successfull, other than 200 means fail and errors will be returned
        .then(res=>{
            const {statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            }
            if(statusCode === 200){
                alert("Successfully Registered")
                this.props.history.push('/ads')
            }
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {adsId, errors,project, projects, title, price, areaSqm, nBedRooms, nFloors, direction, street, district, city, name, phone, image1, image2, image3, imageMain} = this.state;
        
        const listSelectProjects = isEmpty(projects)? '' : projects.map(option=>(
            <option key={option._id} value={option._id}>{option.name}</option>
        ))
        return (
            <div className="add-ads">
                <AppNavbar1/>
                <div className="header-area ">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                        {!adsId? (
                            <h2 className="title">Add Ads</h2>
                        ) : (
                            <h2 className="title">Edit Ads</h2>
                        )}
                        </div>
                    </div>
                </div>
               
                    <div className="add-ads-form-area">
                    <div className="container">
                        <div className="heading-area">
                            <h4>Form</h4>
                        </div>
                        <form onSubmit={
                            !adsId ?
                            this.handleSubmit.bind(this)
                            :
                            this.handleSubmitPut.bind(this)
                        } noValidate>

                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputTitle">Title<span>*</span></label>
                                    <input  onChange={this.handleChange.bind(this)} value={title} name="title" type="text" className={classnames("form-control", {'is-invalid': errors.title})} id="inputTitle" placeholder="Title" />
                                    {errors.title && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.title}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputProject">Project</label>
                                    <select onChange={this.handleChange.bind(this)} name="project" id="inputProject" className="form-control">
                                    {listSelectProjects}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputPrice">Price<span>*</span></label>
                                    <input  onChange={this.handleChange.bind(this)} value={price} name="price" type="text" className={classnames("form-control", {'is-invalid': errors.price})} id="inputPrice" placeholder="Price" />
                                    {errors.price && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.price}</div>)}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputFloor">Floors<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={nFloors} name="nFloors" type="text" className={classnames("form-control", {'is-invalid': errors.nFloors})} id="inputFloor" placeholder="Number of Floor" />
                                    {errors.nFloors && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.nFloors}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputBedrooms">Bedrooms<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={nBedRooms} name="nBedRooms" type="text" className={classnames("form-control", {'is-invalid': errors.nBedRooms})} id="inputBedrooms" placeholder="Number Of Bedrooms" />
                                    {errors.nBedRooms && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.nBedRooms}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputArea">Area<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} value={areaSqm} name="areaSqm" type="text" className={classnames("form-control", {'is-invalid': errors.areaSqm})} id="inputArea" placeholder="Area in m2" />
                                    {errors.areaSqm && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.areaSqm}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputDirection">Direction</label>
                                    <input  onChange={this.handleChange.bind(this)} value={direction} name="direction" type="text" className="form-control" id="inputDirection" placeholder="Direction" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <div className="input-group">
                                <input  onChange={this.handleChange.bind(this)} value={street} name="street" type="text" className="form-control" placeholder="Street" />
                                <input  onChange={this.handleChange.bind(this)} value={district} name="district" type="text" className="form-control" placeholder="District" />
                                <input  onChange={this.handleChange.bind(this)} value={city} name="city" type="text" className="form-control" placeholder="City" />
                                </div>
                            </div>

                            <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputContactName">Contact Name<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} value={name} name="name" type="text" className={classnames("form-control", {'is-invalid': errors.name})} id="inputContactName" placeholder="Contact Name" />
                                {errors.name && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.name}</div>)}
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputPhone">Contact Phone<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} value={phone} name="phone" type="text" className={classnames("form-control", {'is-invalid': errors.phone})} id="inputPhone"  placeholder="Phone NO"  />
                                {errors.phone && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.phone}</div>)}
                            </div>
                            </div>

                            <div className="form-group">
                                <label>Images Link</label>
                                <div className="input-group">
                                <input  onChange={this.handleChange.bind(this)} value={imageMain} name="imageMain" type="text" className={classnames("form-control", {'is-invalid': errors.imageMain})} placeholder="Main Image" />
                                {errors.imageMain && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.imageMain}</div>)}

                                <input onChange={this.handleChange.bind(this)} value={image1} name="image1" type="text" className={classnames("form-control", {'is-invalid': errors.image1})} placeholder="Other Image" />
                                {errors.image1 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.image1}</div>)}

                                <input onChange={this.handleChange.bind(this)} value={image2} name="image2" type="text" className={classnames("form-control", {'is-invalid': errors.image2})} placeholder="Other Image" />
                                {errors.image2 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.image2}</div>)}

                                <input onChange={this.handleChange.bind(this)} value={image3} name="image3" type="text" className={classnames("form-control", {'is-invalid': errors.image3})} placeholder="Other Image" />
                                {errors.image3 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.image3}</div>)}

                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Ads</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddAds;