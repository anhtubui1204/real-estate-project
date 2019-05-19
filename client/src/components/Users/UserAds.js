import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css'
import { urlAds } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';
import WithLoading from '../../utils/WithLoading';
import ViewUrAds from './ViewUrAds';

class UserAds extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
           ads:[],
           n_ads_per_page: 6,
           numPage: 1,
           errors:{}
        }
    }

    fetchAd=()=>{
        const localToken = localStorage.getItem('jwtToken')
        fetch(urlAds,{
            headers:{
                'Authorization': localToken
            }    
        })
        .then(processResponse)
        .then(res=>{
            const{statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            } else {
                this.setState({
                    ads: json,
                   
                })
            }
            this.setState({loading:false})
        })

    }

    componentDidMount=()=>{
        this.setState({loading: true})
        this.fetchAd()
    }

    render() {
        const{ads, loading, errors}=this.state
        console.log(ads)
        const UrAdWithLoading = WithLoading(ViewUrAds)
        
        return (
            <div className="user-project">
                <AppNavbar1 />
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                            <h2 className="title">Your Ad</h2>
                        </div>
                    </div>
                </div>
                <div className="display-items my-5">
                    <div className="container">
                    <UrAdWithLoading isLoading={loading} errors={errors} ads={ads} />
                    </div>
                </div>

            </div>
        );
    }
}

export default UserAds;