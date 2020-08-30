import React, { useState, useEffect } from "react";

import colors from "../../settings/colors";

import Background from "../../components/Background";
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
            color: colors.sapphire,
        },
        {
            id: "chrisevans",
            name: "Chris Evans",
            score: "5,0",
            role: { name: "Capitán América", movies: 7 },
            background: "Cast/ChrisEvans.jpg",
            color: colors.neonBlue,
        },
        {
            id: "robertdowneyjr",
            name: "Robert Downey Jr",
            score: "5,0",
            role: { name: "Iron Man", movies: 1 },
            background: "Cast/RobertDowneyJr.jpg",
            color: colors.torchRed,
        },
        {
            id: "chrishemsworth",
            name: "Chris Hemsworth",
            score: "4,9",
            role: { name: "Thor", movies: 6 },
            background: "Cast/ChrisHemsworth.jpg",
            color: colors.neonBlue,
        },
        {
            id: "chrispatt",
            name: "Chris Patt",
            score: "5,0",
            role: { name: "Star Lord", movies: 3 },
            background: "Cast/ChrisPatt.jpg",
            color: colors.darkViolet,
        },
        {
            id: "scarlettjohansson",
            name: "Scarlett Johansson",
            score: "5,0",
            role: { name: "Black Widow", movies: 6 },
            background: "Cast/ScarlettJohansson.jpg",
            color: colors.gamboge,
        },
    ]);

    return (
        <div className="Container Respect-TopBar Respect-AllBars">
            <ActorNav index={1} name={actors[1].name} color={actors[1].color} />
            <ActorProfile name={actors[1].name} score={actors[1].score} role={actors[1].role} />
            <Background src={actors[1].background} />
        </div>
    );
};

export default GalleryPage;
