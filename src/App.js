import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

//UI
import UInfinity from './components/UInfinity';

//Views
import Home from './components/Home';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import Gallery from './components/Gallery';
import Trailer from './components/Trailer';

const App = () => {
  return (
    <>
      <UInfinity />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sinopsis" component={Synopsis}/>
        <Route path="/cast" component={Cast}/>
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
