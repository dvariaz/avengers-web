import React from "react";
import { useParams } from 'react-router-dom';

import './Cast.scss';

import characters from '../../data/characters';

//Páginas
import Character from './Character';

const CastPage = () => {
    let params = useParams();
    let character = params.character;

    return(
        <div className="Container Respect-TopBar Respect-SideBars Respect-CastNav Layout-Horizontal">
            <Character 
                name={ characters[character].name }
                description= { characters[character].description }
                photo= { characters[character].photo }
                background={ characters[character].background }
                position={ characters[character].position }
                color={ characters[character].color }
            />
        </div>
    );
};

export default CastPage;