/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import ArrowIcon from './../media/ChevronArrow-Icon.svg';

//Styles
import './SynopsisNav.scss';

class SynopsisNav extends Component {
    render(){
        return(
            <div className="SynopsisNav">
                <a href="#" className="SynopsisNav-Controller"><img src={ ArrowIcon } alt="Anterior sección"/></a>
                <div className="items">
                    { this.props.children }
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ ArrowIcon } alt="Siguiente sección"/></a>
            </div>
        );
    }
}

export default SynopsisNav;