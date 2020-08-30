import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useElements } from "./../../context/elements.context";

import Element from "./Element";
import SynopsisNav from "./SynopsisNav";

const SynopsisPage = () => {
    let { path } = useRouteMatch();
    let elements = useElements();

    return (
        <div className="Container Respect-AllBars">
            <SynopsisNav />
            <Switch>
                {elements.map((element) => (
                    <Route key={element.id} path={`${path}/${element.slug}`}>
                        <Element
                            name={element.name}
                            synopsis={element.synopsis}
                            history={element.history}
                            image={element.image.src}
                            effect={element.image.effect}
                            size={element.image.size}
                            color={element.color}
                            background={element.background}
                        />
                    </Route>
                ))}
            </Switch>
        </div>
    );
};

export default SynopsisPage;
