import React from "react";
import characters from "./default/characters";

const CharactersContext = React.createContext();

export const CharactersProvider = (props) => {
  const value = characters;

  return <CharactersContext.Provider value={value} {...props} />;
};

export function useCharacters() {
  const context = React.useContext(CharactersContext);

  if (!context) {
    throw new Error(
      "useCharacters debe estar dentro del proveedor CharactersContext"
    );
  }

  return context;
}
