import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import { bigTitle } from './../../settings/mixins';

import Background from './../../components/Background';
import DataPanel from './DataPanel';

const StyledTitle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    ${ bigTitle }

    span {
        opacity: 0;
        animation-name: element-title-enter;
        animation-duration: 0.5s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }

    @keyframes element-title-enter {
        0% {
            opacity: 0;
            letter-spacing: -100px;
        }
        100% {
            opacity: 1;
            letter-spacing: 15px;
        }
    }

    .Front {
        z-index: 100;
        /* color: green; */
    }

    .Back {
        z-index: 0;
        /* color: red; */
    }
`;

const StyledGraphic = styled.img`
    position: absolute;
    top: 37%;
    left: 45%;

    margin: auto;
    height: 250px;

    animation-name: element-enter;
    animation-timing-function: ease-out;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;

    @keyframes element-enter {
        0% {
            opacity: 0;
            transform: translateY(300px) rotate3d(0,1,1,45deg);
        }
        60% {
            opacity: 1;
            transform: translateY(100px) rotate3d(0,1,1,45deg);
        }
        100% {
            transform: translateY(0px) rotate3d(0,1,1,15deg);
        }
    }
`;

const Element = ({ name, synopsis, history, color, background, image }) => {
    const [ pose, setPose ] = useState('mounted');

    useEffect(() => {
        setPose('ready');
    });

    const splitWord = (word) => {
        let splitLength = parseInt(word.length / 2);
        let wordMarked = [word.slice(0,splitLength),'|',word.slice(splitLength)].join('');
        let words = wordMarked.split('|');
    
        return (
            <>
                <span className="Front">{ words[0] }</span><span className="Back">{ words[1] }</span>
            </>
        );
    };

    return (
        <>

            <StyledTitle>
                { splitWord(name) }
                <StyledGraphic src={ `${process.env.PUBLIC_URL}/Assets/${image}` }/>
            </StyledTitle>

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
        </>
    );
}

export default Element;