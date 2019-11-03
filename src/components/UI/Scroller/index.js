import React, { Component } from 'react';
import { Link } from '@reach/router';
import StyledScroller from './StyledScroller';

class Scroller extends Component{
    //TODO: Debe reaccionar al scroll
    //TODO: Para avanzar en las paginas de forma ciclica utilizar el operador modulo % (actual + 1 % paginas_totales)
    render(){
        let color = this.props.color;
        
        return(
            <StyledScroller color={ color }>
                <Link to={ this.props.previous } className={ `bg-${ color }` }><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Anterior sección"/></Link>
                <span>Scroll</span>
                <Link to={ this.props.next } className={ `bg-${ color }` }><img src={ `${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg` } alt="Siguiente sección"/></Link>
            </StyledScroller>
        );
    }
}

export default Scroller;