import React from "react";
import CastPage from "./CastPage";
import { CharactersProvider } from "./../../context/characters.context";

export default () => (
  <CharactersProvider>
    <CastPage />
  </CharactersProvider>
);
