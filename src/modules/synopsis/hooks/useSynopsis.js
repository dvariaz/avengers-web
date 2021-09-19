import { useState } from "react";

export default function useSynopsis() {
  const [state, setState] = useState({
    current: 0,
    elements: [],
  });

  const updateIndexById = (id) => {
    const currentIndex = state.elements.findIndex((el) => el.id === id);
    setState({ ...state, current: currentIndex });
  };

  const setElements = (elements) => {
    setState({ ...state, elements });
  };

  return { ...state, setElements, updateIndexById };
}
