import React, { useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

import styles from "./Trailer.module.scss";

import Background from "./../../components/Background";

const TrailerPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const opts = {
        height: "582",
        width: "1400",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            enablejsapi: 1,
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        console.log("Ready");
        event.target.pauseVideo();
    };

    const _handlePlay = (event) => {
        setIsExpanded(true);
    };

    const _handlePause = (event) => {
        setIsExpanded(false);
    };

    return (
        <div className="Container Respect-TopBar CenterContent">
            <motion.div className={`${styles.VideoPlayer} ${!isExpanded ? styles.Closed : ""}`}>
                <YouTube
                    videoId="823iAZOEKt8"
                    opts={opts}
                    onPlay={_handlePlay}
                    onReady={_onReady}
                    onPause={_handlePause}
                />
            </motion.div>
            <Background src="Backgrounds/Poster.jpg" />
        </div>
    );
};

export default TrailerPage;
