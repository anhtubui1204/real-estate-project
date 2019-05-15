import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import { urlProfile } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';
import WithLoading from '../../utils/WithLoading';
import ViewProfile from './ViewProfile';
import './css/users.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isAuth: false,
            profile:{},
            errors:{},
            loading: false,
        }
    }

    fetchProfile=()=>{
        const localToken = localStorage.getItem('jwtToken')
        
        fetch(urlProfile, {
            headers:{
                'Authorization': localToken
            }      
        })
        .then(processResponse)//process response with status code
        .then(res=>{
            const{statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            } else {

                this.setState({
                    profile: json,
                    isAuth: true
                })
            }
            this.setState({loading:false})
        }) 
        .catch(err=> {
            console.log(err)
        })
    }

    componentDidMount =()=> {
        this.setState({loading: true})
        this.fetchProfile();
    }

    render() {
        const{profile, errors, loading}=this.state;
        const ProfileWithLoading = WithLoading(ViewProfile)
        
        return (
            <div>
                <AppNavbar1/>
                <div className="py_80 bg_milk full_width">
                <div className="container">
                    <header className="header-section d-flex justify-content-center">
                        <h2 className="title">
                            My Profile
                        </h2>
                    </header>
                    <div className="display-profile d-flex justify-content-center">
                        <ProfileWithLoading isLoading={loading} errors={errors} profile={profile}/>
                    </div>
                </div>
                
                </div>
            </div>
        );
    }
}

export default Profile;