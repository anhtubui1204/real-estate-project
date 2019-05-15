import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AdsList from './Ads/AdsList';
import Projects from './Projects/Projects'
import Contact from './Contact/Contact';
import Login from './Users/Login';
import SignUp from './Users/SignUp';
import Profile from './Users/Profile';
import { PrivateRoute } from '../utils/PrivateRoute';
import AddEditProfile from '../components/Users/AddEditProfile'
import AddAds from './Ads/AddAds';
import AddProject from './Projects/AddProject';
import ProjectDetail from "./Projects/ProjectDetail";
import AdsDetail from "./Ads/AdsDetail";

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/ads'} component={AdsList} />
                    <Route exact path={'/detailads/:id'} component={AdsDetail} />
                    <Route exact path={'/project'} component={Projects} />
                    <Route exact path={'/detailprj/:id'} component={ProjectDetail} />
                    <Route exact path={'/contact'} component={Contact} />
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/signup'} component={SignUp} />
                    <PrivateRoute exact path={'/profile'} component={Profile} />
                    <PrivateRoute exact path={'/addprofile'} component={AddEditProfile}/>
                    <PrivateRoute exact path={'/addads'} component={AddAds}/>
                    <PrivateRoute exact path={'/addproject'} component={AddProject}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;