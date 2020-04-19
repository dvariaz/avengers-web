import React, { useState, useEffect } from "react";

import Background from "../../components/Background/index.js";
// import styles from './Gallery.module.scss';

const GalleryPage = ({actor}) => {
    const [actors, setActors] = useState([
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
    ])

    return(
        <div className="Container Respect-TopBar Respect-SideBars">
            <h1>This is the gallery of {actor}</h1>
            <Background src="Cast/JoshBrolin.jpg"/>
        </div>
    );
}

export default GalleryPage;