import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
// import styles from './Cast.module.scss';

import CastNav from './../../components/UI/CastNav';

//Images
import CaptainAmericaImage from './../../assets/Characters/CaptainAmerica/Profile.jpeg';

//TODO: Para los bordes luminosos, toca manejar las variables de color desde react
//ya que para hacer el overlay, hay que enviar el color por js, y no por sass

//TODO: El elemento seleccionado debe mantener siempre arriba

//FIXME: cada vez que se selecciona alguno de los elementos que se desbordan,
//el scroll se sube automaticamente, como si fuera un F5

class Cast extends Component {
    render(){
        let { character, section } = this.props.match.params;

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
                <h2>Character { character }</h2>
                <h3>{ section }</h3>
            </div>
        );
    }
}

export default withRouter(Cast);