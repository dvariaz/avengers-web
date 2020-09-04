import React, { useContext, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { transparentize } from "polished";

import { NavigationContext } from "../NavigationContext";

import styles from "./ActorNav.module.scss";

const ActorNav = ({ name, color }) => {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch("/galeria/:actor");

    const { state, dispatch } = useContext(NavigationContext);

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

    useEffect(() => {
        const id = match.params.actor;
        dispatch({ type: "SET_INDEX", payload: { id } });
    }, []);

    useEffect(() => {
        history.push(state.cast[state.current].id);
    }, [state.current]);

    return (
        <>
            <nav className={styles.ActorNav}>
                {name}
                <div className={styles.Buttons}>
                    <a
                        href={`https://www.google.com/search?q=${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.RoundedButton}
                        style={{
                            background: color.gradient,
                            color: transparentize(0.3, color.flat),
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Search-Icon.svg`}
                            alt="Buscar en Google"
                        />
                    </a>
                    <button className={styles.RoundedButton} onClick={handleClick}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Share-Icon.svg`}
                            alt="Compartir actor"
                        />
                    </button>
                </div>
            </nav>

            <button
                onClick={goBackward}
                className={styles.ArrowLeft}
                style={{ background: color.gradient }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                    alt="Atrás"
                />
            </button>
            <button
                onClick={goForward}
                className={styles.ArrowRight}
                style={{ background: color.gradient }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                    alt="Adelante"
                />
            </button>
        </>
    );
};

export default ActorNav;
