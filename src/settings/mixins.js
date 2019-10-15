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

//Materiales
export const darkGlass = `
    background-color: ${ transparentize(0.8, colors.flat.black) };
    backdrop-filter: blur(4px);
`;

export const glassEdge = `
    border-color: ${ transparentize(0.7, colors.flat.white) };
    border-style: solid;
`;
