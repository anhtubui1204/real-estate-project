import React, {Component} from 'react';
import AppNavbar1 from "../layout/AppNavbar1";
import {urlProject} from "../../myURL";
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

    fetchPrj=()=>{
        const {id} = this.props.match.params;

        fetch(urlProject+'/'+id)
            .then(res=>res.json())
            .then(json=>this.setState({project: json, loading: false}))
            .catch(err=>console.log(err))
    }

    componentDidMount() {
        this.setState({loading: true})
        this.fetchPrj()
    }

    render() {
        const {project, loading} = this.state;
        console.log(project)
        const PrjDetailWithLoading = WithLoading(ViewPrjDetail)

        return (
            <div className="project-detail">
                <AppNavbar1 projectActive={"nav-item active"}/>
                <PrjDetailWithLoading isLoading={loading} project={project}/>
            </div>
        );
    }
}

export default ProjectDetail;