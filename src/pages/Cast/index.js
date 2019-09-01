import React from "react";
import { Redirect, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import styles from './Cast.module.scss';

import CastNav from './../../components/UI/CastNav';
import Background from './../../components/Background';

//Images
import CaptainAmericaImage from './../../assets/Characters/CaptainAmerica/Profile.jpeg';
//Imagenes de prueba
import ChrisEvansImage from './../../assets/Cast/ChrisEvans.jpg';
import RobertDowneyJrImage from './../../assets/Cast/RobertDowneyJr.jpg';
import ChrisHemsworthImage from './../../assets/Cast/ChrisHemsworth.jpg';
import ChrisPattImage from './../../assets/Cast/ChrisPatt.jpg';


//TODO: Crear componente que va entregar las subrutas, posiblemente debe recibir en sus props, las imagenes
//a utilizar y su contenido a mostrar, tenga encuenta que es una vista con una navegacion mas compleja
//Tiene subrutas para los personajes, y cada personaje tiene una subruta para sus secciones

//TODO: Mire como redireccionar por entrar al home del cast

//TODO: Para los bordes luminosos, toca manejar las variables de color desde react
//ya que para hacer el overlay, hay que enviar el color por js, y no por sass

//TODO: El elemento seleccionado debe mantener siempre arriba

//FIXME: cada vez que se selecciona alguno de los elementos que se desbordan,
//el scroll se sube automaticamente, como si fuera un F5

const Cast = ({ location, match }) => {
    // let { character, section } = this.props.match.params;

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
            <Switch location={ location }>
                <Redirect exact from={ `${match.url}` } exact to={ `${match.url}/capitanamerica` } />
                <Route exact path={`${match.url}/capitanamerica` } render={
                    () => <Background src={ ChrisEvansImage } />
                } />
                <Route exact path={`${match.url}/ironman` } render={
                     () => <Background src={ RobertDowneyJrImage } />
                } />
                <Route exact path={`${match.url}/thor` } render={
                     () => <Background src={ ChrisHemsworthImage } />
                } />
                <Route exact path={`${match.url}/doctorstrange` } render={
                     () => <h1>Esto es doctor strange</h1>
                } />
                <Route exact path={`${match.url}/blackwidow` } render={
                     () => <h1>Esto es black widow</h1> 
                } />
                <Route exact path={`${match.url}/starlord` } render={
                     () => <Background src={ ChrisPattImage } />
                } />
                <Route exact path={`${match.url}/hulk` } render={
                     () => <h1>Esto es hulk</h1> 
                } />
            </Switch>
        </div>
    );
}

export default withRouter(Cast);