import React from 'react';
import styled from 'styled-components';
import colors from './../../settings/colors';

import GraphicIndicator from './GraphicIndicator';

const StyledGraphic = styled.div`
    .Element, .Element_Effect {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .Element {
        z-index: 55;

        height: ${ ({ size }) => size === 'small' ? '250px' : '500px' };

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

    .Element_Effect {
        z-index: 20;

        height: ${ ({ size }) => size === 'small' ? '400px' : '500px' };

        animation-name: element-effect-enter;
        animation-timing-function: ease-out;
        animation-duration: 1s;
        animation-delay: 1.5s;
        animation-fill-mode: both;

        @keyframes element-effect-enter {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

const GraphicElement = ({ image, effect, color, size }) => {
    return (
        <>
            <StyledGraphic size={ size }>
                <img className="Element_Effect" src={ `${ process.env.PUBLIC_URL }/Assets/${ effect }` } />
                <GraphicIndicator color={ color } location={ 'Desconocido' } />
                <img className="Element" src={ `${ process.env.PUBLIC_URL }/Assets/${ image }` } />
            </StyledGraphic>
        </>
    );
}

export default GraphicElement;
