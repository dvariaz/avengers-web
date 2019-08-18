import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <UI />
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/sinopsis/:section" component={Synopsis}/>
        <Redirect exact from="/sinopsis" to="/sinopsis/general" />
        
        <Route path="/cast/:character" component={Cast}/>
        <Redirect exact from="/cast" to="/cast/capitanamerica" />

        <Route path="/galeria" component={Gallery}/>
        
        <Route path="/trailer" component={Trailer}/>

        <Route component={NoMatch} />
      </Switch>
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


export default App;
