import React, { Component } from 'react';
import './css/filter-search.css';

// const url='/api/ads/all'
class FilterSearch extends Component {

    render() {
       
        return (
            <div className="filter-search shadow-lg rounded">
                <h5>search properties for</h5>
                <form>
                    <div className="form-group has-warning">
                        <label htmlFor="projectNameInput">Project Name</label>
                        <input name="projectName" type="text" className="form-control" id="projectNameInput" placeholder="Project Name" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="productType">Product Type</label>
                        <input type="text" className="form-control" id="productType" placeholder="Product Type" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="adsNameInput">Ads Name</label>
                        <input type="text" className="form-control" id="adsNameInput" placeholder="Ads Name" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="nBedRoomInput">Number of Bed Rooms</label>
                        <input type="text" className="form-control" id="nBedRoomInput" placeholder="Number of Bedrooms" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="nFloorInput">Number of Floors</label>
                        <input type="text" className="form-control" id="nFloorInput" placeholder="Number of Floors" />
                    </div>
                    <div className="filter-range"> 
                        <div className="form-group ">
                            <label htmlFor="priceRange">Price Range</label>
                            <input type="range" className="slider" min="0" max="5" defaultValue="0" step="0.5" id="priceRange"/>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="areRange">Area Range</label>
                            <input type="range" className="slider" min="0" max="5" defaultValue="0" step="0.5" id="areRange"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-search">SEARCH</button>
                    </div>
                   
                   
                </form>
                
            </div>
        );
    }
}

export default FilterSearch;