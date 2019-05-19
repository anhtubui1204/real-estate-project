import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {Link} from 'react-router-dom'
import { urlAds } from '../../myURL';

class ViewUrAds extends Component {
    
    handleDel=(id)=>{
        const localToken = localStorage.getItem('jwtToken');
        fetch(urlAds+'/delete/'+id,{
            headers:{
                'Authorization': localToken
            },
            method:'delete'      
        })
        .then(res=>res.json())
        .then(json=>{
            alert('Ad Deleted!')
            this.props.history.push('/ads')
        })
        .catch(err=>console.log(err))
    }

    render() {
        const{ads, errors} = this.props
        const urAds = (!ads || ads.length === 0) ? (
            <tr><th>Ad not found</th></tr>
        ) : (
            ads.map((ad, index)=>(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{ad.title}</td>
                    <td>{ad.project?ad.project.name:''}</td>
                    <td><Moment format="YYYY/MM/DD">{ad.postDate}</Moment></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link to={`/detailads/${ad._id}`}><button type="button" className="btn btn-info">Detail</button></Link>
                            <button onClick={this.handleDel.bind(this, ad._id)} type="button" className="btn btn-danger">Delete</button>
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
                        <th scope="col">Ad Name</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">Post Date</th>
                        <th scope="col">Detail/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {urAds}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewUrAds;