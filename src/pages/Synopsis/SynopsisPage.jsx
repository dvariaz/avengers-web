import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

import { NavigationContext } from "./NavigationContext";

import Element from "./Element";
import SynopsisNav from "./SynopsisNav";

//TODO: Los elementos no se ven bien en móvil
const SynopsisPage = () => {
    const location = useLocation();
    const { path } = useRouteMatch();
    const { state } = useContext(NavigationContext);

    return (
        <div className="Container Respect-AllBars">
            <SynopsisNav />

            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    {state.elements.map((element, index) => (
                        <Route key={index} path={`${path}/${element.id}`}>
                            <Element
                                id={element.id}
                                name={element.name}
                                synopsis={element.synopsis}
                                history={element.history}
                                image={element.image.src}
                                effect={element.image.effect}
                                size={element.image.size}
                                color={element.color}
                                background={element.background}
                            />
                        </Route>
                    ))}
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default SynopsisPage;
