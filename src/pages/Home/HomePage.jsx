import React, { Component } from "react";

import './Home.scss'

import Background from '../../components/Background';
import TrapezoidButton from "../../components/UI/TrapezoidButton/index.js";

const HomePage = () => {
    return(
        <div className="Container FullPage">
            {/* <FullPage beforeChange={this.handleChange}>
                <Slide>
                    <div className="PageContent SlideContent">
                        <img className="Character" style={{ transform: 'translate(0px, 80px)' }} src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/CaptainAmerica.png`}/>
                        <img className="Character" style={{ transform: 'translate(500px, 80px)' }} src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackWidow.png`}/>
                        <img className="Character" style={{ transform: 'translate(-500px, 80px)' }} src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackPanther.png`}/>
                        <h1 className="BigTitle">INFINITY WAR</h1>
                        <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                        <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                        <Background src="Backgrounds/Wakanda/Wakanda.jpg"/>
                    </div>
                </Slide>
                <Slide>
                    <div className="PageContent SlideContent">
                        <h1 className="BigTitle">THANOS</h1>
                        <h2>El titán loco ha llegado a por las gemas</h2>
                        <h2><strong>El conquistador de mundos</strong></h2>
                        <h3>La película más esperada del año esta aquí</h3>
                        <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                        <Background src="Backgrounds/Titan.jpg"/>
                    </div>
                </Slide>
                <Slide>
                    <div className="PageContent SlideContent">
                        <h2>Nuevos equipos se unirán para luchar</h2>
                        <h2>contra la <strong>inminente amenaza</strong></h2>
                        <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                        <Background src="Backgrounds/GuardiansSpaceship.jpg"/>
                    </div>
                </Slide>
                <Slide>
                    <div className="PageContent SlideContent">
                        <h2>Y harán todo lo posible para salvar el <strong>destino de la humanidad</strong></h2>
                        <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                        <Background src="Backgrounds/NewYorkSanctum.jpg"/>
                    </div>
                </Slide>
            </FullPage> */}
        </div>
    );
}

export default HomePage;