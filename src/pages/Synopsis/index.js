import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { Link } from '@reach/router';
// import styles from './Synopsis.module.scss';

import SynopsisNav from './../../components/UI/SynopsisNav';
import Background from './../../components/Background';

class SynopsisPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    render(){
        return(
            <div className="Container Respect-AllBars">
                <h1 style={{ color: 'white' }}>This is the Synopsis { this.props.element }</h1>
                <SynopsisNav>
                    <Link to="./../general">GENERAL</Link>
                    <Link to="./../guantelete">GUANTELETE</Link>
                    <Link to="./../poder">PODER</Link>
                    <Link to="./../tiempo">TIEMPO</Link>
                    <Link to="./../mente">MENTE</Link>
                    <Link to="./../realidad">REALIDAD</Link>
                    <Link to="./../alma">ALMA</Link>
                    <Link to="./../espacio">ESPACIO</Link>
                </SynopsisNav>
                <Background src="Backgrounds/Galaxy.jpg"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(SynopsisPage);