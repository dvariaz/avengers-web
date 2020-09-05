import React from "react";
import "./Header.scss";

const Header = ({ logo, children }) => (
    <header className="Header">
        <div className="Logo">
            <img src={logo} alt="Logo"></img>
        </div>
        <div className="Sections">{children}</div>
        <a className="SidebarButton" href="#side_bar">
            <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Menu-Icon.svg`}
                alt="Menu"
            ></img>
        </a>
    </header>
);

export default Header;
