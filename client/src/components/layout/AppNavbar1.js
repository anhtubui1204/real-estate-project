import React, { Component } from 'react';
import { Link, } from "react-router-dom";

import './navbar.css';

class AppNavbar1 extends Component {
    render() {
        return (
              
            <div className="main-menu">
                <nav className="navbar navbar-expand-md navbar-dark top-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/"><strong>Real Estate</strong></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/ads"}>Properties</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/project"}>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                                
                            </ul>
                        </div>	
                    </div>
                </nav>
            </div>
            
            
        );
    }
}

export default AppNavbar1;