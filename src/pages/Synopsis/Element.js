import React from 'react';
import styled from 'styled-components';
import { darkGlass, navFont, cardFont, buttonFont, bigTitle } from './../../settings/mixins';
import Background from './../../components/Background';

const StyledElement = styled.div`
    .Title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        ${ bigTitle }
    }

    .Synopsis {
        margin: 4em 0;
        padding: 0 2em 3em 3em;
        color: white;
        max-width: 500px;

        ${ darkGlass }

        ${ cardFont }

        h1 {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 1.5em;
            display: inline-block;
            margin-bottom: 0;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                width: 30px;
                height: 4px;
                background: ${ props => props.color };
            }
        }

        button {
            cursor: pointer;
            position: absolute;
            bottom: -20px;
            width: 150px;
            height: 40px;
            right: 2em;
            
            ${ darkGlass }

            ${ buttonFont }

            border: 2px solid;
            border-color: ${ props => props.color };
        }

    }
`;

const Element = ({ name, synopsis, history, color, background }) => (
    <StyledElement color={ color }>
        <h1 className="Title">{ name }</h1>
        <div className="Synopsis">
            <h1>Sinopsis { name }</h1>
            <p>{ synopsis }</p>
            <button>Ver más</button>
        </div>
        <div className="History">
            <p>{ history }</p>
        </div>
        <Background src={ background }/>
    </StyledElement>
);

export default Element;