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
import RecentAds from './RecentAds';
import WithLoading from '../../utils/WithLoading';



class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           adsList:[
            //   {
            //       title:'',
            //       price:'',
            //       areaSqm:'',
            //       nBedRooms:0,
            //       nFloors:0,
            //       direction:'',
            //       address:{
            //         street:'',
            //         district:'',
            //         city:''
            //       },
            //       contactInfo:{
            //           name:'',
            //           phone:''
            //       },
            //       postDate:'',
            //       imageURL:{
            //         imageMain:'',
            //         otherImages:{
            //             image1:'',
            //             image2:'',
            //             image3:''
            //         }
            //       },
            //       user:{
            //           _id:'',
            //           name:'',
            //           avatar:''
            //       },
            //       project:{
            //           name:'',
            //           owner:'',
            //           _id:''
            //       }
            //   }
           ]
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
                <div className="header-area">
                    <AppNavbar1/>
                    <Banner/>
                    <div className="container">
                    <FilterSearch/>
                    </div>
                </div>
                <div className="recent-properties">
                        {/* <RecentAds adsList={adsList}/> */}
                        <AdsListWithLoading isLoading={loading} adsList={adsList}/>
                </div>
            </div>
        );
    }
}



export default HomePage;