import React, { useEffect, useRef, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { transparentize } from "polished";
import { motion } from "framer-motion";

import styles from "./CastLink.module.scss";
import { NavigationContext } from "../../NavigationContext";

const CastLink = ({ id, name, image, color }) => {
    const ref = useRef();
    const match = useRouteMatch("/cast/:character");
    const { dispatch } = useContext(NavigationContext);

    const variants = {
        active: {
            fontSize: "1.4em",
            borderLeftWidth: "0.3em",
            backgroundSize: "100%, cover",
        },
        inactive: {
            fontSize: "1.2em",
            borderLeftWidth: "0em",
            backgroundSize: "0%, cover",
        },
    };

    useEffect(() => {
        const scrollPosition = ref.current.offsetTop - 50;
        dispatch({ type: "LOAD_CENTER", payload: { id, center: scrollPosition } });
    }, []);

    const handleClick = () => {
        if (id != match.params.character) {
            dispatch({ type: "SET_INDEX", payload: { id } });
        }
    };

    return (
        <>
            <motion.button
                ref={ref}
                initial="inactive"
                animate={id === match.params.character ? "active" : "inactive"}
                transition={{ type: "tween" }}
                variants={variants}
                className={styles.Link}
                style={{
                    borderColor: color,
                    backgroundImage: `linear-gradient(90deg,${transparentize(
                        0.5,
                        color
                    )},transparent), url("${process.env.PUBLIC_URL}/assets/${image}")`,
                }}
                onClick={handleClick}
            >
                {name}
            </motion.button>
        </>
    );
};

export default CastLink;
