import React, { createContext, useReducer } from "react";

import elements from "../../context/default/elements";

//Estado inicial de la App
const initialState = {
    elements,
    current: 0,
    center: 0,
};

export const NavigationContext = createContext(initialState);

//Actions
const SET_INDEX = "SET_INDEX";
const LOAD_CENTER = "LOAD_CENTER";
const GO_FORWARD = "GO_FORWARD";
const GO_BACKWARD = "GO_BACKWARD";

export const NavigationContextProvider = ({ children }) => {
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
                    center: state.elements[nextItem].position,
                };
            }
            case LOAD_CENTER: {
                //Cargamos el centro del elemento
                // console.log(action.payload);
                let elementsUpdated = state.elements.map((element) => {
                    if (element.id === action.payload.id) {
                        return { ...element, position: action.payload.position };
                    } else {
                        return element;
                    }
                });

                return {
                    ...state,
                    elements: elementsUpdated,
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
                    center: state.elements[nextItem].position,
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
                    center: state.elements[nextItem].position,
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
