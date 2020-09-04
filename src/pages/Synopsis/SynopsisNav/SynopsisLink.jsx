import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { NavigationContext } from "../NavigationContext";

const SynopsisLink = ({ id, index, name, color }) => {
    const history = useHistory();
    const { state, dispatch } = useContext(NavigationContext);

    const goToElement = () => {
        dispatch({ type: "SET_INDEX", payload: { id } });
        history.push(state.elements[state.current].id);
    };

    return (
        <>
            <button
                onClick={goToElement}
                style={{
                    background: state.current === index ? color.gradient : "transparent",
                }}
            >
                {name}
            </button>
        </>
    );
};

export default SynopsisLink;
