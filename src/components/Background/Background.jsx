import React from "react";
import { motion } from "framer-motion";

import styles from "./Background.module.scss";

const Background = ({ src, blur, transitionDuration = 0.5, objectPosition, fixed = false }) => {
    let blurProp = `blur(${blur || "0px"})`;

    const variants = {
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: transitionDuration,
            },
        },
        hidden: {
            scale: 1.15,
            opacity: 0,
            filter: "blur(30px)",
            transition: {
                duration: transitionDuration,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className={styles.Background}
            style={{ position: fixed ? "fixed" : "absolute" }}
        >
            <img
                src={`${process.env.PUBLIC_URL}/assets/${src}`}
                style={{ objectPosition: objectPosition || "center", filter: blurProp }}
                alt=""
            />
        </motion.div>
    );
};

export default Background;
