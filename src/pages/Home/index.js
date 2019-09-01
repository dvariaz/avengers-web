import React, { Component } from "react";
import './Home.scss'

import Background from './../../components/Background';

import Wakanda from './../../assets/Backgrounds/Wakanda.jpg';

class Home extends Component {
    render(){
        return(
            <div className="Container CenterContent">
                <h1 className="MainTitle">INFINITY WAR</h1>
                <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                <a href="#watch_trailer">Ver Tráiler</a>
                <Background src={ Wakanda }/>
            </div>
        );
    }
}

export default Home;