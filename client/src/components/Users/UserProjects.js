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
           errors:{},
           isRefresh: false
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

    handleDel=(id)=>{
        const localToken = localStorage.getItem('jwtToken');
        console.log(id)
        fetch(urlProject+ '/delete/'+id,{
            headers:{
                'Authorization': localToken
            },
            method:'delete'      
        })
        .then(res=>res.json())
        .then(json=>{
            alert(json.msg)
            this.props.history.push('/project')
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
            <div className="user-project">
                <AppNavbar1 />
                <div className="header-area">
                    <div className="container h-100 align-items-center d-flex justify-content-center">
                        <div className="w-50 text-center">
                            <h2 className="title">Your Project</h2>
                        </div>
                    </div>
                </div>
                <div className="display-items my-5">
                    <div className="container"><UrProjectWithLoading isLoading={loading} errors={errors} projects={projects} onDelete={this.handleDel}/></div>
                </div>

            </div>
        );
    }
}

export default UserProjects;