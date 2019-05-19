import React, { Component } from 'react';
import './css/filter-search.css';
import numFormatter from '../../utils/numFormatter';
import {Link} from 'react-router-dom'
// const url='/api/ads/all'
class FilterSearch extends Component {

    render() {
        const {onChange, searchAdsName, searchArea, searchNBed, searchPrice, searchPrjName} = this.props
        return (
            <div className="filter-search shadow-lg rounded">
                <h5>search properties for</h5>
                <form>
                    <div className="form-group has-warning">
                        <label htmlFor="projectNameInput">Project Name</label>
                        <input onChange={onChange.bind(this)} name="searchPrjName" type="text" className="form-control" id="projectNameInput" placeholder="Project Name" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="adsNameInput">Ads Name</label>
                        <input onChange={onChange.bind(this)} name="searchAdsName" type="text" className="form-control" id="adsNameInput" placeholder="Ads Name" />
                    </div>
                    <div className="form-group has-warning">
                        <label htmlFor="nBedRoomInput">Number of Bed Rooms</label>
                        <input onChange={onChange.bind(this)} name="searchNBed"type="text" className="form-control" id="nBedRoomInput" placeholder="Number of Bedrooms" />
                    </div>
                    
                    <div className="filter-range"> 
                        <div className="form-group ">
                            <label htmlFor="priceRange">Price Range</label>
                            <input onChange={onChange.bind(this)} name="searchPrice" type="range" className="slider" min="0" max="1000000" defaultValue={searchPrice} step="100" id="priceRange"/>
                        </div>
                        <div className="range-wrapper">
                            <span>$: </span><span> from 0 to </span><span>{numFormatter(searchPrice)}</span>
                        </div>
                    </div>
                    <div className="filter-range"> 
                        <div className="form-group ">
                            <label htmlFor="areaRange">Area Range</label>
                            <input onChange={onChange.bind(this)} name="searchArea" type="range" className="slider" min="0" max="3000" defaultValue={searchArea} step="10" id="areaRange"/>
                        </div>
                        <div className="range-wrapper">
                            <span>m2: </span><span> from 0 to </span><span>{numFormatter(searchArea)}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to= {{
                            pathname:'/ads',
                            state:{
                                searchAdsName: searchAdsName,
                                searchArea: searchArea,
                                searchNBed: searchNBed,
                                
                                searchPrice: searchPrice,
                                searchPrjName: searchPrjName
                            }
                        }}>
                        <button className="btn btn-search">SEARCH</button>
                        </Link>
                    </div>
                   
                   
                </form>
                
            </div>
        );
    }
}

export default FilterSearch;