import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import titleize from "titleize";

import styles from "./DataPanel.module.scss";

import { barSize } from "../../../../settings/global";

const DataPanel = ({ color, position, title, content }) => {
    const variants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 5,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const textVariants = {
        visible: {
            x: "0%",
            transition: { duration: 400 },
        },
        hidden: {
            x: ({ position }) => {
                if (position === "left") {
                    return "-120%";
                } else {
                    return "120%";
                }
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className={`${styles.Panel} ${styles[titleize(position)]}`}
        >
            <motion.div className={styles.Content}>
                <div className={styles.Indicator} style={{ background: color }}></div>
                <motion.h1 variants={textVariants} position={position}>
                    {title}
                </motion.h1>
                <motion.p variants={textVariants} position={position}>
                    {content}
                </motion.p>
                <button style={{ borderColor: color }}>Ver más</button>
            </motion.div>
        </motion.div>
    );
};

export default DataPanel;
