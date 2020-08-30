import React from "react";
import { motion } from "framer-motion";

import styles from "./ActorNav.module.scss";

const ActorRibbon = ({ index, name, color }) => {
    const ribbonVariants = {
        visible: {
            transition: {
                when: "beforeChildren",
            },
        },
        hidden: {
            transition: {
                when: "beforeChildren",
            },
        },
    };

    const rectangleVariants = {
        visible: {
            top: 0,
            transition: { duration: 1, type: "tween", when: "beforeChildren" },
        },
        hidden: {
            top: "100%",
            transition: { duration: 0.6, type: "tween", when: "beforeChildren" },
        },
    };

    const textVariants = {
        visible: {
            x: 0,
            transition: {
                duration: 0.5,
                type: "tween",
            },
        },
        hidden: {
            x: -100,
            transition: {
                duration: 0.5,
                type: "tween",
            },
        },
    };

    const dataVariants = {
        visible: {
            width: "auto",
            transition: {
                staggerChildren: 0.15,
                duration: 0.8,
            },
        },
        hidden: {
            width: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={ribbonVariants}
            className={styles.Ribbon}
        >
            <motion.div variants={dataVariants} className={styles.Text}>
                <motion.h1 variants={textVariants} className={styles.Index}>
                    {index}
                </motion.h1>
                <motion.h1 variants={textVariants} className={styles.Name}>
                    {name}
                </motion.h1>
            </motion.div>
            <motion.div
                variants={rectangleVariants}
                className={styles.Rectangle}
                style={{ background: color }}
            />
        </motion.div>
    );
};
export default ActorRibbon;
