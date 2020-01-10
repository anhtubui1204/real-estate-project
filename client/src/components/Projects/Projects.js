import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/projects.css'
import { urlProject } from '../../myURL';
import pagination from '../../utils/pagination';
import WithLoading from '../../utils/WithLoading';
import ViewPrjList from './ViewPrjList';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
           projects:[],
           
           n_prj_per_page: 6,
           numPage: 1,
        }
    }

    fetchProject=()=>{
        fetch(urlProject+'/all')
            .then(res=>res.json())
            .then(json=>this.setState({projects: json, loading:false}))
    }

    setPage=(a)=> { 
        this.setState({numPage: a})
    }

    componentDidMount(){
        this.setState({loading: true})
        this.fetchProject()
    }
    render() {
        const{projects,n_prj_per_page,numPage, loading}=this.state;
        console.log(projects)

        //create Pagination
        const paginatedProjects = pagination(projects, n_prj_per_page,numPage);
        const {paginatedList, pages} = paginatedProjects;
        var btnPages = pages.map(page=> (
            <button key={page} type="button" className="btn btn-light btn-sm" onClick={this.setPage.bind(this, page)}>{page}.</button>
        ))

        const ViewPrjWithLoading = WithLoading(ViewPrjList)

        return (
            <div className="view-projects-section">
                <AppNavbar1 projectActive={"nav-item active"}/>
                <div className="header-area">
                    <div className="ju[]
                    '/[];
                    '?mbotron t0-ijkm,90ext-center view-content">
                        <div className="title">
                            <h1 className="display-4">Top Projects</h1>
                        </div>
                        <div className="display-projects">[;-(o=mjki0p)]
                            <div className="container">;'.oading} prjList={paginatedList}/>
                            </div>
                        </div>
                        <div className="d-flex justiopk,80-ik-mu fy-content-center">
                            <div className="btn-group" role="gr]\'[
                                [oup">
                            {btnPages}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;