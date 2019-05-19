import React, {Component} from 'react';
import AppNavbar1 from "../layout/AppNavbar1";
import {urlProject, urlUsers} from "../../myURL";
import './css/projects.css'
import WithLoading from "../../utils/WithLoading";
import ViewPrjDetail from "./ViewPrjDetail";

class ProjectDetail extends Component {

    constructor() {
        super()
        this.state = {
            loading:false,
            project:''
        }
    }

    fetchData=()=>{
        const {id} = this.props.match.params;
        const token = localStorage.getItem('jwtToken');

        var apiRequest1 = fetch(urlProject+'/'+id)
            .then(res=>res.json())

        var apiRequest2 = token? fetch(urlUsers+'/current',{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res=>res.json()) : {}  //if token exists, then fetch data, else return {}
        
        Promise.all([apiRequest1,apiRequest2]).then((values)=>{
            this.setState({
                loading:false,
                project:values[0],
                authUser:values[1]
            })
            if (values[1] && values[1].id === values[0].user._id){   //this will check if the current loged in user is the one who posted the ads. if yes, isAuth will be set true, else it's false
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
        const {project, loading, isAuth} = this.state;
        console.log(project)
        const PrjDetailWithLoading = WithLoading(ViewPrjDetail)

        return (
            <div className="project-detail">
                <AppNavbar1 projectActive={"nav-item active"}/>
                <PrjDetailWithLoading isAuth={isAuth} isLoading={loading} project={project}/>
            </div>
        );
    }
}

export default ProjectDetail;