import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

import styles from "./ActorProfile.module.scss";

const ActorProfile = ({ name, score, role }) => {
    const [counter, setCounter] = useState(0);
    const mvCounter = useSpring(0, { stiffness: 150 });

    useEffect(() => {
        mvCounter.set(score);
        mvCounter.onChange((latest) => setCounter(latest));
    }, []);

    const navVariants = {
        visible: {
            x: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.7,
                type: "tween",
            },
        },
        hidden: {
            x: -800,
            transition: {
                staggerChildren: 0.3,
                duration: 0.7,
                type: "tween",
            },
        },
    };

    const linkVariants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.5,
            },
        },
        hidden: {
            x: -10,
            opacity: 0,
            transition: {
                type: "spring",
                delay: 0.5,
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

    const scoreVariants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };

    const renderStars = (score) => {
        const stars = [];

        for (let i = 1; i <= Math.ceil(score); i++) {
            if (i < score) {
                stars.push(
                    <img
                        key={i}
                        src={`${process.env.PUBLIC_URL}/assets/Icons/Score/FullStar_Icon.svg`}
                        alt=""
                    />
                );
            } else {
                stars.push(
                    <img
                        key={i}
                        src={`${process.env.PUBLIC_URL}/assets/Icons/Score/HalfStar_Icon.svg`}
                        alt=""
                    />
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
                <motion.a variants={linkVariants} href="#wallpaper">
                    Wallpaper
                </motion.a>
                <motion.a variants={linkVariants} href="#social">
                    Social
                </motion.a>
                <motion.a variants={linkVariants} href="#photos">
                    Photos
                </motion.a>
            </motion.nav>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={scoreVariants}
                className={styles.Score}
            >
                <div className={styles.Number}>{counter.toFixed(1)}</div>
                <div className={styles.BackgroundNumber}>{counter.toFixed(1)}</div>
                <div className={styles.Stars}>{renderStars(score)}</div>
            </motion.div>
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
