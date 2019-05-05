import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';
import { urlAds, urlUsers } from '../../myURL';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
            name:'',
            password2:'',
            loading: false,
            redirect: false
        }
    }

    handleChange=(e)=>{
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj) 
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        const {email, name, password, password2} = this.state;
        fetch(urlUsers +'/register', {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
                password2: password2
            })
        })
        .then(response => {
            console.log(response.json())
        })
        
        

    }
    render() {
        return (
            <div>
                <AppNavbar1/>
                <div className="login-section d-flex justify-content-center align-items-center bg-dark-trans">
                  
                        <div className="login-inner">
                            <h2 className="form-title">Register</h2>
                            <form>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="text" name="name" placeholder="Name of user"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="password" name="password2" placeholder="Please confirm password"/>
                                </div>
                                <div className="form-btn">
                                    <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;