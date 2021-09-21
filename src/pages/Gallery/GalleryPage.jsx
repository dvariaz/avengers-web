import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom";

import Actor from "modules/gallery/components/Actor";
import ActorNav from "modules/gallery/components/ActorNav";

// Hooks
import useCast from "modules/gallery/hooks/useCast";
import { extractLinkData } from "modules/common/utils/paths";

const GalleryPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { actor: currentActor } = useParams();
  const [isLoading, setLoadingStatus] = useState(true);
  const { cast, loadCast } = useCast();

  useEffect(() => {
    loadCast();
    setLoadingStatus(false);
  }, []);

  if (!isLoading) {
    return (
      <div className="Container Respect-AllBars">
        {cast && (
          <>
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                {cast.map((actor, index) => (
                  <Route key={actor.id} path={`/galeria/${actor.id}`}>
                    <Actor
                      index={`${index + 1}`.padStart(2, "0")}
                      name={actor.name.text}
                      score={actor.score}
                      color={actor.color}
                      role={actor.role}
                      background={actor.background}
                    />
                  </Route>
                ))}
                <Route>
                  <Redirect to={`/galeria/${cast[0].id}`} />
                </Route>
              </Switch>
            </AnimatePresence>

            <ActorNav
              current={currentActor}
              links={extractLinkData(cast)}
              onChange={(actorId) => {
                history.push(actorId);
              }}
            />
          </>
        )}
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
