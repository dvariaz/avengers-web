import React from "react";
import { motion } from "framer-motion";

import styles from "./ActorNav.module.scss";

import { barSize } from "../../../settings/global";

//TODO: Buscar un patron en las formas para poder crear el componente
const ActorRibbon = ({ index, name, color }) => {
    const transition = {
        duration: 1,
        type: "tween",
    };

    const ribbonVariants = {
        visible: {
            transition: {
                when: "afterChildren",
            },
        },
        hidden: {
            transition: {
                when: "afterChildren",
            },
        },
    };

    const rectangleVariants = {
        visible: {
            top: 0,
            transition: { ...transition, when: "beforeChildren" },
        },
        hidden: {
            top: "none",
            transition: { ...transition, when: "beforeChildren" },
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

    const containerVariants = {
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
                duration: 0.8,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={ribbonVariants}
            className={styles.Ribbon}
            style={{ left: barSize }}
        >
            <motion.div variants={containerVariants} className={styles.Text}>
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
                style={{ width: 300, background: color, bottom: 0 }}
            ></motion.div>
        </motion.div>
    );
};
export default ActorRibbon;
