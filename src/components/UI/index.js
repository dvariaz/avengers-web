import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//Styles
import './UI.scss';

import Sidebar from './Sidebar';
import Scroller from './Scroller';

//Media
import Logo from './media/Avengers-Logo.svg';
import MenuIcon from './media/Menu-Icon.svg';
import YoutubeIcon from './media/social/Youtube-Icon.png';
import TwitterIcon from './media/social/Twitter-Icon.png';
import InstagramIcon from './media/social/Instagram-Icon.png';

class UI extends Component {

    render(){
        let currentPath = this.props.location.pathname.split('/');
        let currentUrl = currentPath.slice(0, currentPath.length-1).join("/");

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
                        <a href="https://www.youtube.com/user/MARVEL" target="_blank" rel="noopener noreferrer"><img src={ YoutubeIcon } alt="Visita Youtube"/></a>
                        <a href="https://twitter.com/Avengers" target="_blank" rel="noopener noreferrer"><img src={ TwitterIcon } alt="Visita Twitter"/></a>
                        <a href="https://www.instagram.com/avengers" target="_blank" rel="noopener noreferrer"><img src={ InstagramIcon } alt="Visita Instagram"/></a>
                    </div>
                    <Scroller previous="hulk" next="ironman" color="red"></Scroller>
                </Sidebar>
                <Sidebar position="right" lang="ESP">
                    <div className="CastSections">
                        <NavLink to={ currentUrl + "/portada" } activeClassName="active">PORTADA</NavLink>
                        <NavLink to={ currentUrl + "/poster" } activeClassName="active">POSTER</NavLink>
                        <NavLink to={ currentUrl + "/historia" } activeClassName="active">HISTORIA</NavLink>
                        <NavLink to={ currentUrl + "/diseño" } activeClassName="active">DISEÑO</NavLink>
                    </div>
                </Sidebar>
                { this.props.children }
            </>
        );
    }
}

export default withRouter(UI);