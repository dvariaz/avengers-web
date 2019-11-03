import React, { Component } from 'react';
import posed from 'react-pose';
import colors from './../../../settings/colors';

import StyledCastNav from './StyledCastNav';
import CastLink from './CastLink';

//TODO: Al reducir el tamaño de pantalla, convertirse en menu desplegable

const PosedCastNav = posed(StyledCastNav)({
    disabled: {
        transform: 'translateX(-300px)',
        opacity: 0
    },
    enabled: {
        transform: 'translateX(0px)',
        opacity: 1
    }
});

class CastNav extends Component {
    
    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
        }
    }

    componentWillUnmount(){
        console.log('Desmontado');
    }

    render(){
        let ready = this.props.ready;

        return(
            <PosedCastNav pose={ ready ? 'enabled' : 'disabled' } className="CastNav" onScroll={ this.handleScroll }>
                <CastLink to="/cast/thanos" image="Thanos" color={ colors.flat.blueViolet }>THANOS</CastLink>            
                <CastLink to="/cast/capitanamerica" image="CaptainAmerica" color={ colors.flat.neonBlue }>CAPITÁN AMERICA</CastLink>
                <CastLink to="/cast/ironman" image="IronMan" color={ colors.flat.torchRed }>IRON MAN</CastLink>
                <CastLink to="/cast/thor" image="Thor" color={ colors.flat.carmine }>THOR</CastLink>
                <CastLink to="/cast/doctorstrange" image="DoctorStrange" color={ colors.flat.torchRed }>DOCTOR STRANGE</CastLink>
                <CastLink to="/cast/blackwidow" image="BlackWidow" color={ colors.flat.goldenPoppy }>BLACK WIDOW</CastLink>
                <CastLink to="/cast/starlord" image="StarLord" color={ colors.flat.redOrange }>STAR LORD</CastLink>
                <CastLink to="/cast/hulk" image="Hulk" color={ colors.flat.limeGreen }>HULK</CastLink>
            </PosedCastNav>
        );
    }
}

export default CastNav;