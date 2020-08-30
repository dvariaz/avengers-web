import React from "react";
import { motion } from "framer-motion";

import styles from "./ActorNav.module.scss";

import { barSize } from "../../../settings/global";

//TODO: Buscar un patron en las formas para poder crear el componente
const ActorRibbon = ({ index, name, color }) => {
    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };

    const rectangleVariants = {
        visible: {
            top: 0,
        },
        hidden: {
            top: "none",
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.Ribbon}
            style={{ left: barSize }}
        >
            <div className={styles.Index}>{index}</div>
            <div className={styles.Name}>{name}</div>
            <motion.div
                variants={rectangleVariants}
                className={styles.Rectangle}
                style={{ width: 300, background: color, bottom: 0 }}
            ></motion.div>
        </motion.div>
    );
};
export default ActorRibbon;
