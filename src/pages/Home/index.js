import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';

import './Home.scss'

import Background from './../../components/Background';

class HomePage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    render(){
        return(
            <div className="Container CenterContent">
                <div className="PageContent">
                    <h1 className="BigTitle">INFINITY WAR</h1>
                    <h2>PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS</h2>
                    <a href="#watch_trailer">Ver Tráiler</a>
                </div>
                <Background src="Backgrounds/Wakanda.jpg"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(HomePage);