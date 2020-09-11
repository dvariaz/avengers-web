import React, { useRef } from "react";
import { motion } from "framer-motion";

import styles from "./TitanSection.module.scss";
import {
    titleVariants,
    paragraphVariants,
    containerVariants,
} from "../../../../settings/animationVariants";

import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

import useOnScreen from "../../../../hooks/useOnScreen";

const TitanSection = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "10px", 0.5);

    let thanosVariants = {
        enter: {
            x: -250,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
        },
        exit: {
            x: -250,
            y: 200,
            scale: 1,
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
                className={`Character ${styles.Character}`}
                initial="exit"
                variants={thanosVariants}
                src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Titan/Thanos.png`}
            />
            <motion.h1 className={styles.BigTitle} variants={titleVariants}>
                THANOS
            </motion.h1>
            <motion.div initial="exit" variants={containerVariants} className="TextContainer">
                <motion.h2 variants={paragraphVariants}>
                    El titán loco ha llegado a por las gemas
                </motion.h2>
                <motion.h2 variants={paragraphVariants}>
                    <strong>El conquistador de mundos</strong>
                </motion.h2>
                <motion.div variants={paragraphVariants}>
                    <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                </motion.div>
            </motion.div>
            <Background src="Backgrounds/Titan/Titan.jpg" />
        </motion.section>
    );
};

export default TitanSection;
