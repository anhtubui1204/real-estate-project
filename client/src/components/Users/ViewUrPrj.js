import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


class ViewUrPrj extends Component {
    render() {
        const{projects, errors} = this.props
        const urPrjs = (!projects || projects.length === 0) ? (
            <p>Project not found</p>
        ) : (
            projects.map((project, index)=>(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{project.name}</td>
                    <td>{project.projectHandle}</td>
                    <td><Moment format="YYYY/MM/DD">{project.postDate}</Moment></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info">Detail</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            ))
        )
        return(
            <div className="table-prj table-responsive">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">Project Handle</th>
                        <th scope="col">Post Date</th>
                        <th scope="col">Detail/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {urPrjs}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewUrPrj;