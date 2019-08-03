import React, { Component } from "react";
import styles from './Home.module.scss'

class Home extends Component {
    render(){
        return(
            <div class="Container CenterContent">
                <h1 class="MainTitle">INFINITY WAR</h1>
                <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                <a href="#watch_trailer">Ver Tráiler</a>
                <img class="Background" src="./Backgrounds/Wakanda.jpg"></img>
            </div>
        );
    }
}

export default Home;