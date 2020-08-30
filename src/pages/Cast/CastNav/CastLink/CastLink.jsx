import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { transparentize } from "polished";
import styled from "styled-components";
import { motion } from "framer-motion";

import styles from "./CastLink.module.scss";

const StyledCastLink = styled(NavLink)`
    > div {
        border-color: ${(props) => props.color};
        background-image: linear-gradient(
                90deg,
                ${(props) => transparentize(0.5, props.color)},
                transparent
            ),
            url("${(props) => props.image}");
    }
`;

const CastLink = ({ to, image, color, children }) => {
    let location = useLocation();

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

    const isCurrent = (location) => {
        return to === location.pathname;
    };

    return (
        <>
            <StyledCastLink
                to={to}
                image={`${process.env.PUBLIC_URL}/assets/${image}`}
                color={color}
            >
                <motion.div
                    initial="inactive"
                    animate={isCurrent(location) ? "active" : "inactive"}
                    transition={{ type: "tween" }}
                    variants={variants}
                    className={styles.Link}
                >
                    {children}
                </motion.div>
            </StyledCastLink>
        </>
    );
};

export default CastLink;
