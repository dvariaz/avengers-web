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
                    <SynopsisLink to="/sinopsis/general" color={ colors.gradient.ghost }>General</SynopsisLink>
                    <SynopsisLink to="/sinopsis/guantelete" color={ colors.gradient.persianIndigo }>Guantelete</SynopsisLink>
                    <SynopsisLink to="/sinopsis/alma" color={ colors.gradient.gamboge }>Alma</SynopsisLink>
                    <SynopsisLink to="/sinopsis/espacio" color={ colors.gradient.neonBlue }>Espacio</SynopsisLink>
                    <SynopsisLink to="/sinopsis/poder" color={ colors.gradient.darkViolet }>Poder</SynopsisLink>
                    <SynopsisLink to="/sinopsis/tiempo" color={ colors.gradient.limeGreen }>Tiempo</SynopsisLink>
                    <SynopsisLink to="/sinopsis/mente" color={ colors.gradient.goldenPoppy }>Mente</SynopsisLink>
                    <SynopsisLink to="/sinopsis/realidad" color={ colors.gradient.torchRed }>Realidad</SynopsisLink>
                </div>
                <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Siguiente sección"/></a>
            </PosedSynopsisNav>
        );
    }
}

export default SynopsisNav;