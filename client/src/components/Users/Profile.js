import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import { urlProfile } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';
import WithLoading from '../../utils/WithLoading';
import ViewProfile from './ViewProfile';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isAuth: true,
            profile:{},
            errors:{},
            loading: false,
        }
    }

    fetchProfile=()=>{
        const localToken = localStorage.getItem('jwtToken')
        console.log(localToken)
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
                console.log(json)
                this.setState({
                    profile: json
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
        console.log(errors)
        return (
            <div>
                <AppNavbar1/>
                <div className="container">
                    <ProfileWithLoading isLoading={loading} errors={errors} profile={profile}/>
                </div>
            </div>
        );
    }
}

export default Profile;