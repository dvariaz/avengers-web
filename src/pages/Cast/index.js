import React from "react";
import CastPage from "./CastPage";
import { NavigationContextProvider } from "./NavigationContext";

export default () => (
    <NavigationContextProvider>
        <CastPage />
    </NavigationContextProvider>
);
