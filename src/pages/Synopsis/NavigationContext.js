import React, { createContext, useReducer } from "react";
import { useHistory } from "react-router-dom";

import elements from "../../context/default/elements";

//Estado inicial de la App
const initialState = {
    elements,
    current: 0,
};

export const NavigationContext = createContext(initialState);

//Actions
const SET_INDEX = "SET_INDEX";
const GO_FORWARD = "GO_FORWARD";
const GO_BACKWARD = "GO_BACKWARD";

export const NavigationContextProvider = ({ children }) => {
    const history = useHistory();

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case SET_INDEX: {
                //Nos vamos hacia adelante
                let nextItem = state.elements.findIndex(
                    (element) => element.id === action.payload.id
                );

                return {
                    ...state,
                    current: nextItem,
                };
            }
            case GO_FORWARD: {
                //Nos vamos hacia adelante
                let nextItem;

                if (state.current < state.elements.length - 1) {
                    nextItem = state.current + 1;
                } else {
                    nextItem = 0;
                }

                return {
                    ...state,
                    current: nextItem,
                };
            }
            case GO_BACKWARD: {
                //Nos vamos hacia atrás
                let nextItem;

                if (state.current > 0) {
                    nextItem = state.current - 1;
                } else {
                    nextItem = state.elements.length - 1;
                }

                return {
                    ...state,
                    current: nextItem,
                };
            }
            default:
                throw new Error();
        }
    }, initialState);

    return (
        <NavigationContext.Provider value={{ state, dispatch }}>
            {children}
        </NavigationContext.Provider>
    );
};
