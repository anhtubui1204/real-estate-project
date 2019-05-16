import React, {Component} from 'react';

import {urlAds} from "../../myURL";
import WithLoading from "../../utils/WithLoading";
import ViewAdsDetail from "./ViewAdsDetail";
import AppNavbar1 from "../layout/AppNavbar1";

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