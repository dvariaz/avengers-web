import React from 'react';
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

//Styles
import './settings/container.scss';
import "./settings/global.scss";
import './App.scss';

//UI
import UI from './components/UI';

//Views
import Home from './pages/Home';
import Synopsis from './pages/Synopsis';
import Cast from './pages/Cast';
import Gallery from './pages/Gallery';
import Trailer from './pages/Trailer';

import Background from './components/Background';

//TODO: La logica de transicion debe ser distinta para los contenidos y las imagenes, el cambio de fondo solo sucede con los cambios de rutas principales,
//mientras que los textos siempre van a desaparecer 

//TODO: Tratar de que al cambiar de pose, dispare las animaciones que tengan que ejecutar los hijos (tal vez pasando el prop entre los hijos, o revisar posegroup)

// TODO: Es posible que toque ubicar el background fuera de las paginas, y que se sincronice la animacion con la del router

const RouteContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {
      ({ location }) => (
        <PoseGroup>
          <RouteContainer key={ location.key }>
            <Router location={ location }>{ children }</Router>
          </RouteContainer>
        </PoseGroup>
      )
    }
  </Location>
);

const App = () => {

  return (
    <>
      <UI>
        <PosedRouter>
          <Home path="/"/>
          <Synopsis path="sinopsis/:element"/>
          <Cast path="cast/:character"></Cast>
          <Gallery path="galeria/:actor"/>
          <Trailer path="trailer"/>
        </PosedRouter>
      </UI>
    </>
  );
}

export default App;
