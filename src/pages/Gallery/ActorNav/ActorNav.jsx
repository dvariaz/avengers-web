import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { transparentize } from "polished";
import { useUserAgent } from "@oieduardorabelo/use-user-agent";

import { NavigationContext } from "../NavigationContext";

import styles from "./ActorNav.module.scss";

import Scroller from "../../../components/UI/Scroller";

const ActorNav = ({ name, color }) => {
    const details = useUserAgent();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch("/galeria/:actor");

    const { state, dispatch } = useContext(NavigationContext);

    const slug = name.replace(" ", "+");

    const handleClick = async (e) => {
        let data = {
            title: name,
            text: `Quieres saber más sobre ${name}, dale click aquí`,
            url: location.pathname,
        };
        if (navigator.canShare && navigator.canShare({ text: data.text })) {
            try {
                await navigator.share(data);
                console.log("Se ha compartido");
            } catch (err) {
                console.log("Error al compartir de forma nativa");
            }
        } else {
            console.log("Acción no permitida en PC");
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
                    {navigator.canShare && (
                        <button className={styles.RoundedButton} onClick={handleClick}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Share-Icon.svg`}
                                alt="Compartir actor"
                            />
                        </button>
                    )}
                </div>
            </nav>
            {details?.device.type ? (
                <Scroller
                    color={state.cast[state.current].color}
                    backward={goBackward}
                    forward={goForward}
                />
            ) : (
                <>
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
            )}
        </>
    );
};

export default ActorNav;
