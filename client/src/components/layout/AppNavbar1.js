import React, { Component } from 'react';
import { Link, } from "react-router-dom";

import './navbar.css';

class AppNavbar1 extends Component {
    render() {
        return (
              
            <div className="main-menu">
                <nav className="navbar navbar-expand-md navbar-dark top-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/"><strong>Shopping</strong></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>Products<span className="sr-only">(current)</span></Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/productType"}>Product Types</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={"/addProduct"}>Add Product</Link>
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