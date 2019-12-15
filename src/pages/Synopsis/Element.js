import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Delay from 'react-delay';

import { bigTitle } from './../../settings/mixins';

import Background from './../../components/Background';
import DataPanel from './DataPanel';
import GraphicElement from './GraphicElement';

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
        animation-delay: 1.25s;
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
    }

    .Back {
        z-index: 40;
    }
`;

const Element = ({ name, synopsis, history, color, background, image, effect, size }) => {
    const [ pose, setPose ] = useState('mounted');

    useEffect(() => {
        const dataTimer = setTimeout(() => {
            setPose('ready');
        }, 1000);

        return () => clearTimeout(dataTimer);
    });

    const splitWord = (word) => {
        let letters = Array.from(word[0]);
        let zinfo = word[1];
    
        return (
            <>
                {
                    letters.map((letter, index) => <span key={ index } className={ zinfo[index] === 'f' ? 'Front' : 'Back' }>{ letter }</span>)
                }
            </>
        );
    };

    return (
        <>

            <StyledTitle>
                { splitWord(name) }
                <GraphicElement image={ image } effect={ effect }  size={ size } color={ color.flat } />
            </StyledTitle>
            
            <Delay wait={ 1000 }>
                <DataPanel
                    pose={ pose }
                    color={ color.flat }
                    position={ 'left' }
                    title={ `Sinopsis ${ name[0] }` }
                    content={ synopsis }
                />
                <DataPanel
                    pose={ pose }
                    color="white"
                    position={ 'right' }
                    title={ `Historia ${ name[0] }` }
                    content={ history }
                />
            </Delay>

            <Background src={ background } blur="5px"/>
        </>
    );
}

export default Element;