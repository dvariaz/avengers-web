import React from "react";
import SynopsisPage from "./SynopsisPage";
import { ElementsProvider } from "./../../context/elements.context";

export default () => (
  <ElementsProvider>
    <SynopsisPage />
  </ElementsProvider>
);
