import React, { useRef } from "react";
import { motion } from "framer-motion";

import styles from "./NYSanctumSection.module.scss";
import {
    titleVariants,
    paragraphVariants,
    containerVariants,
} from "../../../../settings/animationVariants";

import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

import useOnScreen from "../../../../hooks/useOnScreen";

const NYSanctumSection = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "10px", 0.5);

    let transition = {
        duration: 0.8,
    };

    let drStrangeVariants = {
        enter: {
            x: 0,
            y: 100,
            scale: 1.1,
            transition,
        },
        exit: {
            x: 0,
            y: 250,
            scale: 1.1,
            transition,
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
                variants={drStrangeVariants}
                src={`${process.env.PUBLIC_URL}/assets/Backgrounds/NewYorkSanctum/DoctorStrange.png`}
            />
            <motion.h1 variants={titleVariants} className={styles.BigTitle}>
                DOCTOR STRANGE
            </motion.h1>
            <motion.div variants={containerVariants} className="TextContainer">
                <motion.h2 variants={paragraphVariants}>
                    Y harán todo lo posible para salvar el futuro de la humanidad
                </motion.h2>
                <motion.div variants={paragraphVariants}>
                    <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                </motion.div>
            </motion.div>

            <Background src="Backgrounds/NewYorkSanctum/NewYorkSanctum.jpg" />
        </motion.section>
    );
};

export default NYSanctumSection;
