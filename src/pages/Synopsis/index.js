import React from "react";
import SynopsisPage from "./SynopsisPage";
import { NavigationContextProvider } from "./NavigationContext";

export default () => (
    <NavigationContextProvider>
        <SynopsisPage />
    </NavigationContextProvider>
);
