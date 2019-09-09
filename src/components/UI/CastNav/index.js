import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './CastNav.scss';

const castNavStyle = {
    transition: `transform 200ms, opacity 150ms`
}

const castNavTransitionStyles = {
    entering: { transform: 'translateX(-300px)', opacity: 0 },
    entered: { transform: 'translateX(0px)', opacity: 1 },
    exiting: { transform: 'translateX(0px)', opacity: 1 },
    exited: { transform: 'translateX(-300px)', opacity: 0 }
}

//TODO: Mirar como hacer la animacion de salida

class CastNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            ready: false
        }
    }
    
    componentDidMount(){
        this.setState({ ready: true });
    }
    
    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
            // TODO: Hacer una transicion suave entre los items del castnav
        }
    }

    render(){
        let ready = this.state.ready;

        return(
            <Transition in={ ready } timeout={ 200 } >
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