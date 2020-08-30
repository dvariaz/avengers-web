import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import titleize from "titleize";

import styles from "./Character.module.scss";

import Background from "../../../components/Background";

//TODO: Hacer que el texto siempre encaje en la pantalla

const Title = styled.h1`
    border-color: ${({ color }) => color};
`;

const Character = ({ name, description, background, photo, position, color }) => {
    const transition = {
        type: "spring",
        damping: 20,
        stiffness: 200,
        duration: 0.3,
    };

    const variants = {
        hidden: {
            top: "100%",
            opacity: 0,
        },
        visible: {
            top: "0%",
            opacity: 1,
        },
    };

    return (
        <>
            <div className={`${styles.Content} Respect-Image ${titleize(position)}`}>
                <Title className={styles.Title} color={color}>
                    {name}
                </Title>
                {description.split("\n").map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={transition}
                className={`${styles.Image} ${styles[titleize(position)]}`}
            >
                <img src={`${process.env.PUBLIC_URL}/assets/${photo}`} />
            </motion.div>
            <Background src={background} blur="5px" />
        </>
    );
};

export default Character;
