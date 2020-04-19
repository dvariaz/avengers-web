import React, { useEffect } from "react";
import YouTube from 'react-youtube';

// import styles from './Trailer.module.scss';

import Background from './../../components/Background';

//TODO: El video debe ser responsive

const TrailerPage = () => {
    const opts = {
        height: '582',
        width: '1400',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            enablejsapi: 1,
            autoplay: 1
        }
    };

    const _onReady = event => {
        console.log('Ready');
        event.target.pauseVideo();
    }

    return(
        <div className="Container Respect-TopBar CenterContent">
            <YouTube
                videoId="823iAZOEKt8"
                opts={opts}
                onReady={_onReady}
            />
            <Background src="Backgrounds/Poster.jpg"/>
        </div>
    );
}

export default TrailerPage;