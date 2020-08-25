import React from "react";
import { motion } from "framer-motion";

import styles from "./WakandaSection.module.scss";

import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

const WakandaSection = ({ visible }) => {
    let transition = {
        duration: 0.8,
    };

    let childTransition = {
        duration: 0.6,
    };

    let titleVariants = {
        enter: {
            y: 0,
            opacity: 1,
            transition,
        },
        exit: {
            y: -20,
            opacity: 0,
            transition,
        },
    };

    let paragraphVariants = {
        enter: {
            y: 0,
            opacity: 1,
            transition,
        },
        exit: {
            y: 20,
            opacity: 0,
            transition,
        },
    };

    let containerVariants = {
        enter: {
            transition: { duration: 0.3, staggerChildren: 0.3 },
        },
        exit: {
            transition: { duration: 0.3, staggerChildren: 0.3 },
        },
    };

    let captainAmericaVariants = {
        enter: {
            x: 0,
            y: 50,
            transition,
        },
        exit: {
            x: 0,
            y: 200,
            transition,
        },
    };

    let blackPantherVariants = {
        enter: {
            x: -500,
            y: 130,
            transition,
        },
        exit: {
            x: -500,
            y: 200,
            transition,
        },
    };

    let blackWidowVariants = {
        enter: {
            x: 400,
            y: 130,
            transition,
        },
        exit: {
            x: 400,
            y: 200,
            transition,
        },
    };

    return (
        <section className="PageContent SlideContent">
            <motion.img
                className="Character"
                initial="exit"
                animate="enter"
                variants={captainAmericaVariants}
                src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/CaptainAmerica.png`}
            />
            <motion.img
                className="Character"
                initial="exit"
                animate="enter"
                variants={blackWidowVariants}
                src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackWidow.png`}
            />
            <motion.img
                className="Character"
                initial="exit"
                animate="enter"
                variants={blackPantherVariants}
                src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackPanther.png`}
            />
            <motion.h1 className="BigTitle" initial="exit" animate="enter" variants={titleVariants}>
                INFINITY WAR
            </motion.h1>
            <motion.div
                className="TextContainer"
                initial="exit"
                animate="enter"
                variants={containerVariants}
            >
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

            <div className="Background">
                <img src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/Wakanda.jpg`} />
            </div>
        </section>
    );
};

export default WakandaSection;
