import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/projects.css'
import classnames from 'classnames';
import { urlProject } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            prjId:'',
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

    componentDidMount(){
        if(this.props.location.state){
            const {project} = this.props.location.state;
            
            this.setState({
                projectHandle: project.projectHandle? project.projectHandle : '' ,
                name:project.name? project.name : '',
                owner: project.owner? project.owner : '',
                imageURL: project.imageURL? project.imageURL : '',
                projectType:project.projectType? project.projectType : '',
                location:project.location? project.location : '',
                totalAreaSqm:project.totalAreaSqm? project.totalAreaSqm : '',
                website:project.website? project.website : '',
                startYear:project.startYear? project.startYear : '',
                endYear:project.endYear? project.endYear : '',
                prjId:project._id? project._id : ''
            })
        }
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        const localToken = localStorage.getItem('jwtToken')
        const {projectHandle, name, owner, imageURL, projectType, location, totalAreaSqm, website, startYear, endYear}= this.state
        fetch(urlProject, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localToken
            },
            method: 'post',
            body: JSON.stringify({
                name: name,
                owner: owner,
                imageURL: imageURL,
                projectType: projectType,
                location: location,
                totalAreaSqm: totalAreaSqm,
                startYear: startYear,
                endYear: endYear,
                website: website,
                projectHandle: projectHandle
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
                this.props.history.push('/project')
            }
        })
        .catch(err=> console.log(err))
    }

    handleSubmitPut=(e)=> {
        e.preventDefault();
        const {prjId} = this.state
        const localToken = localStorage.getItem('jwtToken')
        const {projectHandle, name, owner, imageURL, projectType, location, totalAreaSqm, website, startYear, endYear}= this.state
        fetch(urlProject+'/update/'+prjId, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localToken
            },
            method: 'put',
            body: JSON.stringify({
                name: name,
                owner: owner,
                imageURL: imageURL,
                projectType: projectType,
                location: location,
                totalAreaSqm: totalAreaSqm.toString(),
                startYear: startYear.toString(),
                endYear: endYear.toString(),
                website: website,
                projectHandle: projectHandle
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
                this.props.history.push('/project')
            }
        })
        .catch(err=> console.log(err))
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    

    render() {
        const {errors, projectHandle, name, owner, imageURL, projectType, location, totalAreaSqm, website, startYear, endYear, prjId}= this.state
        
        return (
            <div className="add-project">
                <AppNavbar1/>
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                        
                        {!prjId? (
                            <h2 className="title">Add Project</h2>
                        ) : (
                            <h2 className="title">Edit Project</h2>
                        )}
                         
                        </div>
                    </div>
                </div>
                <div className="add-project-form-area">
                <div className="container">
                    <div className="heading-area">
                        <h4>Form</h4>
                    </div>
                    <form onSubmit={
                        !prjId? this.handleSubmit.bind(this) : this.handleSubmitPut.bind(this)
                        } noValidate>

                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputName">Project Name<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} value={name} name="name" type="text" className={classnames("form-control", {'is-invalid': errors.name})} id="inputName" placeholder="Project Name" />
                                {errors.name && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.name}</div>)}
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputHandle">Project Handle<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} value={projectHandle} name="projectHandle" type="text" className={classnames("form-control", {'is-invalid': errors.projectHandle})} id="inputHandle" placeholder="Project Handle" />
                                {errors.projectHandle && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.projectHandle}</div>)}
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputOwner">Owner<span>*</span></label>
                                <input  onChange={this.handleChange.bind(this)} value={owner} name="owner" type="text" className={classnames("form-control", {'is-invalid': errors.owner})} id="inputOwner" placeholder="Owner" />
                                {errors.owner && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.owner}</div>)}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Address<span>*</span></label>
                            <input  onChange={this.handleChange.bind(this)} value={location} name="location" type="text" className={classnames("form-control", {'is-invalid': errors.location})} placeholder="Location" />
                            {errors.location && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.location}</div>)}
                        </div>

                        <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputProjectType">Project Type<span>*</span></label>
                            <input  onChange={this.handleChange.bind(this)} value={projectType} name="projectType" type="text" className={classnames("form-control", {'is-invalid': errors.projectType})} id="inputProjectType" placeholder="Type Of Project" />
                            {errors.projectType && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.projectType}</div>)}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputArea">Area (m2)<span>*</span></label>
                            <input  onChange={this.handleChange.bind(this)} value={totalAreaSqm} name="totalAreaSqm" type="text" className={classnames("form-control", {'is-invalid': errors.totalAreaSqm})} id="inputArea" placeholder="Total Area in m2" />
                            {errors.totalAreaSqm && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.totalAreaSqm}</div>)}
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputStartYear">Start Year<span>*</span></label>
                            <input  onChange={this.handleChange.bind(this)} value={startYear} name="startYear" type="text" className={classnames("form-control", {'is-invalid': errors.startYear})} id="inputStartYear"  placeholder="Start Year"  />
                            {errors.startYear && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.startYear}</div>)}
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputEndYear">End Year</label>
                            <input  onChange={this.handleChange.bind(this)} value={endYear} name="endYear" type="text" className={classnames("form-control", {'is-invalid': errors.endYear})} id="inputEndYear"  placeholder="End Year"  />
                            {errors.endYear && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.endYear}</div>)}
                        </div>
                        </div>

                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputImage">Image Link<span>*</span></label>
                            <input  onChange={this.handleChange.bind(this)} value={imageURL} name="imageURL" type="text" className={classnames("form-control", {'is-invalid': errors.imageURL})} id="inputImage" placeholder="Image Link" />
                            {errors.imageURL && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.imageURL}</div>)}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWeb">Website</label>
                            <input  onChange={this.handleChange.bind(this)} value={website} name="website" type="text" className={classnames("form-control", {'is-invalid': errors.website})} id="inputWeb" placeholder="Website Link" />
                            {errors.website && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.website}</div>)}
                        </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Add Project</button>
                    </form>
                </div>
            </div>
            </div>
            
        );
    }
}

export default AddProject;