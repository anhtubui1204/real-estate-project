import React, { Component } from 'react';
import './home.css';

class FilterSearch extends Component {
    render() {
        return (
            <div className="filter-search shadow-lg rounded">
                <h5>search properties for</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="projectNameInput">Project Name</label>
                        <input type="text" className="form-control" id="projectNameInput" placeholder="Project Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productType">Product Type</label>
                        <input type="text" className="form-control" id="productType" placeholder="Product Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adsNameInput">Ads Name</label>
                        <input type="text" className="form-control" id="adsNameInput" placeholder="Ads Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Number of Bed Rooms</label>
                        <select className="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nFloorInput">Number of Floors</label>
                        <input type="text" className="form-control" id="nFloorInput" placeholder="Number of Floors" />
                    </div>
                   
                </form>
                
            </div>
        );
    }
}

export default FilterSearch;