import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {Link} from 'react-router-dom'
import { urlProject } from '../../myURL';

class ViewUrPrj extends Component {
    
    handleDel=(id)=>{
        const localToken = localStorage.getItem('jwtToken');
        fetch(urlProject+'/delete/'+id,{
            headers:{
                'Authorization': localToken
            }      
        })
        .then(res=>res.json())
        .then(json=>alert('Project Deleted!'))
        .catch(err=>console.log(err))
    }

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
                            <Link to={`/detailprj/${project._id}`}><button type="button" className="btn btn-info">Detail</button></Link>
                            <button onClick={this.handleDel.bind(this, project._id)} type="button" className="btn btn-danger">Delete</button>
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