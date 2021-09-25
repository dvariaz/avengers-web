import { useEffect } from "react";
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
  const { cast, loadCast } = useCast();

  useEffect(() => {
    loadCast();
  }, []);

  return (
    <div className="Container Respect-AllBars">
      {cast.length > 0 && (
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
                    wallpapers={actor.wallpapers}
                    photos={actor.photos}
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
};

export default GalleryPage;
