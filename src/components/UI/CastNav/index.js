import React, { Component } from 'react';
import './CastNav.scss';

class CastNav extends Component {

    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
            // TODO: Hacer una transicion suave entre los items del castnav
        }
    }

    render(){
        return(
            <div className="CastNav" onScroll={ this.handleScroll }>
                { this.props.children }
            </div>
        );
    }
}

export default CastNav;