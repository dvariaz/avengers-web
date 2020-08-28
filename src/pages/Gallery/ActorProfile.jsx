import React from "react";

import styles from "./ActorProfile.module.scss";

import Background from "../../components/Background";

const ActorProfile = ({ name, score, role, background }) => {
    return (
        <section className={`PageContent ${styles.ProfileContent}`}>
            <div>
                <nav className={styles.Nav}>
                    <a href="#">Wallpaper</a>
                    <a href="#">Social</a>
                    <a href="#">Photos</a>
                </nav>
                <div className={styles.Score}>
                    <div className={styles.Number}>{score}</div>
                    <div className={styles.BackgroundNumber}>{score}</div>
                    <div className={styles.Stars}>🌟🌟🌟🌟</div>
                </div>
                <div className={styles.Role}>
                    <span>{role.name}</span>
                    <p>{role.movies} Películas</p>
                </div>
            </div>
            <Background src={background} />
        </section>
    );
};

export default ActorProfile;
