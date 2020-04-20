import React from 'react';
import { motion } from 'framer-motion';
import colors from './../../../settings/colors';

import "./CastNav.scss";

import CastLink from './CastLink';

//TODO: Al reducir el tamaño de pantalla, convertirse en menu desplegable

const CastNav = () => {
    const variants = {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    
    const handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
        }
    }

    return(
        <motion.div initial="hidden" animate="visible" variants={variants}  onScroll={ handleScroll } className="CastNav">
            <CastLink to="/cast/thanos" image="Thanos" color={ colors.blueViolet.flat }>THANOS</CastLink>            
            <CastLink to="/cast/capitanamerica" image="CaptainAmerica" color={ colors.neonBlue.flat }>CAPITÁN AMERICA</CastLink>
            <CastLink to="/cast/ironman" image="IronMan" color={ colors.torchRed.flat }>IRON MAN</CastLink>
            <CastLink to="/cast/thor" image="Thor" color={ colors.carmine.flat }>THOR</CastLink>
            <CastLink to="/cast/doctorstrange" image="DoctorStrange" color={ colors.torchRed.flat }>DOCTOR STRANGE</CastLink>
            <CastLink to="/cast/blackwidow" image="BlackWidow" color={ colors.goldenPoppy.flat }>BLACK WIDOW</CastLink>
            <CastLink to="/cast/starlord" image="StarLord" color={ colors.redOrange.flat }>STAR LORD</CastLink>
            <CastLink to="/cast/hulk" image="Hulk" color={ colors.limeGreen.flat }>HULK</CastLink>
        </motion.div>
    );
}

export default CastNav;