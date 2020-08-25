import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import "./settings/container.scss";
import "./settings/global.scss";
import "./App.scss";

//UI
import UI from "./components/UI";

//Views
import HomePage from "./pages/Home";
import SynopsisPage from "./pages/Synopsis";
import CastPage from "./pages/Cast";
import GalleryPage from "./pages/Gallery";
import TrailerPage from "./pages/Trailer";

const App = () => {
    return (
        <Router>
            <UI>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/sinopsis" component={SynopsisPage} />
                    <Route path="/cast" component={CastPage} />
                    <Route
                        exact
                        path="/galeria/:actor"
                        component={GalleryPage}
                    />
                    <Route exact path="/trailer" component={TrailerPage} />
                </Switch>
            </UI>
        </Router>
    );
};

export default App;
