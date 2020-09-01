import React from "react";
import { motion } from "framer-motion";
import titleize from "titleize";

import styles from "./Character.module.scss";

import Background from "../../../components/Background";

//TODO: Hacer que el texto siempre encaje en la pantalla

const Character = ({ name, description, background, photo, position, color }) => {
    const transition = {
        type: "spring",
        damping: 20,
        stiffness: 200,
        duration: 0.3,
    };

    const imageVariants = {
        visible: {
            top: "0%",
            opacity: 1,
            transition,
        },
        hidden: {
            top: "100%",
            opacity: 0,
            transition,
        },
        exit: {
            x: position === "right" ? 100 : -100,
            opacity: 0,
        },
    };

    const titleVariants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };

    const paragraphVariants = {
        visible: {
            x: 0,
            opacity: 1,
        },
        hidden: {
            x: -100,
            opacity: 0,
        },
    };

    const descriptionVariants = {
        visible: {
            transition: {
                staggerChildren: 0.05,
                type: "tween",
            },
        },
        hidden: {
            transition: {
                staggerChildren: 0.05,
                type: "tween",
            },
        },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={descriptionVariants}
                className={`${styles.Content} Respect-Image ${styles[titleize(position)]}`}
            >
                <motion.h1
                    variants={titleVariants}
                    className={styles.Title}
                    style={{ borderColor: color }}
                >
                    {name}
                </motion.h1>

                <div className={styles.Description}>
                    {description.split("\n").map((item, i) => (
                        <motion.p variants={paragraphVariants} key={i}>
                            {item}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                transition={transition}
                className={`${styles.Image} ${styles[titleize(position)]}`}
            >
                <img src={`${process.env.PUBLIC_URL}/assets/${photo}`} rel="preload" />
            </motion.div>
            <Background src={background} blur="5px" />
        </>
    );
};

export default Character;
