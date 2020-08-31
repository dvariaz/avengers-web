import React, { createContext, useReducer } from "react";
import { useHistory } from "react-router-dom";

import cast from "../../context/default/cast";

//Estado inicial de la App
const initialState = {
    cast,
    current: 0,
};

export const NavigationContext = createContext(initialState);

//Actions
const GO_FORWARD = "GO_FORWARD";
const GO_BACKWARD = "GO_BACKWARD";

export const NavigationContextProvider = ({ children }) => {
    const history = useHistory();

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case GO_FORWARD: {
                //Nos vamos hacia adelante
                let nextActor;

                if (state.current < state.cast.length - 1) {
                    nextActor = state.current + 1;
                } else {
                    nextActor = 0;
                }

                history.push(state.cast[nextActor].id);

                return {
                    ...state,
                    current: nextActor,
                };
            }
            case GO_BACKWARD: {
                //Nos vamos hacia atrás
                let nextActor;

                if (state.current > 0) {
                    nextActor = state.current - 1;
                } else {
                    nextActor = state.cast.length - 1;
                }

                history.push(state.cast[nextActor].id);

                return {
                    ...state,
                    current: nextActor,
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
