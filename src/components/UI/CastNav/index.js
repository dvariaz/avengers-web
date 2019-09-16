import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './CastNav.scss';

const castNavStyle = {
    transition: 'transform 200ms ease, opacity 50ms linear ease',
}

const castNavTransitionStyles = {
    entering: { transform: 'translateX(-300px)', opacity: 0 },
    entered: { transform: 'translateX(0px)', opacity: 1 },
    exiting: { transform: 'translateX(0px)', opacity: 1 },
    exited: { transform: 'translateX(-300px)', opacity: 0 }
}

//TODO: Al reducir el tamaño de pantalla, convertirse en menu desplegable

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
            <Transition in={ ready } timeout={ 0 }>
                {   (state) => (
                        <div className="CastNav" onScroll={ this.handleScroll } style={{ ...castNavStyle, ...castNavTransitionStyles[state] }}>
                            { this.props.children }
                        </div>
                    )
                }
            </Transition>
        );
    }
}

export default CastNav;