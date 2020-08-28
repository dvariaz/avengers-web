import React from "react";
import { motion } from "framer-motion";

import styles from "./TitanSection.module.scss";

import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

const TitanSection = () => {
    let transition = {
        duration: 0.8,
    };

    let thanosVariants = {
        enter: {
            x: -250,
            y: 300,
            scale: 0.6,
            transition,
        },
        exit: {
            x: -250,
            y: 400,
            scale: 0.6,
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

    return (
        <section className="PageContent SlideContent">
            <motion.img
                className="Character"
                initial="exit"
                animate="enter"
                variants={thanosVariants}
                src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Titan/Thanos.png`}
            />
            <h1 className="BigTitle" style={{ fontSize: "14em", top: "0.25em" }}>
                THANOS
            </h1>
            <motion.div
                className="TextContainer"
                initial="exit"
                animate="enter"
                variants={containerVariants}
            >
                <h2>El titán loco ha llegado a por las gemas</h2>
                <h2>
                    <strong>El conquistador de mundos</strong>
                </h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
            </motion.div>
            <Background src="Backgrounds/Titan/Titan.jpg" />
        </section>
    );
};

export default TitanSection;
