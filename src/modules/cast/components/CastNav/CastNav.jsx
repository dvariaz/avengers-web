import { useRef, useContext, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./CastNav.module.scss";

import { NavigationContext } from "pages/Cast/NavigationContext";

import CastLink from "modules/cast/components/CastLink";

const CastNav = ({ characters }) => {
  const ref = useRef();
  const { path } = useRouteMatch();
  const { state, dispatch } = useContext(NavigationContext);

  useEffect(() => {
    const nextPosition = state.characters[state.current].center;
    ref.current.scrollTop = nextPosition;
  }, [state.current]);

  const variants = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ type: "tween" }}
      variants={variants}
      className={styles.Nav}
      ref={ref}
    >
      {characters.map((character) => (
        <CastLink
          key={character.id}
          id={character.id}
          to={`${path}/${character.id}`}
          name={character.name}
          image={character.profile}
          color={character.color.flat}
        />
      ))}
    </motion.div>
  );
};

export default CastNav;
