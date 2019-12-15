import React from 'react';
import styled from 'styled-components';
import colors from './../../settings/colors';

import GraphicIndicator from './GraphicIndicator';

const StyledGraphic = styled.div`
    img {
        position: absolute;
        z-index: 55;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

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
    }
`;

//TODO: Trabajarle al SVG, utilizar animaciones por defecto con etiquetas svg, las animaciones por estado
//dejarselas a pose

const GraphicElement = ({ image, color }) => {
    return (
        <>
            <StyledGraphic>
                <GraphicIndicator color={ color } location={ 'Desconocido' } />
                <img src={ `${ process.env.PUBLIC_URL }/Assets/${ image }` } />
            </StyledGraphic>
        </>
    );
}

export default GraphicElement;
