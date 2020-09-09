import React, { useContext } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NavigationContext } from "./NavigationContext";

import CastNav from "./CastNav";
import Scroller from "./Scroller";
import Character from "./Character";

const CastPage = () => {
    const location = useLocation();
    const { path } = useRouteMatch();
    const { state } = useContext(NavigationContext);

    return (
        <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal Restricted">
            <CastNav characters={state.characters} />
            <Scroller color={state.characters[state.current].color.gradient} />

            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    {state.characters.map((character) => (
                        <Route key={character.id} exact path={`${path}/${character.id}`}>
                            <Character
                                name={character.name}
                                description={character.description}
                                photo={character.photo}
                                background={character.background}
                                position={character.position}
                                color={character.color}
                            />
                        </Route>
                    ))}
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default CastPage;
