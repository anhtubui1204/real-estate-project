import React, { Component} from 'react';
// import { Spinner } from 'reactstrap';
import './css/home.css';
import {urlAds} from '../../myURL';
// import {
//     unstable_createResource,
//   } from "react-cache";

import AppNavbar1 from '../layout/AppNavbar1';
import Banner from './Banner';
import FilterSearch from './FilterSearch';
import RecentAds from '../Ads/RecentAds';
import WithLoading from '../../utils/WithLoading';



class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           adsList:[],
           searchPrjName:'',
           searchAdsName:'',
           searchNBed:'',
           
           searchPrice:1000000,
           searchArea:3000
        }
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

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    render() {
        const {adsList, loading, searchAdsName, searchArea, searchNBed, searchPrice, searchPrjName} = this.state;
        
        const AdsListWithLoading = WithLoading(RecentAds);
        return (
            <div>
                <AppNavbar1 homeActive={"nav-item active"}/>
                <div className="header-area">
                    <Banner/>
                    <div className="container">
                    <FilterSearch 
                        searchAdsName={searchAdsName}
                        searchArea={searchArea}
                        searchNBed={searchNBed}
                        
                        searchPrice={searchPrice}
                        searchPrjName={searchPrjName}
                        onChange={this.handleChange.bind(this)}
                     />
                    </div>
                </div>
                <div className="recent-properties ">
                    <AdsListWithLoading isLoading={loading} adsList={adsList}/>
                </div>
            </div>
        );
    }
}



export default HomePage;