import { useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import { transparentize } from "polished";
import { motion } from "motion/react";

import styles from "./CastLink.module.scss";

// Animation variants
const variants = {
  active: {
    fontSize: "1.4em",
    borderLeftWidth: "0.3em",
    backgroundSize: "100%, cover",
  },
  inactive: {
    fontSize: "1.2em",
    borderLeftWidth: "0em",
    backgroundSize: "0%, cover",
  },
};

const CastLink = ({ id, name, image, color, onClick }) => {
  const ref = useRef();
  const match = useRouteMatch("/cast/:character");

  const isActive = id === match.params.character;

  return (
    <>
      <motion.button
        ref={ref}
        data-testid={`cast-link-${id}`}
        initial="inactive"
        animate={ isActive ? "active" : "inactive"}
        transition={{ type: "tween" }}
        variants={variants}
        className={styles.Link}
        style={{
          borderColor: color,
          backgroundImage: `linear-gradient(90deg,${transparentize(
            0.5,
            color
          )},transparent), url("/assets/${image}")`,
        }}
        onClick={(e) => onClick(id, e.target)}
      >
        {name}
      </motion.button>
    </>
  );
};

export default CastLink;
