import React, {Component} from 'react';

import {urlAds, urlUsers} from "../../myURL";
import WithLoading from "../../utils/WithLoading";
import ViewAdsDetail from "./ViewAdsDetail";
import AppNavbar1 from "../layout/AppNavbar1";
import checkAuth from '../../utils/checkAuth';

class AdsDetail extends Component {

    constructor() {
        super()
        this.state = {
            loading:false,
            ads:''
        }
    }

    fetchAds=()=>{
        const {id} = this.props.match.params;
        fetch(urlAds+'/'+id)
            .then(res=>res.json())
            .then(json=>this.setState({ads: json, loading: false}))
            .catch(err=>console.log(err))
    }

    componentDidMount() {
        this.setState({loading: true})
        this.fetchAds()
    }


    render() {
        const{ads, loading}=this.state
        console.log(ads)
       

        const AdsDetailWithLoading = WithLoading(ViewAdsDetail)
        return (
            <div className="ads-detail">
                <AppNavbar1 adsActive={"nav-item active"}/>
                <AdsDetailWithLoading isLoading={loading} ads={ads}/>
            </div>
        );
    }
}

export default AdsDetail;