import React, { Component } from 'react';
import { Link } from '@reach/router';

const isActive = ({ isCurrent }) => {
    console.log("Active");
    return isCurrent ? { className: "active" } : null
}

class NavLink extends Component {
    
    render() {
        return(
            <>
                <Link getProps={isActive} { ...this.props }/>
            </>
        );
    }
}

export default NavLink;