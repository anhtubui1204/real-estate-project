import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/projects.css'
import classnames from 'classnames';

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            projectHandle:'',
            name:'',
            owner: '',
            imageURL: '',
            projectType:'',
            location:'',
            totalAreaSqm:'',
            website:'',
            startYear:'',
            endYear:'',
            errors:{}
        }
    }

    handleSubmit=(e)=> {

    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    render() {
        const {errors, projectHandle, name, owner, imageURL, projectType, location, totalAreaSqm, website, startYear, endYear}= this.state
        return (
            <div className="add-project">
                <AppNavbar1/>
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                        <h2 className="title">Add Project</h2>
                        </div>
                    </div>
                </div>
                <div className="add-project-form-area">
                <div className="container">
                    <div className="heading-area">
                        <h4>Form</h4>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} noValidate>

                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputName">Project Name<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} name="name" type="text" className={classnames("form-control", {'is-invalid': errors.name})} id="inputName" placeholder="Project Name" />
                                {errors.name && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.name}</div>)}
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputOwner">Owner<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} name="owner" type="text" className={classnames("form-control", {'is-invalid': errors.owner})} id="inputOwner" placeholder="Owner" />
                                {errors.owner && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.owner}</div>)}
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

export default AddProject;