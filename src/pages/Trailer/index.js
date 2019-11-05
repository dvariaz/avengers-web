import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import YouTube from 'react-youtube';

// import styles from './Trailer.module.scss';

import Background from './../../components/Background';

//TODO: El video debe ser responsive

class TrailerPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.uri);
    }

    _onReady(event) {
        console.log('Ready');
        event.target.pauseVideo();
    }

    render(){
        const opts = {
            height: '582',
            width: '1400',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                enablejsapi: 1,
                autoplay: 1
            }
          };

        return(
            <div className="Container Respect-TopBar CenterContent">
                <YouTube
                    videoId="823iAZOEKt8"
                    opts={opts}
                    onReady={this._onReady}
                />
                <Background src="Backgrounds/Poster.jpg"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default connect(null,mapDispatchToProps)(TrailerPage);