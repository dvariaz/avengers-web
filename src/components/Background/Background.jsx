import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import styles from "./Background.module.scss";

const StyledBackground = styled.img`
    filter: ${(props) => props.blur};
    object-position: ${(props) => props.objectPosition || "center"};
`;

const Background = ({ src, blur, transitionDuration = 0.5, objectPosition }) => {
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
        >
            <StyledBackground
                src={`${process.env.PUBLIC_URL}/assets/${src}`}
                blur={blurProp}
                objectPosition={objectPosition}
                alt=""
            />
        </motion.div>
    );
};

export default Background;
