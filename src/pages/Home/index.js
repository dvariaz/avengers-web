import React, { Component } from "react";
import './Home.scss'

import Background from './../../assets/Backgrounds/Wakanda.jpg';

//TODO: Pensar una arquitectura para el cambio de fondo animado
//Posiblemente se deba usar React Transition Group
//La idea es que la imagen anterior se desenfoque, luego haga un fadeout, y aparezca la nueva imagen

class Home extends Component {
    render(){
        return(
            <div className="Container CenterContent">
                <h1 className="MainTitle">INFINITY WAR</h1>
                <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                <a href="#watch_trailer">Ver Tráiler</a>
                <img className="Background" src={ Background } alt="Fondo"></img>
            </div>
        );
    }
}

export default Home;