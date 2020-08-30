import React from "react";
import { useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./CastNav.module.scss";

import CastLink from "./CastLink";

//TODO: Al reducir el tamaño de pantalla, convertirse en menu desplegable

const CastNav = ({ items }) => {
    let { path } = useRouteMatch();

    const variants = {
        hidden: {
            x: -300,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const handleScroll = (e) => {
        let element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('Movemos el CastNav');
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ type: "tween" }}
            variants={variants}
            onScroll={handleScroll}
            className={styles.Nav}
        >
            {items.map((item) => (
                <CastLink
                    key={item.id}
                    to={`${path}/${item.slug}`}
                    image={item.profile}
                    color={item.color.flat}
                >
                    {item.name}
                </CastLink>
            ))}
        </motion.div>
    );
};

export default CastNav;
