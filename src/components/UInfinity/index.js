import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './UInfinity.module.scss';

import Sidebar from './../Sidebar';

//Media
import Logo from './media/Avengers-Logo.svg';
import MenuIcon from './media/Menu-Icon.svg';
import YoutubeIcon from './media/social/Youtube-Icon.png';
import TwitterIcon from './media/social/Twitter-Icon.png';
import InstagramIcon from './media/social/Instagram-Icon.png';

class UInfinity extends Component {
    render(){
        return(
            <>
                <header>
                    <div class={ styles.Logo }>
                        <img src={ Logo } alt="Avengers Logo"></img>
                    </div>
                    <div class={ styles.Sections }>
                        <Link to="/">Home</Link>
                        <Link to="/sinopsis">Sinopsis</Link>
                        <Link to="/cast">Cast</Link>
                        <Link to="/galeria">Galeria</Link>
                        <Link to="/trailer">Trailer</Link>
                    </div>
                    <a class={ styles.SidebarButton } href="#side_bar">
                        <img src={ MenuIcon } alt="Menu"></img>
                    </a>
                </header>
                <Sidebar position="left" verticalSlider={ true }>
                    <div className="social" >
                        <a href="#"><img src={ YoutubeIcon } alt="Visita Youtube"/></a>
                        <a href="#"><img src={ TwitterIcon } alt="Visita Twitter"/></a>
                        <a href="#"><img src={ InstagramIcon } alt="Visita Instagram"/></a>
                    </div>
                </Sidebar>
                <Sidebar position="right"></Sidebar>
            </>
        );
    }
}

export default UInfinity;