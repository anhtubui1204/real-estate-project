import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';



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