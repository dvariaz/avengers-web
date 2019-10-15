import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import colors from './../../settings/colors';

import Header from './Header';
import Sections from './Header/Sections';
import Sidebar from './Sidebar';
import Scroller from './Scroller';
import CastNav from './CastNav';
import CastLink from './CastNav/CastLink';

//Assets
import Logo from './../../assets/Icons/Avengers-Logo.svg';
import MenuIcon from './../../assets/Icons/Navigation/Menu-Icon.svg';
import YoutubeIcon from './../../assets/Icons/Social/Youtube-Icon.png';
import TwitterIcon from './../../assets/Icons/Social/Twitter-Icon.png';
import InstagramIcon from './../../assets/Icons/Social/Instagram-Icon.png';

//Images
import ThanosImage from './../../assets/Characters/Thanos/Profile.jpg';
import CaptainAmericaImage from './../../assets/Characters/CaptainAmerica/Profile.jpg';
import IronManImage from './../../assets/Characters/IronMan/Profile.jpg';
import ThorImage from './../../assets/Characters/Thor/Profile.jpg';
import DoctorStrangeImage from './../../assets/Characters/DoctorStrange/Profile.jpg';

class UI extends Component {
    render(){
        // let currentPath = this.props.location.pathname.split('/');
        // let currentUrl = currentPath.slice(0, currentPath.length-1).join("/");
        
        return(
            <>
                <Header>
                    <div className='Logo'>
                        <img src={ Logo } alt="Avengers Logo"></img>
                    </div>
                    <Sections>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/sinopsis" activeClassName="active">Sinopsis</NavLink>
                        <NavLink to="/cast" activeClassName="active">Cast</NavLink>
                        <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
                        <NavLink to="/trailer" activeClassName="active">Trailer</NavLink>
                    </Sections>
                    <a className='SidebarButton' href="#side_bar">
                        <img src={ MenuIcon } alt="Menu"></img>
                    </a>
                </Header>
                <Sidebar position="left">
                    <div className="social" >
                        <a href="https://www.youtube.com/user/MARVEL" target="_blank" rel="noopener noreferrer"><img src={ YoutubeIcon } alt="Visita Youtube"/></a>
                        <a href="https://twitter.com/Avengers" target="_blank" rel="noopener noreferrer"><img src={ TwitterIcon } alt="Visita Twitter"/></a>
                        <a href="https://www.instagram.com/avengers" target="_blank" rel="noopener noreferrer"><img src={ InstagramIcon } alt="Visita Instagram"/></a>
                    </div>
                    <Scroller previous="hulk" next="ironman" color={ colors.gradient.carmine }></Scroller>
                </Sidebar>
                <Sidebar position="right" lang="ESP">
                    {/* <div className="CastSections">
                        <NavLink to={ currentUrl + "/portada" } activeClassName="active">PORTADA</NavLink>
                        <NavLink to={ currentUrl + "/poster" } activeClassName="active">POSTER</NavLink>
                        <NavLink to={ currentUrl + "/historia" } activeClassName="active">HISTORIA</NavLink>
                        <NavLink to={ currentUrl + "/diseño" } activeClassName="active">DISEÑO</NavLink>
                    </div> */}
                </Sidebar>
                <CastNav ready={ this.props.section === 'cast' }>
                    <CastLink to="thanos" image={ ThanosImage } color={ colors.flat.blueViolet }>THANOS</CastLink>            
                    <CastLink to="capitanamerica" image={ CaptainAmericaImage } color={ colors.flat.neonBlue }>CAPITÁN AMERICA</CastLink>
                    <CastLink to="ironman" image={ IronManImage } color={ colors.flat.torchRed }>IRON MAN</CastLink>
                    <CastLink to="thor" image={ ThorImage } color={ colors.flat.carmine }>THOR</CastLink>
                    <CastLink to="doctorstrange" image={ DoctorStrangeImage } color={ colors.flat.torchRed }>DOCTOR STRANGE</CastLink>
                    <CastLink to="blackwidow" image={ DoctorStrangeImage } color={ colors.flat.goldenPoppy }>BLACK WIDOW</CastLink>
                    <CastLink to="starlord" image={ DoctorStrangeImage } color={ colors.flat.redOrange }>STAR LORD</CastLink>
                    <CastLink to="hulk" image={ DoctorStrangeImage } color={ colors.flat.limeGreen }>HULK</CastLink>
                </CastNav>
                { this.props.children }
            </>
        );
    }
}

const mapStateToProps = state => ({ section: state.routing.current });

export default withRouter(connect(mapStateToProps, null)(UI));