import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Sidebar.scss';

import Slider from './../Slider';

class Sidebar extends Component {
    render() {
        let slider;

        if (this.props.verticalSlider){
            slider = <Slider/>;
        }else{
            slider = null;
        }

        return (
            <>
                <aside className={ this.props.position }>
                    { this.props.children }
                    { slider }
                </aside>
            </>
        );
    }
}

export default Sidebar;
