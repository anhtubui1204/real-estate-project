import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <AppNavbar1/>
                <div className="login-section d-flex justify-content-center align-items-center bg-dark-trans">
                  
                        <div className="login-inner">
                            <h2 className="form-title">Account Login</h2>
                            <form>
                                <div className="form-group">
                                    <input className="input-form" type="text" name="name" placeholder="Name of user"/>
                                </div>
                                <div className="form-group">
                                    <input className="input-form" type="text" name="username" placeholder="User Name"/>
                                </div>
                                <div className="form-group">
                                    <input className="input-form" type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input className="input-form" type="password" name="password2" placeholder="Please confirm password"/>
                                </div>
                                <div className="form-btn">
                                <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                            <div className="signup">
                                <Link style={{color:"#ffffff"}}>Sign Up</Link>
                            </div>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;