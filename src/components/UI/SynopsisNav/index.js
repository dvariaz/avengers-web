import React, { Component } from "react";
import posed from 'react-pose';
import colors from './../../../settings/colors';

import SynopsisLink from "./SynopsisLink";

//Styles
import './SynopsisNav.scss';
import StyledSynopsisNav from './StyledSynopsisNav';

import elements from './../../../data/elements';

class SynopsisNav extends Component {

    render(){
        let ready = this.props.ready;
        
        return(
            <PosedSynopsisNav pose={ ready ? 'enabled' : 'disabled' } className="SynopsisNav">
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Anterior sección"/></a>
                <div className="items">
                    {
                        Object.values(elements).map((element, index) => 
                                <SynopsisLink key={ index } to={ `/sinopsis/${element.url}` } color={ element.color.gradient }>{ element.name[0] }</SynopsisLink>
                            )
                    }
                    
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Siguiente sección"/></a>
            </PosedSynopsisNav>
        );
    }
}

const PosedSynopsisNav = posed(StyledSynopsisNav)({
    disabled: {
        transform: 'translateY(100px)',
        opacity: 0
    },
    enabled: {
        transform: 'translateY(0px)',
        opacity: 1
    }
});


export default SynopsisNav;