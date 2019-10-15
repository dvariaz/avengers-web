import React, { Component } from "react";
import StyledSideBar from './StyledSidebar';

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
                <StyledSideBar className={ this.props.position }>
                    { this.props.children }
                    { lang }
                </StyledSideBar>
            </>
        );
    }
}

export default Sidebar;
