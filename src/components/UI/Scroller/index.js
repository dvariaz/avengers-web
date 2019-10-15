import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StyledScroller from './StyledScroller';

import ArrowIcon from './../../../assets/Icons/Navigation/ChevronArrow-Icon.svg';

class Scroller extends Component{
    //TODO: Debe reaccionar al scroll
    //TODO: Para avanzar en las paginas de forma ciclica utilizar el operador modulo % (actual + 1 % paginas_totales)
    render(){
        let color = this.props.color;
        
        return(
            <StyledScroller color={ color }>
                <Link to={ this.props.previous } className={ `bg-${ color }` }><img src={ ArrowIcon } alt="Anterior sección"/></Link>
                <span>Scroll</span>
                <Link to={ this.props.next } className={ `bg-${ color }` }><img src={ ArrowIcon } alt="Siguiente sección"/></Link>
            </StyledScroller>
        );
    }
}

export default Scroller;