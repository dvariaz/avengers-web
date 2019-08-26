import React, { Component } from 'react'

import { CSSTransition } from 'react-transition-group';

import JoshBrolinImage from './../../assets/Cast/JoshBrolin.jpg';

//TODO: Ajustar la logica para cambiar una imagen por otra, animaciones secuenciales

class Background extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            show: false
        }

        this.animate = this.animate.bind(this);
    }

    animate() {
        this.setState({ show: !this.state.show });
        console.log(this.state.show);
    }

    render() {
        return (
            <div className="Container Respect-TopBar Respect-SideBars">
                <h1>Este es el background</h1>
                <button type="button" onClick={ this.animate }>Animar</button>
                <CSSTransition in={ this.state.show } timeout={ 1000 } classNames="blur">
                    <img className="Background" src={ JoshBrolinImage } alt="Fondo"></img>
                </CSSTransition>
            </div>
        )
    }
}

export default Background