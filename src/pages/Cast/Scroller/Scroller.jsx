import React, { useEffect, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { NavigationContext } from "../NavigationContext";
import styles from "./Scroller.module.scss";

const Scroller = ({ color, next }) => {
    const history = useHistory();
    const match = useRouteMatch("/cast/:character");
    const { state, dispatch } = useContext(NavigationContext);

    const goForward = () => {
        dispatch({ type: "GO_FORWARD" });
    };

    const goBackward = () => {
        dispatch({ type: "GO_BACKWARD" });
    };

    //Fired when access to section by url
    useEffect(() => {
        let character = match.params.character;
        dispatch({ type: "SET_INDEX", payload: { id: character } });
    }, []);

    //Fired when the current section is updated
    useEffect(() => {
        history.push(state.characters[state.current].id);
        // optionsRef.current.scrollLeft = state.center - optionsRef.current.offsetWidth / 2;
    }, [state.current]);

    return (
        <div className={styles.Container}>
            <div className={styles.Body}>
                <button onClick={goBackward} style={{ background: color }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                        alt="Anterior sección"
                    />
                </button>
                <span>Scroll</span>
                <button onClick={goForward} style={{ background: color }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                        alt="Siguiente sección"
                    />
                </button>
            </div>
        </div>
    );
};

export default Scroller;
