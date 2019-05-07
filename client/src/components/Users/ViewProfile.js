import React, { Component } from 'react';

class ViewProfile extends Component {
    render() {
        const {profile, errors}=this.props
        return (
            <div>
                {(errors || Object.keys(errors).length===0)? (
                    <div>{errors.noprofile}</div>
                ) : (
                    <div>No Error</div>
                )}
            </div>
        );
    }
}

export default ViewProfile;