import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";

// Default data
import defaultElements from "context/default/elements";

// Components
import Element from "modules/synopsis/components/Element";
import SynopsisNav from "modules/synopsis/components/SynopsisNav";

// Hooks
import useSynopsis from "modules/synopsis/hooks/useSynopsis";

const SynopsisPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const { current, elements, setElements, updateIndexById } = useSynopsis();

  useEffect(() => {
    // Load the elements to display
    setElements(defaultElements);
  }, []);

  return (
    <div className="Container Respect-AllBars">
      {elements.length > 0 && (
        <>
          <SynopsisNav
            current={current}
            elements={elements}
            onChange={(id) => {
              history.push(id);
              updateIndexById(id);
            }}
          />
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              {elements.map((element, index) => (
                <Route key={index} path={`${path}/${element.id}`}>
                  <Element
                    id={element.id}
                    name={element.name}
                    synopsis={element.synopsis}
                    history={element.history}
                    image={element.image.src}
                    effect={element.image.effect}
                    size={element.image.size}
                    color={element.color}
                    background={element.background}
                  />
                </Route>
              ))}
            </Switch>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default SynopsisPage;
