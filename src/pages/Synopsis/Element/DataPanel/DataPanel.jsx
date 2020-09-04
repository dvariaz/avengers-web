import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

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
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={variants}>
            <StyledDataPanel color={color} position={position} className={styles.Panel}>
                <motion.div className={styles.Content}>
                    <motion.h1 variants={textVariants} position={position}>
                        {title}
                    </motion.h1>
                    <motion.p variants={textVariants} position={position}>
                        {content}
                    </motion.p>
                    <button>Ver más</button>
                </motion.div>
            </StyledDataPanel>
        </motion.div>
    );
};

const StyledDataPanel = styled.div`
    ${({ position }) => {
        if (position === "left") {
            return `left: ${barSize};top: ${barSize};`;
        }
        if (position === "right") {
            return `right: ${barSize};bottom: ${barSize};`;
        }
    }}

    > div {
        &::before {
            background: ${(props) => props.color};
        }

        button {
            border-color: ${(props) => props.color};
        }
    }
`;

export default DataPanel;
