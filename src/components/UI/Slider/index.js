import React, { Component } from "react";
import { Link } from 'react-router-dom';

import ArrowIcon from './../media/ChevronArrow-Icon.svg';

//Styles
import './Slider.scss';

class Slider extends Component {
    render(){
        return(
            <div className="Slider">
                <a href="#" className="Slider-Controller"><img src={ ArrowIcon } /></a>
                <div className="items">
                    { this.props.children }
                </div>
                <a href="#" className="Slider-Controller"><img src={ ArrowIcon } /></a>
            </div>
        );
    }
}

export default Slider;