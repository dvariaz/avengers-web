import { useState } from "react";
// Default data
import defaultCharacters from "data/characters.json";

export default function useCharacters() {
  const [state, setState] = useState({
    characters: [],
  });

  const loadCharacters = () => {
    setState({ ...state, characters: defaultCharacters });
  };

  return { ...state, loadCharacters };
}
