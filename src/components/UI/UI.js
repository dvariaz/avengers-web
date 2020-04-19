import React from 'react';
import { useLocation } from 'react-router-dom';

import colors from './../../settings/colors';

import { NavLink } from 'react-router-dom';

import Header from './Header';
import Sections from './Header/Sections';
import Sidebar from './Sidebar';
import Scroller from './Scroller';
import CastNav from './CastNav';
import SynopsisNav from './SynopsisNav';

const UI = ({children}) => {
    let location = useLocation();
    let section = location.pathname.split('/')[1];

    return(
        <>
            <Header>
                <div className='Logo'>
                    <img src={ `${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg` } alt="Avengers Logo"></img>
                </div>
                <Sections>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/sinopsis/general">Sinopsis</NavLink>
                    <NavLink exact to="/cast/thanos">Cast</NavLink>
                    <NavLink exact to="/galeria/joshbrolin">Galeria</NavLink>
                    <NavLink exact to="/trailer">Trailer</NavLink>
                </Sections>
                <a className='SidebarButton' href="#side_bar">
                    <img src={ `${process.env.PUBLIC_URL}/assets/Icons/Navigation/Menu-Icon.svg` } alt="Menu"></img>
                </a>
            </Header>
            <Sidebar position="left">
                <div className="social" >
                    <a href="https://www.youtube.com/user/MARVEL" target="_blank" rel="noopener noreferrer"><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Social/Youtube-Icon.png` } alt="Visita Youtube"/></a>
                    <a href="https://twitter.com/Avengers" target="_blank" rel="noopener noreferrer"><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Social/Twitter-Icon.png` } alt="Visita Twitter"/></a>
                    <a href="https://www.instagram.com/avengers" target="_blank" rel="noopener noreferrer"><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Social/Instagram-Icon.png` } alt="Visita Instagram"/></a>
                </div>
                <Scroller previous="hulk" next="ironman" color={ colors.carmine.gradient }></Scroller>
            </Sidebar>
            <Sidebar position="right" lang="ESP">
                {/* <div className="CastSections">
                    <Link to={ currentUrl + "/portada" } activeClassName="active">PORTADA</Link>
                    <Link to={ currentUrl + "/poster" } activeClassName="active">POSTER</Link>
                    <Link to={ currentUrl + "/historia" } activeClassName="active">HISTORIA</Link>
                    <Link to={ currentUrl + "/diseño" } activeClassName="active">DISEÑO</Link>
                </div> */}
            </Sidebar>
            <CastNav ready={ section === 'cast' }/>
            <SynopsisNav ready={ section === 'sinopsis' }/>
            { children }
        </>
    );
}

export default UI;