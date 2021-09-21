import { useRef, useContext, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./CastNav.module.scss";

import { NavigationContext } from "pages/Cast/NavigationContext";

import CastLink from "modules/cast/components/CastLink";
import colors from "settings/colors";

// Animation variants
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

const CastNav = ({ links, onChange }) => {
  const ref = useRef();

  const centerNavOnTarget = (target) => {
    ref.current.scrollTop = target.offsetTop;
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
      {links.map((link) => (
        <CastLink
          key={link.id}
          id={link.id}
          name={link.name.text}
          image={link.profile}
          color={colors[link.color].flat}
          onClick={(path, targetElement) => {
            centerNavOnTarget(targetElement);
            onChange(path);
          }}
        />
      ))}
    </motion.div>
  );
};

export default CastNav;
