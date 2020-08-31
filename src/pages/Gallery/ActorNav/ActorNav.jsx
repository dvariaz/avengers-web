import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { transparentize } from "polished";

import { NavigationContext } from "../NavigationContext";

import styles from "./ActorNav.module.scss";
import ActorRibbon from "./ActorRibbon";

const ActorNav = ({ index, name, color }) => {
    const location = useLocation();

    const { dispatch } = useContext(NavigationContext);

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

    const goBackward = () => {
        dispatch({ type: "GO_BACKWARD" });
    };

    const goForward = () => {
        dispatch({ type: "GO_FORWARD" });
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
                        style={{
                            background: color.gradient,
                            color: transparentize(0.3, color.flat),
                        }}
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

            <button
                onClick={goBackward}
                className={styles.ArrowLeft}
                style={{ background: color.gradient }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                />
            </button>
            <button
                onClick={goForward}
                className={styles.ArrowRight}
                style={{ background: color.gradient }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                />
            </button>
        </>
    );
};

export default ActorNav;
