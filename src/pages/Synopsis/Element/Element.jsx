import React, { useState, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useUserAgent } from "@oieduardorabelo/use-user-agent";

import styles from "./Element.module.scss";

import useOnScreen from "../../../hooks/useOnScreen";

import Background from "../../../components/Background";
import DataPanel from "./DataPanel";
import GraphicElement from "./GraphicElement";
import { NavigationContext } from "../NavigationContext";
import ScrollIndicator from "../../../components/UI/ScrollIndicator";

const Element = ({ id, name, synopsis, history, color, background, image, effect, size }) => {
    const ref = useRef();
    const scrollVisible = useOnScreen(ref, "50px", 0.95);
    const details = useUserAgent();

    const { dispatch } = useContext(NavigationContext);

    useEffect(() => {
        dispatch({ type: "SET_INDEX", payload: { id } });
    }, []);

    const titleVariants = {
        visible: {
            transition: {
                staggerChildren: 0,
            },
        },
        hidden: {
            transition: {
                staggerChildren: 0,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const splitWord = (word) => {
        const letters = Array.from(word[0]);
        const zinfo = word[1];

        const letterVariants = {
            visible: {
                opacity: 1,
                letterSpacing: "10px",
                y: 0,
                transition: {
                    delay: 1,
                    duration: 0.5,
                    type: "tween",
                },
            },
            hidden: {
                opacity: 0,
                letterSpacing: "-100px",
                y: 0,
                transition: {
                    duration: 0.5,
                    type: "tween",
                },
            },
            exit: {
                opacity: 0,
                y: -100,
                transition: {
                    duration: 0.25,
                    type: "tween",
                },
            },
        };

        return (
            <>
                {letters.map((letter, index) => (
                    <motion.span
                        variants={letterVariants}
                        key={index}
                        className={zinfo[index] === "f" ? styles.Front : styles.Back}
                    >
                        {letter}
                    </motion.span>
                ))}
            </>
        );
    };

    return (
        <>
            <div className={styles.Container} ref={ref}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={titleVariants}
                    className={styles.Title}
                >
                    {splitWord(name)}
                    <GraphicElement image={image} effect={effect} size={size} color={color.flat} />

                    {details && details.device.type && (
                        <ScrollIndicator
                            style={{ position: "absolute", top: "-200px" }}
                            visible={scrollVisible}
                        />
                    )}
                </motion.div>
            </div>
            <DataPanel
                color={color.flat}
                position={"left"}
                title={`Sinopsis ${name[0]}`}
                content={synopsis}
            />
            <DataPanel
                color="white"
                position={"right"}
                title={`Historia ${name[0]}`}
                content={history}
            />

            <Background src={background} blur="2px" fixed />
        </>
    );
};

export default Element;
