import React, { Component } from "react";
import posed from 'react-pose';
import colors from './../../../settings/colors';

import SynopsisLink from "./SynopsisLink";

//Styles
import './SynopsisNav.scss';
import StyledSynopsisNav from './StyledSynopsisNav';

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

class SynopsisNav extends Component {

    render(){
        let ready = this.props.ready;
        
        return(
            <PosedSynopsisNav pose={ ready ? 'enabled' : 'disabled' } className="SynopsisNav">
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Anterior sección"/></a>
                <div className="items">
                    <SynopsisLink to="/sinopsis/general" color={ colors.ghost.gradient }>General</SynopsisLink>
                    <SynopsisLink to="/sinopsis/guantelete" color={ colors.persianIndigo.gradient }>Guantelete</SynopsisLink>
                    <SynopsisLink to="/sinopsis/alma" color={ colors.gamboge.gradient }>Alma</SynopsisLink>
                    <SynopsisLink to="/sinopsis/espacio" color={ colors.neonBlue.gradient }>Espacio</SynopsisLink>
                    <SynopsisLink to="/sinopsis/poder" color={ colors.darkViolet.gradient }>Poder</SynopsisLink>
                    <SynopsisLink to="/sinopsis/tiempo" color={ colors.limeGreen.gradient }>Tiempo</SynopsisLink>
                    <SynopsisLink to="/sinopsis/mente" color={ colors.goldenPoppy.gradient }>Mente</SynopsisLink>
                    <SynopsisLink to="/sinopsis/realidad" color={ colors.torchRed.gradient }>Realidad</SynopsisLink>
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Siguiente sección"/></a>
            </PosedSynopsisNav>
        );
    }
}

export default SynopsisNav;