import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Styles
import "./settings/container.scss";
import "./settings/global.scss";
import "./App.scss";

//UI
import UILayout from "modules/common/components/UILayout";

//Views
import Preloader from "./pages/Preloader";
import HomePage from "./pages/Home";
import SynopsisPage from "./pages/Synopsis";
import CastPage from "./pages/Cast";
import GalleryPage from "./pages/Gallery";
import TrailerPage from "./pages/Trailer";

//Hooks
import useResourcePreloader from "modules/common/hooks/useResourcePreloader";
import resources from "./preload";

const App = () => {
  const [isPreloaded, loadingProgress] = useResourcePreloader(resources);

  return (
    <Router>
      {!isPreloaded ? (
        <Preloader progress={loadingProgress} />
      ) : (
        <UILayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sinopsis/:element" component={SynopsisPage} />
            <Route path="/cast/:character" component={CastPage} />
            <Route path="/galeria/:actor" component={GalleryPage} />
            <Route exact path="/trailer" component={TrailerPage} />
          </Switch>
        </UILayout>
      )}
    </Router>
  );
};

export default App;
