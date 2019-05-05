import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';
import { urlUsers } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            errors:{},
            email:'',
            password:'',
            name:'',
            password2:'',
            avatar:'',
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
        const {email, name, password, password2, avatar} = this.state;
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
                password2: password2,
                avatar: avatar,
            })
        })
        .then(processResponse)
        .then(res=>{
            console.log(res)
            const {statusCode, data} = res;
            if(statusCode === 400){
                this.setState({errors: data})
            }
            if(statusCode === 200){
                alert("Successfully Registered")
                this.props.history.push('/')
                
            }
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {errors} = this.state;
        console.log(errors)
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
                                    <input onChange={this.handleChange.bind(this)} className="input-form" type="text" name="avatar" placeholder="Avatar Link"/>
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