import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css'
import { urlProject } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';
import WithLoading from '../../utils/WithLoading';
import ViewUrPrj from './ViewUrPrj';

class UserProjects extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
           projects:[],
           n_prj_per_page: 6,
           numPage: 1,
           errors:{}
        }
    }

    fetchProject=()=>{
        const localToken = localStorage.getItem('jwtToken')
        fetch(urlProject,{
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
                    projects: json,
                    
                })
            }
            this.setState({loading:false})
        })
        .catch(err=>console.log(err))

    }

    componentDidMount=()=>{
        this.setState({loading: true})
        this.fetchProject()
    }

    render() {
        const{projects, loading, errors}=this.state
        console.log(projects)
        const UrProjectWithLoading = WithLoading(ViewUrPrj)
        
        return (
            <div className="user-project p-5">
                <AppNavbar1 />
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                            <h2 className="title">Your Project</h2>
                        </div>
                    </div>
                </div>
                <div className="display-items my-5">
                    <UrProjectWithLoading isLoading={loading} errors={errors} projects={projects} refresh={this.fetchProject.bind(this)} />
                </div>

            </div>
        );
    }
}

export default UserProjects;