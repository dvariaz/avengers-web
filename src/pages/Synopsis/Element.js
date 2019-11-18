import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import { bigTitle } from './../../settings/mixins';

import Background from './../../components/Background';
import DataPanel from './DataPanel';

const StyledTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    ${ bigTitle }
`;

const PosedTitle = posed(StyledTitle)({
    mounted: {
        opacity: 0,
        letterSpacing: '-100px'
    },
    ready: {
        opacity: 1,
        letterSpacing: '1px'
    }
});

const Element = ({ name, synopsis, history, color, background }) => {
    const [ pose, setPose ] = useState('mounted');

    useEffect(() => {
        setPose('ready');
    });

    return (
        <div>
            <PosedTitle pose={ pose }>{ name }</PosedTitle>
            <DataPanel
                pose={ pose }
                color={ color }
                position={ 'left' }
                title={ `Sinopsis ${ name }` }
                content={ synopsis }
            />
            <DataPanel
                pose={ pose }
                color="white"
                position={ 'right' }
                title={ `Historia ${ name }` }
                content={ history }
            />
            <Background src={ background } blur="5px"/>
        </div>
    );
}

export default Element;