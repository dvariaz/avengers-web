import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './UInfinity.module.scss';

//Media
import Logo from './media/Avengers-Logo.svg';
import MenuIcon from './media/Menu-Icon.svg';

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
                    <a class={ styles.SidebarButton } href="#Sidebar">
                        <img src={ MenuIcon } alt="Menu"></img>
                    </a>
                </header>
            </>
        );
    }
}

export default UInfinity;