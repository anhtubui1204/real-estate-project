import React, { Component } from 'react';
import {Link} from "react-router-dom";
import numFormatter from "../../utils/numFormatter";

class SinglePrj extends Component {
    render() {
        const{prj, className}=this.props
        const{name, imageURL, totalAreaSqm, totalAreaHa, startYear, _id} = prj;

        return (
            <div className={className}>
                <div className="prj-item">
                    <div className="prj-media">
                        <img className="img-responsive" src={imageURL} alt="img"/>
                        <div className="overlay d-flex justify-content-center">
                            <div className="text-center prj-content">
                                <div className="prj-title">
                                <h3>{name}</h3>
                                </div>
                                <div className="prj-brief">
                                    <div className="area-section mb-1">
                                    <span>Area: </span>{(totalAreaHa < 5)? (
                                        <span>{numFormatter(totalAreaSqm)} m2</span>
                                    ):(
                                        <span>{numFormatter(totalAreaHa)} ha</span>
                                    )}
                                    </div>
                                    <div className="startYr-section mb-3">
                                    <span>Start Year: </span><span>{startYear}</span>
                                    </div>
                                </div>
                                <Link to={`/detailprj/`+_id}><button type="button" className="btn btn-dark btn-sm">Detail</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePrj;