import { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";

import { NavigationContext } from "./NavigationContext";

import Actor from "modules/gallery/components/Actor";
import ActorNav from "modules/gallery/components/ActorNav";

//TODO: Esperar a que framer-motion mejore los problemas de routing con AnimatePresence

const GalleryPage = () => {
  const location = useLocation();
  const match = useRouteMatch("/galeria/:actor");
  const [isLoading, setLoadingStatus] = useState(true);

  const { state, dispatch } = useContext(NavigationContext);

  useEffect(() => {
    const id = match.params.actor;
    dispatch({ type: "SET_INDEX", payload: { id } });
    setLoadingStatus(false);
  }, []);

  if (!isLoading) {
    return (
      <div className="Container Respect-AllBars">
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            {state.cast.map((actor, index) => (
              <Route key={index} path={`/galeria/${actor.id}`}>
                <Actor
                  index={`${index + 1}`.padStart(2, "0")}
                  name={actor.name}
                  score={actor.score}
                  color={actor.color}
                  role={actor.role}
                  background={actor.background}
                />
              </Route>
            ))}
          </Switch>
        </AnimatePresence>

        <ActorNav
          name={state.cast[state.current].name}
          color={state.cast[state.current].color}
        />
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
