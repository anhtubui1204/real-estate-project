import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './css/users.css';
import {Link} from 'react-router-dom';
import { urlUsers } from '../../myURL';
import processResponse from '../../utils/ProcessResponse';
import classnames from 'classnames';


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
        .then(processResponse) //process response with status code
        .then(res=>{
            console.log(res)
            const {statusCode, json} = res;
            if(statusCode === 400){
                this.setState({errors: json})
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
                            <form onSubmit={this.handleSubmit.bind(this)} noValidate>
                                <div className="form-group">
                                    <input 
                                        onChange={this.handleChange.bind(this)} 
                                        className={classnames("form-control", {'is-invalid': errors.name})}
                                        type="text" 
                                        name="name" 
                                        placeholder="Name of User"                                       
                                    />
                                    {errors.name && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.name}</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        onChange={this.handleChange.bind(this)} 
                                        className={classnames("form-control", {'is-invalid': errors.avatar})}
                                        type="text" 
                                        name="avatar" 
                                        placeholder="Avatar URL"                                       
                                    />
                                    {errors.avatar && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.avatar}</div>)}
                                </div>
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
                                <div className="form-group">
                                    <input 
                                        onChange={this.handleChange.bind(this)} 
                                        className={classnames("form-control", {'is-invalid': errors.password2})}
                                        type="password" 
                                        name="password2" 
                                        placeholder="Confirm Password"                                       
                                    />
                                    {errors.password2 && (<div className="invalid-feedback" style={{marginLeft: '50px'}}>{errors.password2}</div>)}
                                </div>
                                <div className="form-btn">
                                    <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;