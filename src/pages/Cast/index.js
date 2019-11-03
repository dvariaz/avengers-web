import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { Router, navigate } from '@reach/router';
import './Cast.scss';

//Páginas
import CastCharacter from './CastCharacter';

//TODO: El elemento seleccionado debe mantener siempre arriba

const characters = { 
    'thanos': {
        name: 'Thanos',
        profile: '',
        photo: 'Characters/Thanos/Render.png',
        description: '',
        background: 'Characters/Thanos/Background.png',
        position: 'right'
    },
    'capitanamerica': {
        name: 'Capitán America',
        profile: '',
        photo: 'Characters/CaptainAmerica/Render.png',
        description: '',
        background: 'Characters/CaptainAmerica/Background.jpg',
        position: 'right'
    },
    'ironman': {
        name: 'Iron Man',
        profile: '',
        photo: 'Characters/IronMan/Render.png',
        description: '',
        background: 'Characters/IronMan/Background.jpg',
        position: 'right'
    },
    'thor': {
        name: 'Thor',
        profile: '',
        photo: 'Characters/Thor/Render.png',
        description: '',
        background: 'Characters/Thor/Background.webp',
        position: 'right'
    },
    'doctorstrange': {
        name: 'Doctor Strange',
        profile: '',
        photo: 'Characters/DoctorStrange/Render.png',
        description: '',
        background: 'Characters/DoctorStrange/Background.png',
        position: 'left'
    },
    'blackwidow': {
        name: 'Black Widow',
        profile: 'Characters/BlackWidow/Profile.png',
        photo: 'Characters/BlackWidow/Render.png',
        description: '',
        background: '',
        position: 'right'
    },
    'starlord': {
        name: 'Star Lord',
        profile: '',
        photo: 'Characters/StarLord/Render.png',
        description: '',
        background: '',
        position: 'right'
    },
    'hulk': {
        name: 'Hulk',
        profile: '',
        photo: 'Characters/Hulk/Render.png',
        description: '',
        background: '',
        position: 'right'
    },
};

class Cast extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    render() {
        let { character, section } = this.props;

        return(
            <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
                <CastCharacter name={ characters[character].name } photo= { characters[character].photo } background={ characters[character].background } position={ characters[character].position }/>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(Cast);