import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './UI.scss';

import Sidebar from './Sidebar';
import Slider from './Slider';
import SliderItem from './Slider/SliderItem';

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
                        <Link to="/">Home</Link>
                        <Link to="/sinopsis">Sinopsis</Link>
                        <Link to="/cast">Cast</Link>
                        <Link to="/galeria">Galeria</Link>
                        <Link to="/trailer">Trailer</Link>
                    </div>
                    <a className='SidebarButton' href="#side_bar">
                        <img src={ MenuIcon } alt="Menu"></img>
                    </a>
                </header>
                {/* <Sidebar position="left" scroller={{items: ['red','green','shuri','falcon','orange']}}> */}
                <Sidebar position="left">
                    <div className="social" >
                        <a href="#"><img src={ YoutubeIcon } alt="Visita Youtube"/></a>
                        <a href="#"><img src={ TwitterIcon } alt="Visita Twitter"/></a>
                        <a href="#"><img src={ InstagramIcon } alt="Visita Instagram"/></a>
                    </div>
                </Sidebar>
                <Sidebar position="right" lang="ESP"></Sidebar>
                <Slider>
                    <SliderItem color="blue" enabled={ true }>GENERAL</SliderItem>
                    <SliderItem color="thanos" enabled={ true }>GUANTELETE</SliderItem>
                    <SliderItem color="violet">PODER</SliderItem>
                    <SliderItem color="green">TIEMPO</SliderItem>
                    <SliderItem color="yellow">MENTE</SliderItem>
                    <SliderItem color="red">REALIDAD</SliderItem>
                    <SliderItem color="orange">ALMA</SliderItem>
                    <SliderItem color="blue">ESPACIO</SliderItem>
                </Slider>
            </>
        );
    }
}

export default UI;