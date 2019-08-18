import React, { Component } from 'react';

//Styles
import './Scroller.scss';

import ArrowIcon from './../media/ChevronArrow-Icon.svg';


class Scroller extends Component {
    constructor(props){
        super(props);
        this.state = {
            i: 0,
        };

        this.scrollUp = this.scrollUp.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollUp(e){
        e.preventDefault();

        let previous;

        if(this.state.i > 0){
            previous = this.state.i - 1;
        }else{
            previous = this.props.items.length - 1;
        }

        this.setState({
            i: previous
        });
    }

    scrollDown(e){
        e.preventDefault();

        let next;

        if(this.state.i < this.props.items.length - 1){
            next = this.state.i + 1;
        }else{
            next = 0;
        }

        this.setState({
            i: next
        });
    }

    render(){
        let selection = 'blue';
        // console.log(this.props.items[this.state.i]);
        let color = this.props.items[this.state.i];
        return(
            <div className='Scroller'>
                <a href="#" onClick={this.scrollUp} className={ `bg-gradient-${ color }` }><img src={ ArrowIcon } /></a>
                <span>Scroll</span>
                <a href="#" onClick={this.scrollDown} className={ `bg-gradient-${ color }` }><img src={ ArrowIcon } /></a>
            </div>
        );
    }
}

export default Scroller;