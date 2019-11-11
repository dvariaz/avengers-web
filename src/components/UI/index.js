import React, { Component } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import colors from './../../settings/colors';

import NavLink from './Header/SynopsisLink';

import Header from './Header';
import Sections from './Header/Sections';
import Sidebar from './Sidebar';
import Scroller from './Scroller';
import CastNav from './CastNav';
import SynopsisNav from './SynopsisNav';

class UI extends Component {
    render(){
        return(
            <>
                <Header>
                    <div className='Logo'>
                        <img src={ `${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg` } alt="Avengers Logo"></img>
                    </div>
                    <Sections>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/sinopsis/general">Sinopsis</NavLink>
                        <NavLink to="/cast/thanos">Cast</NavLink>
                        <NavLink to="/galeria/joshbrolin">Galeria</NavLink>
                        <NavLink to="/trailer">Trailer</NavLink>
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
                    <Scroller previous="hulk" next="ironman" color={ colors.gradient.carmine }></Scroller>
                </Sidebar>
                <Sidebar position="right" lang="ESP">
                    {/* <div className="CastSections">
                        <Link to={ currentUrl + "/portada" } activeClassName="active">PORTADA</Link>
                        <Link to={ currentUrl + "/poster" } activeClassName="active">POSTER</Link>
                        <Link to={ currentUrl + "/historia" } activeClassName="active">HISTORIA</Link>
                        <Link to={ currentUrl + "/diseño" } activeClassName="active">DISEÑO</Link>
                    </div> */}
                </Sidebar>
                <CastNav ready={ this.props.section === 'cast' }/>
                <SynopsisNav ready={ this.props.section === 'sinopsis' }/>
                { this.props.children }
            </>
        );
    }
}

const mapStateToProps = state => ({ section: state.routing.current });

export default connect(mapStateToProps, null)(UI);