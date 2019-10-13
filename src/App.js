import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
import CastPage from './pages/Cast';
import Gallery from './pages/Gallery';
import Trailer from './pages/Trailer';

import Background from './components/Background';

//TODO: La logica de transicion debe ser distinta para los contenidos y las imagenes, el cambio de fondo solo sucede con los cambios de rutas principales,
//mientras que los textos siempre van a desaparecer 

//TODO: Tratar de que al cambiar de pose, dispare las animaciones que tengan que ejecutar los hijos (tal vez pasando el prop entre los hijos, o revisar posegroup)

// TODO: Es posible que toque ubicar el background fuera de las paginas, y que se sincronice la animacion con la del router

const PosedRoutes = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
  }
});

const App = ({ location }) => {

  return (
    <>
      <UI>
        <PoseGroup>
          <PosedRoutes key={ location.pathname }>
              <Switch location={ location }>
                  <Route exact path="/" component={ Home }/>
        
                  <Route path="/sinopsis/:section" component={ Synopsis }/>
                  <Redirect exact from="/sinopsis" to="/sinopsis/general" />
                  
                  <Route path="/cast" component={ CastPage }/>
        
                  <Route path="/galeria/:actor" component={ Gallery }/>
                  <Redirect exact from="/galeria" to="/galeria/joshbrolin" />
                  
                  <Route path="/trailer" component={ Trailer }/>
                  <Route path="/background" component={ Background }/>
        
                  <Route component={ NoMatch } />
              </Switch>
          </PosedRoutes>
        </PoseGroup>

      </UI>
    </>
  );
}

const NoMatch = () => {
  return(
    <>
      <h1>Not found</h1>
    </>
  );
}


export default withRouter(App);
