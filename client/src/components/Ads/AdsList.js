import React, { Component } from 'react';
import './css/ads.css';
import AppNavbar1 from '../layout/AppNavbar1';
import { urlAds } from '../../myURL';
import pagination from '../../utils/pagination';
import WithLoading from '../../utils/WithLoading'
import ViewAdsList from './ViewAdsList';
import numFormatter from '../../utils/numFormatter';

class AdsList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           adsList:[],
           searchName:'',
           searchProjectName:'',
           searchPrice: 1000000,
           searchArea:3000,
           searchBed:'',
           n_ads_per_page: 6,
           numPage: 1,
           

        }
    }

    handleSearch=(e)=>{
        e.preventDefault();
        const {adsList, searchArea, searchBed, searchName, searchPrice, searchProjectName} = this.state;
        this.setState({
            adsList:[...adsList]
                .filter(
                    ads=>
                    ads.title.toLowerCase().indexOf(searchName.toLowerCase())!==-1
                    &&
                    (ads.project && ads.project.name.toLowerCase().indexOf(searchProjectName.toLowerCase())!==-1)
                    &&
                    ads.nBedRooms.toString().indexOf(searchBed.toString())!==-1
                    &&
                    parseInt(ads.price)<searchPrice
                    &&
                    parseInt(ads.areaSqm)<searchArea
                )
        })
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleRefresh=(e)=>{
        e.preventDefault();
        this.setState({loading: true})
        this.fetchAds()
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
        const {adsList, n_ads_per_page, numPage, loading, searchArea, searchPrice} = this.state;
        
        //load Pagination
        const adsListPaginated = pagination(adsList, n_ads_per_page, numPage);
        const {paginatedList, pages} = adsListPaginated;
        var btnPages = pages.map(page=> (
            <button key={page} type="button" className="btn btn-light"  onClick={this.setPage.bind(this, page)}>{page}.</button>
        ))

        //apply loading spinner
        const ViewAdsWithLoading = WithLoading(ViewAdsList);

        return (
            <div className="ads-list">
                <AppNavbar1 adsActive={"nav-item active"}/>
                <div className="header-area">
                    <div className="jumbotron text-center header-content">
                        <h1 className="display-4">Featured Ads</h1>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                </div>
                <div className="search-bar">
                    <div className="container">
                        <div className="search-form">
                            <form >
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
                                            <input onChange={this.handleChange.bind(this)} name="searchPrice" type="range" className="slider" min="0" max="1000000" defaultValue={searchPrice} step="100" id="priceRange"/>
                                        </div>
                                        <div className="range-wrapper">
                                            <span>$: </span><span> from 0 to </span><span>{numFormatter(searchPrice)}</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="filter-range"> 
                                        <div className="form-group ">
                                            <label htmlFor="areaRange">Area Range</label>
                                            <input onChange={this.handleChange.bind(this)} name="searchArea" type="range" className="slider" min="0" max="3000" defaultValue={searchArea} step="10" id="areaRange"/>
                                        </div>
                                        <div className="range-wrapper">
                                            <span>m2: </span><span> from 0 to </span><span>{numFormatter(searchArea)}</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="btn-area">
                                    <button onClick={this.handleSearch.bind(this)} className="btn btn-search">SEARCH</button>
                                    <button onClick={this.handleRefresh.bind(this)} className="btn btn-refresh"><i className="fas fa-sync"></i></button>
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