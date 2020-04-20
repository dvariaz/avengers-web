import React from "react";
import {useParams} from 'react-router-dom';

import elements from './../../data/elements';

import Element from './Element';
import SynopsisNav from './../../components/UI/SynopsisNav';

const SynopsisPage = () => {
    let params = useParams();
    let element = params.element;

    return(
        <div className="Container Respect-AllBars">
            <SynopsisNav/>
            <Element 
                name={ elements[element].name }
                synopsis={ elements[element].synopsis }
                history={ elements[element].history }
                image={ elements[element].image.src }
                effect={ elements[element].image.effect }
                size={ elements[element].image.size }
                color={ elements[element].color }
                background={ elements[element].background }/>
        </div>
    );
}

export default SynopsisPage;