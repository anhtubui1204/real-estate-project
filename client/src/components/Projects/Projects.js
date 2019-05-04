import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';

class Projects extends Component {
    render() {
        return (
            <div>
                <AppNavbar1 projectActive={"nav-item active"}/>
            </div>
        );
    }
}

export default Projects;