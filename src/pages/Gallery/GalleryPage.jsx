import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import { NavigationContext } from "./NavigationContext";

import Background from "../../components/Background";
import ActorProfile from "./ActorProfile";
import ActorNav from "./ActorNav";

// import styles from './Gallery.module.scss';

const GalleryPage = () => {
    const location = useLocation();
    const [isLoading, setLoadingStatus] = useState(true);

    const { state } = useContext(NavigationContext);

    useEffect(() => {
        setLoadingStatus(false);
    }, []);

    if (!isLoading) {
        return (
            <div className="Container Respect-TopBar Respect-AllBars">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        {state.cast.map((actor, index) => (
                            <Route key={index} path={`/galeria/${actor.id}`}>
                                <ActorNav
                                    index={`${index + 1}`.padStart(2, "0")}
                                    name={actor.name}
                                    color={actor.color}
                                />
                                <ActorProfile
                                    name={actor.name}
                                    score={actor.score}
                                    role={actor.role}
                                />
                                <Background src={actor.background} />
                            </Route>
                        ))}
                    </Switch>
                </AnimatePresence>
            </div>
        );
    } else {
        return (
            <div className="Container Respect-TopBar Respect-AllBars">
                <h1 style={{ color: "white" }}>Cargando</h1>
            </div>
        );
    }
};

export default GalleryPage;
