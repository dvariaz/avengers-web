import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';

import elements from './../../data/elements';

import Element from './Element';

class SynopsisPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    render(){
        let { element } = this.props;

        return(
            <div className="Container Respect-AllBars">
                <Element 
                    name={ elements[element].name }
                    synopsis={ elements[element].synopsis }
                    history={ elements[element].history }
                    image={ elements[element].image.src }
                    effect={ elements[element].image.effect }
                    size={ elements[element].image.size }
                    color={ elements[element].color }
                    background={ elements[element].background }/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(SynopsisPage);