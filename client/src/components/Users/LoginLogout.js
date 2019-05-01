import React, { Component } from 'react';

class LoginLogout extends Component {
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
            }
                )
            .catch(err=> console.log(err))


    }



    render() {
        // const {email, password, success, token} = this.state;
        console.log(this.state);
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleChange.bind(this)} name= "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handleChange.bind(this)} name= "password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginLogout;