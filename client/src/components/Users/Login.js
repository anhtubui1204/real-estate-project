import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';

import processResponse from '../../utils/ProcessResponse';
import classnames from 'classnames';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
            success: false,
            token: "",
            errors:{}
        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        // e.target.className += " was-validated";
        const{email, password}=this.state;
        const url = '/api/users/login';
        fetch(url, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method:'post',
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(processResponse) //process response with status code
        .then(res => {
            const {statusCode, json} = res;
            if(statusCode !== 200){
                this.setState({errors: json})
            }
            if(statusCode === 200){
                console.log(json)
                this.setState({
                    success: json.success,
                    token: json.token,
                    errors:{}
                })
                localStorage.setItem('jwtToken', json.token)
                this.props.history.push('/')
                alert('Login Successful')
            }
            }
        )
        .catch(err=> console.log(err))

    }

    render() {
        const {errors} = this.state;
        console.log(errors)
        return (
            
            <div>
                <AppNavbar1 loginActive="nav-item active"/>
                <div className="login-section d-flex justify-content-center align-items-center bg-dark-trans">
                        <div className="login-inner">
                            <h2 className="form-title">Account Login</h2>
                            <form   onSubmit={this.handleSubmit.bind(this)} noValidate>
                                <div className="form-group">
                                    <input 
                                        onChange={this.handleChange.bind(this)} 
                                        className={classnames("form-control", {'is-invalid': errors.email})}
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"                                       
                                    />
                                    {errors.email && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        onChange={this.handleChange.bind(this)} 
                                        className={classnames("form-control", {'is-invalid': errors.password})} 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    {errors.password && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.password}</div>)}
                                </div>
                                <div className="form-btn">
                                <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                            <div className="signup">
                                <Link to={"/signup"} style={{color:"#ffffff"}}>Sign Up</Link>
                            </div>
                        </div>
                        {/* <CurrentUser token={this.state.token}/> */}
                </div>
            </div>
        );
    }
}

export default Login;