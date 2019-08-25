import React, { Component } from "react";

//Styles
import './Sidebar.scss';

class Sidebar extends Component {
    render() {
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
