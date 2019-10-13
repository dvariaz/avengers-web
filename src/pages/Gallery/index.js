import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { withRouter } from 'react-router-dom';
// import styles from './Gallery.module.scss';

import JoshBrolinImage from './../../assets/Cast/JoshBrolin.jpg';
import ChrisEvansImage from './../../assets/Cast/ChrisEvans.jpg';
import RobertDowneyJrImage from './../../assets/Cast/RobertDowneyJr.jpg';
import ChrisHemsworthImage from './../../assets/Cast/ChrisHemsworth.jpg';
import ChrisPattImage from './../../assets/Cast/ChrisPatt.jpg';
import ScarlettJohanssonImage from './../../assets/Cast/ScarlettJohansson.jpg';

class GalleryPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.location.pathname);
    }

    constructor(props) {
        super(props);
        this.state = {
            actors: [
                {
                    name: 'joshbrolin',
                    image: JoshBrolinImage
                },
                {
                    name: 'chrisevans',
                    image: ChrisEvansImage
                },
                {
                    name: 'robertdowneyjr',
                    image: RobertDowneyJrImage
                },
                {
                    name: 'chrishemsworth',
                    image: ChrisHemsworthImage
                },
                {
                    name: 'chrispatt',
                    image: ChrisPattImage
                },
                {
                    name: 'scarlettjohansson',
                    image: ScarlettJohanssonImage
                }
            ]
        }
    }

    render(){
        let { actor } = this.props.match.params;
        return(
            <div className="Container Respect-TopBar Respect-SideBars">
                <h1>This is the gallery of { actor }</h1>
                <img className="Background" src={ JoshBrolinImage } alt="Fondo"></img>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default withRouter(connect(null,mapDispatchToProps)(GalleryPage));