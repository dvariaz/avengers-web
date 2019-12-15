import styled from 'styled-components';
import { transparentize } from 'polished';
import colors from './colors';

//Fuentes
export const navFont = `
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: .7em;
    color: white;
`;

export const cardFont = `
    font-family: 'Raleway', sans-serif;
    font-size: .8em;
    color: white;
`;

export const buttonFont = `
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    color: white;
`;

export const bigTitle = `
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 10em;
    color: white;
`;

//Materiales
export const darkGlass = `
    background-color: ${ transparentize(0.8, colors.black.flat) };
    backdrop-filter: blur(4px);
`;

export const glassEdge = `
    border-color: ${ transparentize(0.7, colors.white.flat) };
    border-style: solid;
`;
