import React, {Component} from 'react';
import AppNavbar1 from "./AdsList";
import {urlAds} from "../../myURL";
import WithLoading from "../../utils/WithLoading";
import ViewAdsDetail from "./ViewAdsDetail";

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
        const{ads}=this.state

        const AdsDetailWithLoading = WithLoading(ViewAdsDetail)
        return (
            <div className="ads-detail">
                <AppNavbar1 adsActive={"nav-item active"}/>
            </div>
        );
    }
}

export default AdsDetail;