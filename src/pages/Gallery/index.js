import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import Background from "../../components/Background/index.js";
// import styles from './Gallery.module.scss';

class GalleryPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    constructor(props) {
        super(props);
        this.state = {
            actors: [
                {
                    name: 'joshbrolin',
                    image: 'Cast/JoshBrolin.jpg'
                },
                {
                    name: 'chrisevans',
                    image: 'Cast/ChrisEvans.jpg'
                },
                {
                    name: 'robertdowneyjr',
                    image: 'Cast/RobertDowneyJr.jpg'
                },
                {
                    name: 'chrishemsworth',
                    image: 'Cast/ChrisHemsworth.jpg'
                },
                {
                    name: 'chrispatt',
                    image: 'Cast/ChrisPatt.jpg'
                },
                {
                    name: 'scarlettjohansson',
                    image: 'Cast/ScarlettJohansson.jpg'
                }
            ]
        }
    }

    render(){
        let { actor } = this.props;

        return(
            <div className="Container Respect-TopBar Respect-SideBars">
                <h1>This is the gallery of {actor}</h1>
                <Background src="Cast/JoshBrolin.jpg"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(GalleryPage);