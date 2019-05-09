import React, { Component } from 'react';
import { Link, } from "react-router-dom";

import './navbar.css';

class AppNavbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isAuth: false
        };
        
      }

    signOut=(e)=> {
        e.preventDefault();
        localStorage.removeItem('jwtToken')
        alert('Successfully Logged out')
        this.setState({isAuth: false})
    }
    
    render() {
        const {homeActive, adsActive, projectActive, contactActive, loginActive} = this.props
        const Login = (
            <li className={loginActive}>
                <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
        )
        const Account = (
            <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Your Account
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={"/profile"}>Your Profile</Link>
                    <Link className="dropdown-item" to={"/"}>Your Ads/Projects</Link>
                    <div className="dropdown-divider" />
                    <div className="dropdown-item" onClick={this.signOut.bind(this)}>Sign Out</div>
                </div>
            </li>
        )
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
                                <li className={homeActive}>
                                    <Link className="nav-link" to={"/"}>Home</Link>
                                </li>
                                <li className={adsActive}>
                                    <Link className="nav-link" to={"/ads"}>Properties</Link>
                                </li>
                                <li className={projectActive}>
                                    <Link className="nav-link" to={"/project"}>Projects</Link>
                                </li>
                                <li className={contactActive}>
                                    <Link className="nav-link" to={"/contact"}>Contact</Link>
                                </li>
                                {localStorage.getItem('jwtToken')? Account : Login}
                            </ul>
                        </div>	
                    </div>
                </nav>
            </div>
            
            
        );
    }
}

export default AppNavbar1;