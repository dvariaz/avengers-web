import React from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useCharacters } from "./../../context/characters.context";

import CastNav from "./CastNav";

import Character from "./Character";

//TODO: Usar la misma lógica de navegación de la seccion de sinopsis y galería, convertirlo en hook
//TODO: Añadir botones de navegación a las barras lateral de movil

const CastPage = () => {
    const location = useLocation();
    const { path } = useRouteMatch();
    const characters = useCharacters();

    return (
        <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
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
