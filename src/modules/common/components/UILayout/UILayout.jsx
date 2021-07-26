import { Link, useLocation } from "react-router-dom";

import Header from "modules/common/components/Header";
import Sidebar from "modules/common/components/Sidebar";

const UILayout = ({ children }) => {
  return (
    <>
      <Header
        logo={`${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg`}
        sections={[
          { id: "", name: "Inicio", url: "/" },
          { id: "sinopsis", name: "Sinopsis", url: "/sinopsis/general" },
          { id: "cast", name: "Cast", url: "/cast/thanos" },
          { id: "galeria", name: "Galeria", url: "/galeria/joshbrolin" },
          { id: "trailer", name: "Trailer", url: "/trailer" },
        ]}
      />
      <Sidebar position="left" social />
      <Sidebar position="right" lang="ESP" />
      {children}
    </>
  );
};

export default UILayout;
