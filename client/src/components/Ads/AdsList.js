import React, { Component } from 'react';
import './css/ads.css';
import AppNavbar1 from '../layout/AppNavbar1';
import { urlAds } from '../../myURL';

class AdsList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           adsList:[],
           searchName:'',
           searchProjectName:'',
           searchPrice:'',
           searchArea:'',
           searchBed:''

        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    fetchAds=()=>{
        fetch(urlAds+'/all')
        .then(res => res.json())
        .then(json => 
            this.setState({ adsList: json , loading:false})
            )
    }

    componentDidMount=()=>{
        this.setState({loading: true})
        this.fetchAds()
    }

    render() {
        const {adsList} = this.state;
        console.log(adsList)
        return (
            <div className="ads-list">
                <AppNavbar1 adsActive={"nav-item active"}/>
                <div className="header-area">
                <div className="jumbotron text-center header-content">
                    <h1 className="display-4">Featured Ads</h1>
                    {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
                </div>
                <div className="search-bar">
                    <div className="container">
                        <div className="search-form">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <input
                                            onChange={this.handleChange.bind(this)}
                                            type="text"
                                            className="form-control"
                                            name="searchName"
                                            placeholder="Search by Ads Name"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <input
                                            onChange={this.handleChange.bind(this)}
                                            type="text"
                                            className="form-control"
                                            name="searchProjectName"
                                            placeholder="Search by Project Name"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <input
                                            onChange={this.handleChange.bind(this)}
                                            type="text"
                                            className="form-control"
                                            name="searchBed"
                                            placeholder="Search by Number of Bedrooms"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="filter-range"> 
                                        <div className="form-group ">
                                            <label htmlFor="priceRange">Price Range</label>
                                            <input type="range" className="slider" min="0" max="5" defaultValue="0" step="0.5" id="priceRange"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="filter-range"> 
                                        <div className="form-group ">
                                            <label htmlFor="priceRange">Price Range</label>
                                            <input type="range" className="slider" min="0" max="5" defaultValue="0" step="0.5" id="priceRange"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="btn-area">
                                    <button className="btn btn-search">SEARCH</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AdsList;