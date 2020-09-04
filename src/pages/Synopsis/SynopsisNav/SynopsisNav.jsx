import React, { useContext, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

//Styles
import styles from "./SynopsisNav.module.scss";

import { NavigationContext } from "../NavigationContext";
import SynopsisLink from "./SynopsisLink";

const SynopsisNav = () => {
    const history = useHistory();
    const match = useRouteMatch("/sinopsis/:element");

    const { state, dispatch } = useContext(NavigationContext);

    const variants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const goBackward = () => {
        dispatch({ type: "GO_BACKWARD" });
    };

    const goForward = () => {
        dispatch({ type: "GO_FORWARD" });
    };

    //Fired when access to section by url
    useEffect(() => {
        let element = match.params.element;
        dispatch({ type: "SET_INDEX", payload: { id: element } });
    }, []);

    //Fired when the current section is updated
    useEffect(() => {
        history.push(state.elements[state.current].id);
    }, [state.current]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween" }}
            variants={variants}
            className={styles.SynopsisNav}
        >
            <button onClick={goBackward} className={styles.Controller}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                    alt="Anterior sección"
                />
            </button>
            <div className={styles.items}>
                {state.elements.map((element, index) => (
                    <SynopsisLink
                        key={index}
                        id={element.id}
                        index={index}
                        name={element.name[0]}
                        color={element.color}
                    />
                ))}
            </div>
            <button onClick={goForward} className={styles.Controller}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
                    alt="Siguiente sección"
                />
            </button>
        </motion.div>
    );
};

export default SynopsisNav;
