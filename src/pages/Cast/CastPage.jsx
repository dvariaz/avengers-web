import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NavigationContext } from "./NavigationContext";

import CastNav from "./CastNav";
import Scroller from "../../components/UI/Scroller";
import Character from "./Character";

const CastPage = () => {
    const location = useLocation();
    const history = useHistory();
    const { path } = useRouteMatch();
    const match = useRouteMatch("/cast/:character");

    const { state, dispatch } = useContext(NavigationContext);

    const goForward = () => {
        dispatch({ type: "GO_FORWARD" });
    };

    const goBackward = () => {
        dispatch({ type: "GO_BACKWARD" });
    };

    //Fired when access to section by url
    useEffect(() => {
        let character = match.params.character;
        dispatch({ type: "SET_INDEX", payload: { id: character } });
    }, []);

    useEffect(() => {
        history.push(state.characters[state.current].id);
    }, [state.current]);

    return (
        <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal Restricted">
            <CastNav characters={state.characters} />
            <Scroller
                color={state.characters[state.current].color.gradient}
                backward={goBackward}
                forward={goForward}
            />

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
