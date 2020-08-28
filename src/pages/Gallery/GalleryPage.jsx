import React, { useState, useEffect } from "react";

import ActorProfile from "./ActorProfile";
import ActorNav from "./ActorNav";

// import styles from './Gallery.module.scss';

const GalleryPage = ({ actor }) => {
    const [actors, setActors] = useState([
        {
            id: "joshbrolin",
            name: "Josh Brolin",
            score: "4,0",
            role: { name: "Thanos", movies: 1 },
            background: "Cast/JoshBrolin.jpg",
        },
        {
            id: "chrisevans",
            name: "Chris Evans",
            score: "5,0",
            role: { name: "Capitán América", movies: 7 },
            background: "Cast/ChrisEvans.jpg",
        },
        {
            id: "robertdowneyjr",
            name: "Robert Downey Jr",
            score: "5,0",
            role: { name: "Iron Man", movies: 1 },
            background: "Cast/RobertDowneyJr.jpg",
        },
        {
            id: "chrishemsworth",
            name: "Chris Hemsworth",
            score: "4,9",
            role: { name: "Thor", movies: 6 },
            background: "Cast/ChrisHemsworth.jpg",
        },
        {
            id: "chrispatt",
            name: "Chris Patt",
            score: "5,0",
            role: { name: "Star Lord", movies: 3 },
            background: "Cast/ChrisPatt.jpg",
        },
        {
            id: "scarlettjohansson",
            name: "Scarlett Johansson",
            score: "5,0",
            role: { name: "Black Widow", movies: 6 },
            background: "Cast/ScarlettJohansson.jpg",
        },
    ]);

    return (
        <div className="Container Respect-TopBar Respect-AllBars">
            <ActorProfile
                name={actors[1].name}
                score={actors[1].score}
                role={actors[1].role}
                background={actors[1].background}
            />
            <ActorNav />
        </div>
    );
};

export default GalleryPage;
