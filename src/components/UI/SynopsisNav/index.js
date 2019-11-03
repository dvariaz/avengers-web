/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from "react";

//Styles
import './SynopsisNav.scss';

class SynopsisNav extends Component {
    render(){
        return(
            <div className="SynopsisNav">
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg'` } alt="Anterior sección"/></a>
                <div className="items">
                    { this.props.children }
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg'` } alt="Siguiente sección"/></a>
            </div>
        );
    }
}

export default SynopsisNav;