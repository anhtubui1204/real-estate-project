import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AdsList from './Ads/AdsList';



class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/ads' component={AdsList} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;