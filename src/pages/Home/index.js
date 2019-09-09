import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { withRouter } from 'react-router-dom';

import './Home.scss'

import Background from './../../components/Background';

import Wakanda from './../../assets/Backgrounds/Wakanda.jpg';

class HomePage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.location.pathname);
    }

    render(){
        return(
            <div className="Container CenterContent">
                <div className="Content">
                    <h1 className="MainTitle">INFINITY WAR</h1>
                    <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                    <a href="#watch_trailer">Ver Tráiler</a>
                </div>
                <Background src={ Wakanda }/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default withRouter(connect(null,mapDispatchToProps)(HomePage));