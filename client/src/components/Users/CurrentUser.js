import React, { Component } from 'react';


class CurrentUser extends Component {

    constructor() {
        super()
        this.state = {
           id:'',
           email:'',
           name:'',
           err: false
        }
    }

    fetchUser=()=> {
        
        const url = '/api/users/current'
        fetch(url, {
            headers:{
                'Authorization': this.props.token
            }
        })
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                id: json.id,
                email: json.email,
                name: json.name,
                err: false
            })
            
        }
        )
        .catch(err=> {
            console.log(err)
            this.setState({err: true})
        })

    }
    // componentDidMount=()=>{
    //     this.fetchUser()
    // }
    render() {
        console.log(this.state);
        const {id, email, name} = this.state;
        return (
            
            <div className="">
                <h2>{id}</h2>
                <h2>{email}</h2>
                <h3>{name}</h3>
                <button onClick={this.fetchUser.bind(this)} className="btn btn-primary">Get User</button>
            </div>
        );
    }
}

export default CurrentUser;