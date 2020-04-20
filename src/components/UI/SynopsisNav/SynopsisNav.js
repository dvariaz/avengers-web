import React from "react";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

//Styles
import './SynopsisNav.scss';

import elements from './../../../data/elements';

const SynopsisNav = () => {
    const variants = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={variants} className="SynopsisNav">
            <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Anterior sección"/></a>
            <div className="items">
                {
                    Object.values(elements).map((element, index) => 
                            <NavLink
                                key={ index }
                                to={ `/sinopsis/${element.url}` }
                                activeStyle={{ background: element.color.gradient }}
                            >{ element.name[0] }</NavLink>
                        )
                }
                
            </div>
            <a href="#" className="SynopsisNav-Controller"><img src={ `${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Siguiente sección"/></a>
        </motion.div>
    );
}

export default SynopsisNav;