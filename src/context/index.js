import React, { createContext, useReducer } from "react";

export const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";

const initialState = {
  routing: {
    current: null,
  },
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_CURRENT_SECTION":
        return {
          ...state,
          routing: {
            current: action.payload.current,
          },
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default { store, StateProvider };
