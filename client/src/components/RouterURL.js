import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AdsList from './Ads/AdsList';
import Projects from './Projects/Projects'
import Contact from './Contact/Contact';
import Login from './Users/Login';
import SignUp from './Users/SignUp';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/ads' component={AdsList} />
                    <Route exact path='/project' component={Projects} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;