import React from "react";
import colors from "./../../../settings/colors";

import "./Sidebar.scss";

import Scroller from "./../Scroller";

const Sidebar = ({ position, social, scroller, lang }) => {
  return (
    <>
      <aside className={`Sidebar ${position}`}>
        {social && (
          <div className="social">
            <a
              href="https://www.youtube.com/user/MARVEL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/Social/Youtube-Icon.png`}
                alt="Visita Youtube"
              />
            </a>
            <a
              href="https://twitter.com/Avengers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/Social/Twitter-Icon.png`}
                alt="Visita Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/avengers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/Social/Instagram-Icon.png`}
                alt="Visita Instagram"
              />
            </a>
          </div>
        )}
        {scroller && (
          <Scroller
            previous="hulk"
            next="ironman"
            color={colors.carmine.gradient}
          />
        )}
      </aside>
      {lang && <div className="nav-language">{lang}</div>}
    </>
  );
};

export default Sidebar;
