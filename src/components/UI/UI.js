import React from "react";

import { NavLink } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const UI = ({ children }) => {
  return (
    <>
      <Header logo={`${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg`}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/sinopsis/general">
          Sinopsis
        </NavLink>
        <NavLink to="/cast/thanos">Cast</NavLink>
        <NavLink exact to="/galeria/joshbrolin">
          Galeria
        </NavLink>
        <NavLink exact to="/trailer">
          Trailer
        </NavLink>
      </Header>
      <Sidebar position="left" social scroller />
      <Sidebar position="right" lang="ESP" />
      {children}
    </>
  );
};

export default UI;
