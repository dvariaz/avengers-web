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

// Default data
import defaultElements from "context/default/elements.json";

// Components
import Element from "modules/synopsis/components/Element";
import SynopsisNav from "modules/synopsis/components/SynopsisNav";

// Hooks
import useSynopsis from "modules/synopsis/hooks/useSynopsis";
import { extractLinkData } from "modules/synopsis/utils/paths";

const SynopsisPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { element: currentElement } = useParams();
  const { current, elements, setElements, updateIndexById } = useSynopsis();

  useEffect(() => {
    // Load the elements to display
    setElements(defaultElements);
    updateIndexById(currentElement);
  }, []);

  return (
    <div className="Container Respect-AllBars">
      {elements.length > 0 && (
        <>
          <SynopsisNav
            current={current}
            links={extractLinkData(elements)}
            onChange={(elementId) => {
              history.push(elementId);
              updateIndexById(elementId);
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
