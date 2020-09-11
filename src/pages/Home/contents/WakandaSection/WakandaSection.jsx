import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./WakandaSection.module.scss";
import {
    titleVariants,
    paragraphVariants,
    containerVariants,
} from "../../../../settings/animationVariants";

import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

import useOnScreen from "../../../../hooks/useOnScreen";

const WakandaSection = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "10px", 0.5);

    let captainAmericaVariants = {
        enter: {
            x: 0,
            y: 50,
            transition: { duration: 0.8 },
        },
        exit: {
            x: 0,
            y: 200,
            transition: { duration: 0.8 },
        },
    };

    let blackPantherVariants = {
        enter: {
            x: -400,
            y: 0,
            transition: { duration: 0.8 },
        },
        exit: {
            x: -400,
            y: 150,
            transition: { duration: 0.8 },
        },
    };

    let blackWidowVariants = {
        enter: {
            x: 400,
            y: 0,
            transition: { duration: 0.8 },
        },
        exit: {
            x: 400,
            y: 160,
            transition: { duration: 0.8 },
        },
    };

    return (
        <motion.section
            initial="exit"
            animate={isVisible ? "enter" : "exit"}
            className="PageContent Respect-TopBar Respect-SideBars SlideContent"
            ref={ref}
        >
            <motion.img
                className="Character"
                initial="exit"
                variants={captainAmericaVariants}
                src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/CaptainAmerica.png`}
            />
            <motion.img
                className="Character"
                initial="exit"
                variants={blackWidowVariants}
                src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackWidow.png`}
            />
            <motion.img
                className="Character"
                initial="exit"
                variants={blackPantherVariants}
                src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackPanther.png`}
            />
            <motion.h1 className={styles.BigTitle} initial="exit" variants={titleVariants}>
                INFINITY WAR
            </motion.h1>
            <motion.div className="TextContainer" initial="exit" variants={containerVariants}>
                <motion.h2 variants={paragraphVariants}>
                    PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS
                </motion.h2>
                <motion.p variants={paragraphVariants}>
                    La pelicula más esperada del momento está aqui
                </motion.p>
                <motion.div variants={paragraphVariants}>
                    <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                </motion.div>
            </motion.div>

            <Background src="Backgrounds/Wakanda/Wakanda.jpg" />
        </motion.section>
    );
};

export default WakandaSection;
