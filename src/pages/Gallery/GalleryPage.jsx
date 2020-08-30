import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Switch, Route, useLocation } from "react-router-dom";

import Background from "../../components/Background";
import ActorProfile from "./ActorProfile";
import ActorNav from "./ActorNav";

// import styles from './Gallery.module.scss';
import cast from "../../context/default/cast";

const GalleryPage = () => {
    const location = useLocation();
    const [isLoading, setLoadingStatus] = useState(true);

    useEffect(() => {
        setLoadingStatus(false);
    }, []);

    if (!isLoading) {
        return (
            <div className="Container Respect-TopBar Respect-AllBars">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        {cast.map((actor, index) => (
                            <Route key={index} path={`/galeria/${actor.id}`}>
                                <ActorNav
                                    index={"05"}
                                    name={actor.name}
                                    color={actor.color}
                                    before="joshbrolin"
                                    after="chrisevans"
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
