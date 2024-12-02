import { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";

import CastNav from "@/modules/cast/components/CastNav";
import Scroller from "@/modules/common/components/Scroller";
import Character from "@/modules/cast/components/Character";

// Hooks
import useCharacters from "@/modules/cast/hooks/useCharacters";
import { extractLinkData } from "@/modules/common/utils/paths";

const CastPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { character: currentCharacter } = useParams();
  const { characters, loadCharacters } = useCharacters();

  //Fired when access to section by url
  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal Restricted">
      {characters.length > 0 && (
        <>
          <CastNav
            links={characters}
            onChange={(characterId) => {
              history.push(characterId);
            }}
          />
          <Scroller
            current={currentCharacter}
            links={extractLinkData(characters)}
            onChange={(characterId) => {
              history.push(characterId);
            }}
          />

          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              {characters.map((character) => (
                <Route key={character.id} exact path={`/cast/${character.id}`}>
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
              <Route key={characters[0].id}>
                <Redirect to={`/cast/${characters[0].id}`} />
              </Route>
            </Switch>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default CastPage;
