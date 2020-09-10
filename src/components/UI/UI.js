import React from "react";

import { Link, useLocation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const UI = ({ children }) => {
    return (
        <>
            <Header
                logo={`${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg`}
                sections={[
                    { name: "Inicio", url: "/" },
                    { name: "Sinopsis", url: "/sinopsis/general" },
                    { name: "Cast", url: "/cast/thanos" },
                    { name: "Galeria", url: "/galeria/joshbrolin" },
                    { name: "Trailer", url: "/trailer" },
                ]}
            />
            <Sidebar position="left" social />
            <Sidebar position="right" lang="ESP" />
            {children}
        </>
    );
};

export default UI;
