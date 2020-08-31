import React from "react";
import GalleryPage from "./GalleryPage";
import { NavigationContextProvider } from "./NavigationContext";

export default () => (
    <NavigationContextProvider>
        <GalleryPage />
    </NavigationContextProvider>
);
