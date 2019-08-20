import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Scroller.scss';

import ArrowIcon from './../media/ChevronArrow-Icon.svg';

class Scroller extends Component{
    //TODO: Debe reaccionar al scroll
    render(){
        let color = this.props.color;
        return(
            <div className='Scroller'>
                <Link to={ this.props.previous } className={ `bg-${ color }` }><img src={ ArrowIcon } /></Link>
                <span>Scroll</span>
                <Link to={ this.props.next } className={ `bg-${ color }` }><img src={ ArrowIcon } /></Link>
            </div>
        );
    }
}

export default Scroller;