import React from "react";
import { motion } from "framer-motion";

import styles from "./GraphicElement.module.scss";

import GraphicIndicator from "./GraphicIndicator";

const GraphicElement = ({ image, effect, color, size }) => {
    const elementVariants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={elementVariants}>
            <img
                className={styles.Effect}
                src={`${process.env.PUBLIC_URL}/assets/${effect}`}
                style={{ height: size === "small" ? "50%" : "75%" }}
            />
            <GraphicIndicator color={color} location={"Desconocido"} />
            <img
                variants={elementVariants}
                className={styles.Element}
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                style={{ height: size === "small" ? "40%" : "60%" }}
            />
        </motion.div>
    );
};

export default GraphicElement;
