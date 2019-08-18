import React, { Component } from "react";
import { Link } from 'react-router-dom';

import ArrowIcon from './../media/ChevronArrow-Icon.svg';

//Styles
import './SynopsisNav.scss';

class SynopsisNav extends Component {
    render(){
        return(
            <div className="SynopsisNav">
                <a href="#" className="SynopsisNav-Controller"><img src={ ArrowIcon } /></a>
                <div className="items">
                    { this.props.children }
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ ArrowIcon } /></a>
            </div>
        );
    }
}

export default SynopsisNav;