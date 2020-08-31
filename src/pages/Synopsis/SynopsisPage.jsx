import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

import { useElements } from "./../../context/elements.context";

import Element from "./Element";
import SynopsisNav from "./SynopsisNav";

const SynopsisPage = () => {
    const location = useLocation();
    const { path } = useRouteMatch();
    const elements = useElements();

    return (
        <div className="Container Respect-AllBars">
            <SynopsisNav />

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {elements.map((element) => (
                        <Route key={element.id} path={`${path}/${element.slug}`}>
                            <Element
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
