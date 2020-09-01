import React, { useContext } from "react";

import { NavigationContext } from "../NavigationContext";

const SynopsisLink = ({ id, index, name, color }) => {
    const { state, dispatch } = useContext(NavigationContext);

    const goToElement = () => {
        dispatch({ type: "SET_INDEX", payload: { id } });
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
