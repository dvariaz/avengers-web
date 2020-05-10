import React from "react";
import { Link } from "react-router-dom";

import "./Scroller.scss";

const Scroller = ({ color, previous, next }) => {
  //TODO: Debe reaccionar al scroll
  //TODO: Para avanzar en las paginas de forma ciclica utilizar el operador modulo % (actual + 1 % paginas_totales)

  return (
    <div className="Scroller">
      <Link to={previous} style={{ background: color }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Anterior sección"
        />
      </Link>
      <span>Scroll</span>
      <Link to={next} style={{ background: color }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Siguiente sección"
        />
      </Link>
    </div>
  );
};

export default Scroller;
