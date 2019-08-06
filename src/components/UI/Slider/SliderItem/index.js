import React, { Component } from 'react';

class SliderItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'bg-gradient-' + this.props.color
        };
    }

    render(){

        let background = this.props.enabled ? this.state.color : '';

        return(
            <>
                <a href="#" className={ background }>{ this.props.children }</a>
            </>
        );
    }
}

export default SliderItem;