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

const RouteContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {
      ({ location }) => (
        <PoseGroup>
          <RouteContainer key={ location.pathname }>
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
