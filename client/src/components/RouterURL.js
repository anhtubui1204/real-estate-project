import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AppNavbar1 from './layout/AppNavbar1';


class RouterURL extends Component {
    render() {
        return (
            <div>
                
                <Switch>
                
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;