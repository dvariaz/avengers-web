import React, { Component } from 'react';
import posed from 'react-pose';
import './CastNav.scss';

//TODO: Al reducir el tamaño de pantalla, convertirse en menu desplegable

const PosedCastNav = posed.div({
    disabled: {
        transform: 'translateX(-300px)',
        opacity: 0
    },
    enabled: {
        transform: 'translateX(0px)',
        opacity: 1
    }
});

class CastNav extends Component {
    
    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
            // TODO: Hacer una transicion suave entre los items del castnav
        }
    }

    componentWillUnmount(){
        console.log('Desmontado');
    }

    render(){
        let ready = this.props.ready;

        return(
            <PosedCastNav pose={ ready ? 'enabled' : 'disabled' } className="CastNav" onScroll={ this.handleScroll }>
                { this.props.children }
            </PosedCastNav>
        );
    }
}

export default CastNav;