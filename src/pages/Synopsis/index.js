import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import styles from './Synopsis.module.scss';

import SynopsisNav from './../../components/UI/SynopsisNav';

class Synopsis extends Component {

    render(){
        return(
            <div className="Container Respect-AllBars">
                <h1>This is the Synopsis</h1>
                <SynopsisNav>
                    <NavLink to="/sinopsis/general" activeClassName="bg-blue">GENERAL</NavLink>
                    <NavLink to="/sinopsis/guantelete" activeClassName="bg-thanos">GUANTELETE</NavLink>
                    <NavLink to="/sinopsis/poder" activeClassName="bg-violet">PODER</NavLink>
                    <NavLink to="/sinopsis/tiempo" activeClassName="bg-green">TIEMPO</NavLink>
                    <NavLink to="/sinopsis/mente" activeClassName="bg-yellow">MENTE</NavLink>
                    <NavLink to="/sinopsis/realidad" activeClassName="bg-red">REALIDAD</NavLink>
                    <NavLink to="/sinopsis/alma" activeClassName="bg-orange">ALMA</NavLink>
                    <NavLink to="/sinopsis/espacio" activeClassName="bg-blue">ESPACIO</NavLink>
                </SynopsisNav>
            </div>
        );
    }
}

export default Synopsis;