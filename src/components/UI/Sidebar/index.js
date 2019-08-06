import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Styles
import './Sidebar.scss';

import Scroller from '../Scroller';

class Sidebar extends Component {
    render() {
        let slider;
        let lang;

        if(this.props.scroller){
            slider = <Scroller items={this.props.slider.items}/>;
        }else{
            slider = null;
        }

        if(this.props.lang){
            lang = <div className="nav-language" >{ this.props.lang }</div>
        }else{
            lang = null;
        }

        return (
            <>
                <aside className={ this.props.position }>
                    { this.props.children }
                    { slider }
                    { lang }
                </aside>
            </>
        );
    }
}

export default Sidebar;
