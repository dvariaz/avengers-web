import { useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import { NavigationContext } from "pages/Synopsis/NavigationContext";

const SynopsisLink = ({ id, index, name, color, className }) => {
  const ref = useRef();
  const history = useHistory();
  const { state, dispatch } = useContext(NavigationContext);

  useEffect(() => {
    const position = ref.current.offsetLeft;
    // console.log(`${id} -> ${position}`);
    dispatch({ type: "LOAD_CENTER", payload: { id, position } });
  }, []);

  const handleClick = () => {
    dispatch({ type: "SET_INDEX", payload: { id } });
    history.push(state.elements[state.current].id);
  };

  return (
    <>
      <button
        ref={ref}
        onClick={handleClick}
        className={className}
        style={{
          background: state.current === index ? color.gradient : "transparent",
        }}
      >
        {name}
      </button>
    </>
  );
};

export default SynopsisLink;
