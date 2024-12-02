import { useState } from "react";

// Default data
import defaultElements from "@/data/elements.json";

export default function useSynopsis() {
  const [state, setState] = useState({
    elements: [],
  });

  const loadElements = () => {
    setState({ ...state, elements: defaultElements });
  };

  return { ...state, loadElements };
}
