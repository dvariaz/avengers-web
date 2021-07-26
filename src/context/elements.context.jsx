import { createContext, useContext } from "react";
import elements from "./default/elements";

const ElementsContext = createContext();

export const ElementsProvider = (props) => {
  const value = elements;

  return <ElementsContext.Provider value={value} {...props} />;
};

export function useElements() {
  const context = useContext(ElementsContext);

  if (!context) {
    throw new Error(
      "useElements debe estar dentro del proveedor CharactersContext"
    );
  }

  return context;
}
