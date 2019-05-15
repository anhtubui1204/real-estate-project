import React, {Component} from 'react';

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
                            <img src={project.imageURL} className="img-fluid"/>
                        </div>
                        <div className="detail-body border-left border-right border-bottom">
                            <div className="uploader-info mb-5">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={project.user.avatar} className="img-thumbnail" alt="avatar"
                                             style={{width:'200px', height:'180px'}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <ul>
                                            <li>
                                            <span>Name: </span> {project.user.name}
                                            </li>
                                            <li>
                                                <span>Upload : </span> {project.postDate}
                                            </li>
                                        </ul>
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