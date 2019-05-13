import React, { Component } from 'react';
import './css/ads.css';
import AppNavbar1 from '../layout/AppNavbar1';
import { urlAds } from '../../myURL';
import pagination from '../../utils/pagination';
import WithLoading from '../../utils/WithLoading'
import ViewAdsList from './ViewAdsList';

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
           searchBed:'',
           n_ads_per_page: 6,
           numPage: 1

        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    setPage=(a)=> { 
        this.setState({numPage: a})
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
        const {adsList, n_ads_per_page, numPage, loading} = this.state;

        const adsListPaginated = pagination(adsList, n_ads_per_page, numPage);
        console.log(adsListPaginated)
        const {paginatedList, pages} = adsListPaginated;
        var btnPages = pages.map(page=> (
            <button key={page} type="button" className="btn btn-light"  onClick={this.setPage.bind(this, page)}>{page}.</button>
        ))

        const ViewAdsWithLoading = WithLoading(ViewAdsList);
        
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
                <div className="properties-area">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h2>Our Top properties</h2>
                            <p>Choose your most favorite place</p>
                        </div>
                        <div className="view-ads-list">
                            <ViewAdsWithLoading isLoading={loading} adsList={paginatedList}/>
                        </div>
                        <div className="pagination-btn d-flex justify-content-center">
                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                {btnPages}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AdsList;