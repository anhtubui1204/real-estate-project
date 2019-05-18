import React, {Component} from 'react';

import {urlAds, urlUsers} from "../../myURL";
import WithLoading from "../../utils/WithLoading";
import ViewAdsDetail from "./ViewAdsDetail";
import AppNavbar1 from "../layout/AppNavbar1";



class AdsDetail extends Component {

    constructor() {
        super()
        this.state = {
            loading:false,
            ads:'',
            isAuth: false,
            authUser:{}
        }
    }

    fetchData=()=>{
        const {id} = this.props.match.params;
        const token = localStorage.getItem('jwtToken');

        var apiRequest1 = fetch(urlAds+'/'+id)
            .then(res=>res.json())

        var apiRequest2 = token? fetch(urlUsers+'/current',{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res=>res.json()) : {}
        
        Promise.all([apiRequest1,apiRequest2]).then((values)=>{
            this.setState({
                loading:false,
                ads:values[0],
                authUser:values[1]
            })
            if (values[1] && values[1].id === values[0].user._id){
                this.setState({isAuth: true})
            } else {
                this.setState({isAuth: false})
            }
        });
    }

    componentDidMount() {
        this.setState({loading: true})
        this.fetchData()
    }
 
    render() {
        const{ads, loading, isAuth}=this.state
        const AdsDetailWithLoading = WithLoading(ViewAdsDetail)
        
        return (
            <div className="ads-detail">
                <AppNavbar1 adsActive={"nav-item active"}/>
                <AdsDetailWithLoading isLoading={loading} ads={ads} isAuth={isAuth}/>
            </div>
        );
    }
}

export default AdsDetail;