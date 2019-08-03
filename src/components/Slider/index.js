import React, { Component } from 'react';
import styles from './Slider.module.scss';

import ArrowIcon from './../UInfinity/media/ChevronArrow-Icon.svg';

class Slider extends Component {
    render(){
        return(
            <div class={ styles.Slider }>
                <a href="#"><img src={ ArrowIcon } /></a>
                <span>Scroll</span>
                <a href="#"><img src={ ArrowIcon } /></a>
            </div>
        );
    }
}

export default Slider;