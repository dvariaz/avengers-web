import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Styles
import './UI.scss';

import Sidebar from './Sidebar';

//Media
import Logo from './media/Avengers-Logo.svg';
import MenuIcon from './media/Menu-Icon.svg';
import YoutubeIcon from './media/social/Youtube-Icon.png';
import TwitterIcon from './media/social/Twitter-Icon.png';
import InstagramIcon from './media/social/Instagram-Icon.png';

class UI extends Component {
    render(){
        return(
            <>
                <header>
                    <div className='Logo'>
                        <img src={ Logo } alt="Avengers Logo"></img>
                    </div>
                    <div className='Sections'>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/sinopsis" activeClassName="active">Sinopsis</NavLink>
                        <NavLink to="/cast" activeClassName="active">Cast</NavLink>
                        <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
                        <NavLink to="/trailer" activeClassName="active">Trailer</NavLink>
                    </div>
                    <a className='SidebarButton' href="#side_bar">
                        <img src={ MenuIcon } alt="Menu"></img>
                    </a>
                </header>
                <Sidebar position="left">
                    <div className="social" >
                        <a href="#"><img src={ YoutubeIcon } alt="Visita Youtube"/></a>
                        <a href="#"><img src={ TwitterIcon } alt="Visita Twitter"/></a>
                        <a href="#"><img src={ InstagramIcon } alt="Visita Instagram"/></a>
                    </div>
                </Sidebar>
                <Sidebar position="right" lang="ESP">

                </Sidebar>
            </>
        );
    }
}

export default UI;