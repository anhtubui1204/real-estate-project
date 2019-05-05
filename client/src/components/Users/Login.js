import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';
import CurrentUser from './CurrentUser';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
            success: false,
            token: ""
        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleSubmit=(e)=> {
        e.preventDefault()
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
            .then(res => res.json())
            .then(json=>{
                console.log(json)
                this.setState({
                    success: json.success,
                    token: json.token
                })
                localStorage.setItem('jwtToken', json.token)
            }
                )
            .catch(err=> console.log(err))


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
                                <button onClick={this.handleSubmit.bind(this)}  type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                            <div className="signup">
                                <Link to={"/signup"} style={{color:"#ffffff"}}>Sign Up</Link>
                            </div>
                        </div>
                        <CurrentUser token={this.state.token}/>
                </div>
            </div>
        );
    }
}

export default Login;