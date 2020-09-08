import React, { createContext, useReducer } from "react";

import characters from "../../context/default/characters";

//Estado inicial de la App
const initialState = {
    characters,
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
                let nextItem = state.characters.findIndex(
                    (element) => element.id === action.payload.id
                );

                return {
                    ...state,
                    current: nextItem,
                    center: state.characters[nextItem].position,
                };
            }
            case LOAD_CENTER: {
                //Cargamos el centro del elemento
                let charactersUpdated = state.characters.map((element) => {
                    if (element.id === action.payload.id) {
                        return { ...element, position: action.payload.position };
                    } else {
                        return element;
                    }
                });

                return {
                    ...state,
                    characters: charactersUpdated,
                };
            }
            case GO_FORWARD: {
                //Nos vamos hacia adelante
                let nextItem;

                if (state.current < state.characters.length - 1) {
                    nextItem = state.current + 1;
                } else {
                    nextItem = 0;
                }

                return {
                    ...state,
                    current: nextItem,
                    center: state.characters[nextItem].position,
                };
            }
            case GO_BACKWARD: {
                //Nos vamos hacia atrás
                let nextItem;

                if (state.current > 0) {
                    nextItem = state.current - 1;
                } else {
                    nextItem = state.characters.length - 1;
                }

                return {
                    ...state,
                    current: nextItem,
                    center: state.characters[nextItem].position,
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
