import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
            loading: false
        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj) 
    }

    handleSubmit=()=> {
        
    }

    render() {
        return (
            <div>
                <AppNavbar1 loginActive="nav-item active"/>
                <div className="login-section d-flex justify-content-center align-items-center bg-dark-trans">
                        <div className="login-inner">
                            <h2 className="form-title">Account Login</h2>
                            <form>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="form-btn">
                                <button  type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                            <div className="signup">
                                <Link onClick={this.handleSubmit.bind(this)} to={"/signup"} style={{color:"#ffffff"}}>Sign Up</Link>
                            </div>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;