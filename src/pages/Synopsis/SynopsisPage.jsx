import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom";

// Components
import Element from "modules/synopsis/components/Element";
import SynopsisNav from "modules/synopsis/components/SynopsisNav";

// Hooks
import useSynopsis from "modules/synopsis/hooks/useSynopsis";
import { extractLinkData } from "modules/common/utils/paths";

const SynopsisPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { element: currentElement } = useParams();
  const { elements, loadElements } = useSynopsis();

  useEffect(() => {
    // Load the elements to display
    loadElements();
  }, []);

  return (
    <div className="Container Respect-AllBars">
      {elements.length > 0 && (
        <>
          <SynopsisNav
            current={currentElement}
            links={extractLinkData(elements)}
            onChange={(elementId) => {
              history.push(elementId);
            }}
          />
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              {elements.map((el, index) => (
                <Route exact key={index} path={`/sinopsis/${el.id}`}>
                  <Element
                    id={el.id}
                    name={el.name}
                    synopsis={el.synopsis}
                    history={el.history}
                    image={el.image.src}
                    effect={el.image.effect}
                    size={el.image.size}
                    color={el.color}
                    background={el.background}
                  />
                </Route>
              ))}
              <Route>
                <Redirect to={`/sinopsis/${elements[0].id}`} />
              </Route>
            </Switch>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default SynopsisPage;
