import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import './Cast.scss';

import characters from './../../data/characters';

//Páginas
import Character from './Character';

class Cast extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    render() {
        let { character, section } = this.props;

        return(
            <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
                <Character 
                    name={ characters[character].name }
                    description= { characters[character].description }
                    photo= { characters[character].photo }
                    background={ characters[character].background }
                    position={ characters[character].position }
                    color={ characters[character].color }
                />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(Cast);