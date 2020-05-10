import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./Cast.scss";

import { useCharacters } from "./../../context/characters.context";

import CastNav from "./../../components/UI/CastNav";

//Páginas
import Character from "./Character";

const CastPage = () => {
  let { path } = useRouteMatch();
  let characters = useCharacters();

  return (
    <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
      <CastNav items={characters} />

      <Switch>
        {characters.map((character) => (
          <Route key={character.id} path={`${path}/${character.slug}`}>
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
    </div>
  );
};

export default CastPage;
