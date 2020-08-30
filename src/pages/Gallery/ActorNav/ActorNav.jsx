import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./ActorNav.module.scss";
import ActorRibbon from "./ActorRibbon";

const ActorNav = ({ index, name, color }) => {
    const location = useLocation();

    const slug = name.replace(" ", "+");

    const handleClick = async (e) => {
        try {
            await navigator.share({
                title: name,
                text: `Quieres saber más sobre ${name}, dale click aquí`,
                url: location.pathname,
            });
        } catch (err) {
            console.log("Error al compartir de forma nativa");
        }
    };

    return (
        <>
            <nav className={styles.ActorNav}>
                {name}
                <div className={styles.Buttons}>
                    <a
                        href={`https://www.google.com/search?q=${slug}`}
                        target="_blank"
                        className={styles.RoundedButton}
                        style={{ background: color.gradient, color: color.flat }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Search-Icon.svg`}
                        />
                    </a>
                    <button className={styles.RoundedButton} onClick={handleClick}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Share-Icon.svg`}
                        />
                    </button>
                </div>
            </nav>
            <ActorRibbon index={index} name={name} color={color.gradient} />

            <a href="#" className={styles.ArrowLeft} style={{ background: color.gradient }}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                />
            </a>
            <a href="#" className={styles.ArrowRight} style={{ background: color.gradient }}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                />
            </a>
        </>
    );
};

export default ActorNav;
