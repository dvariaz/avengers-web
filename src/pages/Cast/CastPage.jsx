import React from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useCharacters } from "./../../context/characters.context";

import CastNav from "./CastNav";

//Páginas
import Character from "./Character";

const CastPage = () => {
    const location = useLocation();
    const { path } = useRouteMatch();
    const characters = useCharacters();

    return (
        <div
            className={`Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal`}
        >
            <CastNav items={characters} />

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {characters.map((character) => (
                        <Route key={character.id} exact path={`${path}/${character.slug}`}>
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
