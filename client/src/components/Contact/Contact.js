import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';

class Contact extends Component {
    render() {
        return (
            <div>
                <AppNavbar1 contactActive={"nav-item active"}/>
            </div>
        );
    }
}

export default Contact;