import React, { Component } from 'react';

class SinglePrj extends Component {
    render() {
        const{prj, className}=this.props
        const{name, imageURL, totalAreaSqm, startYear} = prj;

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
                                    <span>Area: </span><span>{totalAreaSqm} m2</span>
                                    </div>
                                    <div className="startYr-section mb-3">
                                    <span>Start Year: </span><span>{startYear}</span>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-dark btn-sm">Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePrj;