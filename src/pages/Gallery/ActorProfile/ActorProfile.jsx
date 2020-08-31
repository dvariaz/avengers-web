import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

import styles from "./ActorProfile.module.scss";

const ActorProfile = ({ name, score, role }) => {
    const [counter, setCounter] = useState(0);
    const counterMV = useSpring(0, { stiffness: 150 });

    useEffect(() => {
        counterMV.set(score);
        counterMV.onChange((latest) => setCounter(latest));
    }, []);

    const navVariants = {
        visible: {
            x: 0,
            transition: {
                duration: 0.7,
                type: "tween",
            },
        },
        hidden: {
            x: -800,
            transition: {
                duration: 0.7,
                type: "tween",
            },
        },
    };

    const roleVariants = {
        visible: {
            x: 0,
        },
        hidden: {
            x: 250,
        },
    };

    const renderStars = (score) => {
        const stars = [];

        for (let i = 1; i <= Math.ceil(score); i++) {
            if (i < score) {
                stars.push(
                    <img src={`${process.env.PUBLIC_URL}/assets/Icons/Score/FullStar_Icon.svg`} />
                );
            } else {
                stars.push(
                    <img src={`${process.env.PUBLIC_URL}/assets/Icons/Score/HalfStar_Icon.svg`} />
                );
            }
        }

        return stars;
    };

    return (
        <section className={`PageContent ${styles.ProfileContent}`}>
            <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={navVariants}
                className={styles.Nav}
            >
                <a href="#wallpaper">Wallpaper</a>
                <a href="#social">Social</a>
                <a href="#photos">Photos</a>
            </motion.nav>
            <div className={styles.Score}>
                <div className={styles.Number}>{counter.toFixed(1)}</div>
                <div className={styles.BackgroundNumber}>{counter.toFixed(1)}</div>
                <div className={styles.Stars}>{renderStars(score)}</div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={roleVariants}
                className={styles.Role}
            >
                <span>{role.name}</span>
                <p>{role.movies} Películas</p>
            </motion.div>
        </section>
    );
};

export default ActorProfile;
