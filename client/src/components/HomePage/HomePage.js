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
           adsList:[]
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

    render() {
        const {adsList, loading} = this.state;
        console.log(adsList)
        const AdsListWithLoading = WithLoading(RecentAds);
        return (
            <div>
                <AppNavbar1/>
                <div className="header-area">
                    <Banner/>
                    <div className="container">
                    <FilterSearch/>
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