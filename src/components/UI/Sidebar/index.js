import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Styles
import './Sidebar.scss';

class Sidebar extends Component {
    render() {
        let slider;
        let lang;

        if(this.props.lang){
            lang = <div className="nav-language" >{ this.props.lang }</div>
        }else{
            lang = null;
        }

        return (
            <>
                <aside className={ this.props.position }>
                    { this.props.children }
                    { lang }
                </aside>
            </>
        );
    }
}

export default Sidebar;
