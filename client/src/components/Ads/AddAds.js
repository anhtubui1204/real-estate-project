import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import classnames from 'classnames';
import {urlAds, urlProject} from '../../myURL'
import processResponse from '../../utils/ProcessResponse';

class AddAds extends Component {
    constructor() {
        super()
        this.state = {
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
    }

    componentDidMount=()=>{
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
        .then(processResponse) //process response with status code
        .then(res=>{
            console.log(res)
            const {statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            }
            if(statusCode === 200){
                alert("Successfully Registered")
                this.props.history.push('/')
            }
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {errors,project, projects, title, price, areaSqm, nBedRooms, nFloors, direction, street, district, city, name, phone, image1, image2, image3, imageMain} = this.state;
        
        const listSelectProjects = projects.map(option=>(
            <option key={option._id} value={option._id}>{option.name}</option>
        ))
        return (
            <div className="add-ads">
                <AppNavbar1/>
                <div className="header-area ">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                        <h2 className="title">Add Ads</h2>
                        </div>
                    </div>
                </div>
                <div className="add-ads-form-area">
                    <div className="container">
                        <div className="heading-area">
                            <h4>Form</h4>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)} noValidate>

                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputTitle">Title<span>*</span></label>
                                    <input  onChange={this.handleChange.bind(this)} name="title" type="text" className={classnames("form-control", {'is-invalid': errors.title})} id="inputTitle" placeholder="Title" />
                                    {errors.title && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.title}</div>)}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputProject">Project</label>
                                    <select onChange={this.handleChange.bind(this)} name="project" id="inputProject" className="form-control">
                                    <option defaultValue="">Choose...</option>
                                    {listSelectProjects}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputPrice">Price<span>*</span></label>
                                    <input  onChange={this.handleChange.bind(this)} name="price" type="text" className={classnames("form-control", {'is-invalid': errors.price})} id="inputPrice" placeholder="Price" />
                                    {errors.price && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.price}</div>)}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputFloor">Floors<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} name="nFloors" type="text" className={classnames("form-control", {'is-invalid': errors.nFloors})} id="inputFloor" placeholder="Number of Floor" />
                                    {errors.nFloors && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.nFloors}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputBedrooms">Bedrooms<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} name="nBedRooms" type="text" className={classnames("form-control", {'is-invalid': errors.nBedRooms})} id="inputBedrooms" placeholder="Number Of Bedrooms" />
                                    {errors.nBedRooms && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.nBedRooms}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputArea">Area<span>*</span></label>
                                    <input onChange={this.handleChange.bind(this)} name="areaSqm" type="text" className={classnames("form-control", {'is-invalid': errors.areaSqm})} id="inputArea" placeholder="Area in m2" />
                                    {errors.areaSqm && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.areaSqm}</div>)}
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputDirection">Direction</label>
                                    <input  onChange={this.handleChange.bind(this)} name="direction" type="text" className="form-control" id="inputDirection" placeholder="Direction" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <div className="input-group">
                                <input  onChange={this.handleChange.bind(this)} name="street" type="text" className="form-control" placeholder="Street" />
                                <input  onChange={this.handleChange.bind(this)} name="district" type="text" className="form-control" placeholder="District" />
                                <input  onChange={this.handleChange.bind(this)} name="city" type="text" className="form-control" placeholder="City" />
                                </div>
                            </div>

                            <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputContactName">Contact Name<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} name="name" type="text" className={classnames("form-control", {'is-invalid': errors.name})} id="inputContactName" placeholder="Contact Name" />
                                {errors.name && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.name}</div>)}
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputPhone">Contact Phone<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} name="phone" type="text" className={classnames("form-control", {'is-invalid': errors.phone})} id="inputPhone"  placeholder="Phone NO"  />
                                {errors.phone && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.phone}</div>)}
                            </div>
                            </div>

                            <div className="form-group">
                                <label>Images Link</label>
                                <div className="input-group">
                                <input  onChange={this.handleChange.bind(this)} name="imageMain" type="text" className={classnames("form-control", {'is-invalid': errors.imageMain})} placeholder="Main Image" />
                                {errors.imageMain && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.imageMain}</div>)}

                                <input onChange={this.handleChange.bind(this)} name="image1" type="text" className={classnames("form-control", {'is-invalid': errors.image1})} placeholder="Other Image" />
                                {errors.image1 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.image1}</div>)}

                                <input onChange={this.handleChange.bind(this)} name="image2" type="text" className={classnames("form-control", {'is-invalid': errors.image2})} placeholder="Other Image" />
                                {errors.image2 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.image2}</div>)}

                                <input onChange={this.handleChange.bind(this)} name="image3" type="text" className={classnames("form-control", {'is-invalid': errors.image3})} placeholder="Other Image" />
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