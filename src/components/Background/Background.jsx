import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import styles from "./Background.module.scss";

const StyledBackground = styled.img`
    filter: ${(props) => props.blur};
`;

const Background = ({ src, blur }) => {
    let blurProp = `blur(${blur || "0px"})`;

    const variants = {
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
            },
        },
        hidden: {
            scale: 1.15,
            opacity: 0,
            filter: "blur(30px)",
            transition: {
                duration: 0.5,
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
            <StyledBackground src={`${process.env.PUBLIC_URL}/assets/${src}`} blur={blurProp} />
        </motion.div>
    );
};

export default Background;
