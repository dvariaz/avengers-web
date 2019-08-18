import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import styles from './Cast.module.scss';

import CastNav from './../../components/UI/CastNav';

//Images
import CaptainAmericaImage from './Characters/CaptainAmerica/Profile.jpeg';

//Para los bordes luminosos, toca manejar las variables de color desde react
//ya que para hacer el overlay, hay que enviar el color por js, y no por sass

class Cast extends Component {
    render(){
        return(
            <div className="Container Respect-TopBar Respect-SideBars Layout-Horizontal">
                <CastNav>
                    <NavLink to="/cast/capitanamerica" activeClassName="bg-glow-border-blue" style={ { backgroundImage: `url(${CaptainAmericaImage})` } }>CAPITÁN AMERICA</NavLink>
                    <NavLink to="/cast/ironman" activeClassName="bg-glow-border-red">IRON MAN</NavLink>
                    <NavLink to="/cast/thor" activeClassName="bg-glow-border-vision">THOR</NavLink>
                    <NavLink to="/cast/doctorstrange" activeClassName="bg-glow-border-green">DOCTOR STRANGE</NavLink>
                    <NavLink to="/cast/blackwidow" activeClassName="bg-glow-border-yellow">BLACK WIDOW</NavLink>
                    <NavLink to="/cast/starlord" activeClassName="bg-glow-border-red">STAR LORD</NavLink>
                    <NavLink to="/cast/hulk" activeClassName="bg-glow-border-orange">HULK</NavLink>
                </CastNav>
                <h1>This is the Cast</h1>
            </div>
        );
    }
}

export default Cast;