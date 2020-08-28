import React from "react";

import { Link, useLocation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const UI = ({ children }) => {
    const { pathname } = useLocation();
    const currentSection = pathname.split("/")[1];

    return (
        <>
            <Header logo={`${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg`}>
                <Link to="/" className={currentSection === "" ? "active" : ""}>
                    Inicio
                </Link>
                <Link
                    to="/sinopsis/general"
                    className={currentSection === "sinopsis" ? "active" : ""}
                >
                    Sinopsis
                </Link>
                <Link to="/cast/thanos" className={currentSection === "cast" ? "active" : ""}>
                    Cast
                </Link>
                <Link
                    to="/galeria/joshbrolin"
                    className={currentSection === "galeria" ? "active" : ""}
                >
                    Galeria
                </Link>
                <Link to="/trailer" className={currentSection === "trailer" ? "active" : ""}>
                    Trailer
                </Link>
            </Header>
            <Sidebar position="left" social />
            <Sidebar position="right" lang="ESP" />
            {children}
        </>
    );
};

export default UI;
