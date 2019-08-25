import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
// import styles from './Gallery.module.scss';

import JoshBrolinImage from './../../assets/Cast/JoshBrolin.jpg';

class Gallery extends Component {
    render(){
        let { actor } = this.props.match.params;
        return(
            <div className="Container Respect-TopBar Respect-SideBars">
                <h1>This is the gallery of { actor }</h1>
                <img className="Background" src={ JoshBrolinImage } alt="Fondo"></img>
            </div>
        );
    }
}

export default withRouter(Gallery);