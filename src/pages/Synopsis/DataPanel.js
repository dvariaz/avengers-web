import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { barSize } from './../../settings/global';
import { darkGlass, cardFont, buttonFont } from './../../settings/mixins';

const StyledDataPanel = styled.div`
    overflow: hidden;
    position: absolute;
    ${ 
        ({ position }) => {
            if(position === 'left'){ 
                return `right: ${ barSize };bottom: ${ barSize };`;
            }
            if(position === 'right'){
                return `left: ${ barSize };top: ${ barSize };`;
            }
        } 
    }
    .Content {
        margin: 4em 0;
        padding: 0 2em 3em 3em;
        color: white;
        width: 500px;

        ${ darkGlass }

        ${ cardFont }

        h1 {
            margin: 1em 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 1.5em;
            display: inline-block;
            margin-bottom: 0;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            width: 30px;
            height: 4px;
            background: ${ props => props.color };
        }

        &::after {
            content: "";
            position: absolute;
            bottom: -20px;
            right: 2em;
            height: 20px;
            width: 150px;
            
            ${ darkGlass }
        }

        button {
            cursor: pointer;
            position: absolute;
            bottom: -20px;
            width: 150px;
            height: 40px;
            right: 2em;
            z-index: 100;
            background: transparent;

            ${ buttonFont }

            border: 2px solid;
            border-color: ${ props => props.color };
        }
    }
`;

const PosedDataContent = posed.div({
    ready: {
        staggerChildren: 100
    }
});

const PosedDataText = posed.div({
    mounted: {
        x: ({ position }) => {
            if(position === 'left'){
                return '100%';
            }else{
                return '-100%';
            }
        }
    },
    ready: {
        x: '0%',
        transition: { duration: 400 }
    }
});

//TODO: Falta la animacion del indicador de color superior y el boton inferior

const DataPanel = ({ pose, color, position, title, content }) => {
    return(
        <StyledDataPanel color={ color } position={ position }>
            <PosedDataContent pose={ pose } position={ position } className="Content">
                <PosedDataText position={ position }><h1>{ title }</h1></PosedDataText>
                <PosedDataText position={ position }><p>{ content }</p></PosedDataText>
                <button>Ver más</button>
            </PosedDataContent>
        </StyledDataPanel>
    );
};

export default DataPanel;