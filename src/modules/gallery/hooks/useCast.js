import { useState } from "react";

// Default data
import defaultCast from "@/data/cast.json";

export default function useCast() {
  const [state, setState] = useState({
    cast: [],
  });

  const loadCast = () => {
    setState({ ...state, cast: defaultCast });
  };

  return { ...state, loadCast };
}
