import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

//Styles
import './settings/container.scss';
import "./settings/global.scss";
import './App.scss';

//UI
import UI from './components/UI';

//Views
import HomePage from './pages/Home';
import SynopsisPage from './pages/Synopsis';
import CastPage from './pages/Cast';
import GalleryPage from './pages/Gallery';
import TrailerPage from './pages/Trailer';

import Background from './components/Background';

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <UI>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/sinopsis/:element" component={SynopsisPage} />
                <Route exact path="/cast/:character" component={CastPage} />
                <Route exact path="/galeria/:actor" component={GalleryPage} />
                <Route exact path="/trailer" component={TrailerPage} />
              </Switch>
            </UI>
          </AnimatePresence>
          )}
      />
    </Router>
  );
}

export default App;
