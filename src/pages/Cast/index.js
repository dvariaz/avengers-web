import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { Redirect, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import styles from './Cast.module.scss';


import Background from './../../components/Background';

//Images
import ThanosImage from './../../assets/Characters/Thanos/Profile.jpg'
import CaptainAmericaImage from './../../assets/Characters/CaptainAmerica/Profile.jpg';
import IronManImage from './../../assets/Characters/IronMan/Profile.jpg';
import ThorImage from './../../assets/Characters/Thor/Profile.jpg';
import DoctorStrangeImage from './../../assets/Characters/DoctorStrange/Profile.jpg';

import TitanBackground from './../../assets/Backgrounds/Titan.jpg';

//Imagenes de prueba
import ChrisEvansImage from './../../assets/Cast/ChrisEvans.jpg';
import RobertDowneyJrImage from './../../assets/Cast/RobertDowneyJr.jpg';
import ChrisHemsworthImage from './../../assets/Cast/ChrisHemsworth.jpg';
import ChrisPattImage from './../../assets/Cast/ChrisPatt.jpg';


//TODO: Crear componente que va entregar las subrutas, posiblemente debe recibir en sus props, las imagenes
//a utilizar y su contenido a mostrar, tenga encuenta que es una vista con una navegacion mas compleja
//Tiene subrutas para los personajes, y cada personaje tiene una subruta para sus secciones

//TODO: Para los bordes luminosos, toca manejar las variables de color desde react
//ya que para hacer el overlay, hay que enviar el color por js, y no por sass

//FIXME: Evitar que el contenido se scrollee junto con el castnav

//TODO: El elemento seleccionado debe mantener siempre arriba

//FIXME: cada vez que se selecciona alguno de los elementos que se desbordan,
//el scroll se sube automaticamente, como si fuera un F5

class CastPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.location.pathname);
    }

    render() {
        let match = this.props.match;
        let location = this.props.location;

        return(
            <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
                <Switch location={ location }>
                    <Route exact path={`${match.url}` } render={
                        () => <div className="Content"><h1 style={{ color: 'white' }}>Seleccióna un personaje</h1><Background src={ TitanBackground } /></div>
                    } />
                    <Route exact path={`${match.url}/thanos/portada` } render={
                        () => <Background src={ ThanosImage } />
                    } />
                    <Route exact path={`${match.url}/capitanamerica/portada` } render={
                        () => <Background src={ CaptainAmericaImage } />
                    } />
                    <Route exact path={`${match.url}/ironman/portada` } render={
                        () => <Background src={ IronManImage } />
                    } />
                    <Route exact path={`${match.url}/thor/portada` } render={
                        () => <Background src={ ThorImage } />
                    } />
                    <Route exact path={`${match.url}/doctorstrange/portada` } render={
                        () => <Background src={ DoctorStrangeImage } />
                    } />
                    <Route exact path={`${match.url}/blackwidow/portada` } render={
                        () => <h1>Esto es black widow</h1> 
                    } />
                    <Route exact path={`${match.url}/starlord/portada` } render={
                        () => <Background src={ ChrisPattImage } />
                    } />
                    <Route exact path={`${match.url}/hulk/portada` } render={
                        () => <h1>Esto es hulk</h1> 
                    } />
                </Switch>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default withRouter(connect(null,mapDispatchToProps)(CastPage));