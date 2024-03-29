import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest})=>(
    <Route
        {...rest}
        render={props=> 
            localStorage.getItem("jwtToken")? (
                <Component {...props} auth={true}/>
            ):(
                <Redirect
                    to={
                        {
                            pathname: "/login",
                            state: {from: props.location}
                        }
                    }
                />
            )}
    />
)