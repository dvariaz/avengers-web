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

    const roleVariants = {
        visible: {
            x: 0,
        },
        hidden: {
            x: 250,
        },
    };

    return (
        <section className={`PageContent ${styles.ProfileContent}`}>
            <nav className={styles.Nav}>
                <a href="#wallpaper">Wallpaper</a>
                <a href="#social">Social</a>
                <a href="#photos">Photos</a>
            </nav>
            <div className={styles.Score}>
                <div className={styles.Number}>{counter.toFixed(1)}</div>
                <div className={styles.BackgroundNumber}>{counter.toFixed(1)}</div>
                <div className={styles.Stars}>🌟🌟🌟🌟</div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
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
