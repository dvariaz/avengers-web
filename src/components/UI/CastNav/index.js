import React, { Component } from 'react';
import './CastNav.scss';

class CastNav extends Component {
    render(){
        return(
            <div className="CastNav">
                { this.props.children }
            </div>
        );
    }
}

export default CastNav;