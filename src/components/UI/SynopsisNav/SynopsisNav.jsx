import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

//Styles
import "./SynopsisNav.scss";

import { useElements } from "./../../../context/elements.context";

const SynopsisNav = () => {
  let elements = useElements();

  const variants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "tween" }}
      variants={variants}
      className="SynopsisNav"
    >
      <a href="#" className="SynopsisNav-Controller">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Anterior sección"
        />
      </a>
      <div className="items">
        {elements.map((element) => (
          <NavLink
            key={element.id}
            to={`/sinopsis/${element.slug}`}
            activeStyle={{ background: element.color.gradient }}
          >
            {element.name[0]}
          </NavLink>
        ))}
      </div>
      <a href="#" className="SynopsisNav-Controller">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Siguiente sección"
        />
      </a>
    </motion.div>
  );
};

export default SynopsisNav;
