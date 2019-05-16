import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class ViewPrjDetail extends Component {
    render() {
        const {project}=this.props
        const prjDetail = (!project)? (
            <p>Project not found</p>
        ):(
            <div className="view-prj-detail">
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center title">
                            <h5>Project details of</h5>
                            <h1>{project.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="project-detail-page">
                    <div className="container">
                        <div className="prj-img">
                            <img src={project.imageURL} className="img-fluid" alt=""/>
                        </div>
                        <div className="detail-body border-left border-right border-bottom">
                            <div className="uploader-info mb-5">
                                <div className="row">
                                    <div className="col-md-3 d-flex align-items-center ">
                                        <img src={project.user.avatar} className="img-thumbnail" alt="avatar"
                                             style={{width:'200px', height:'180px'}}/>
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center">
                                        <ul>
                                            <li>
                                            <span>Uploader: </span> {project.user.name}
                                            </li>
                                            <li>
                                                <span>Upload Date: </span> <Moment format="YYYY/MM/DD">{project.postDate}</Moment>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="prj-info1 mb-3 border-top">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Project Type
                                        </span>
                                        <strong className="d-block">{project.projectType}</strong>
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Start Year
                                        </span>
                                        <strong className="d-block">{project.startYear}</strong>
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Area
                                        </span>
                                        {(project.totalAreaHa<5)?(
                                            <strong className="d-block">{project.totalAreaSqm} m2</strong>
                                        ):(
                                            <strong className="d-block">{project.totalAreaHa} ha</strong>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="prj-info1 mb-5 border-bottom">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Owner
                                        </span>
                                        <strong className="d-block">{project.owner}</strong>
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Location
                                        </span>
                                        <strong className="d-block">{project.location}</strong>
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-3 text-center">
                                        <span className="caption">
                                            Website
                                        </span>
                                        <strong className="d-block">{project.website}</strong>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
        return prjDetail
    }
}

export default ViewPrjDetail;