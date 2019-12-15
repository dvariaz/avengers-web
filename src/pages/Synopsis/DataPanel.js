import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { barSize } from './../../settings/global';
import { darkGlass, cardFont, buttonFont } from './../../settings/mixins';

const StyledDataPanel = styled.div`
    overflow: hidden;
    position: absolute;
    ${ 
        ({ position }) => {
            if(position === 'left'){ 
                return `left: ${ barSize };top: ${ barSize };`;
            }
            if(position === 'right'){
                return `right: ${ barSize };bottom: ${ barSize };`;
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
            animation-name: indicator-enter;
            animation-duration: 0.4s;
            animation-timing-function: ease-out;
        }

        @keyframes indicator-enter {
            0% {
                transform: translateX(-100px);
            }
            100% {
                transform: translateX(0px);
            }
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

            animation-name: button-enter;
            animation-duration: 0.4s;
            animation-timing-function: ease-out;
        }

        @keyframes button-enter {
            0%{
                transform: translateX(500px);
            }
            100%{
                transform: translateX(0px);
            }
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
                return '-120%';
            }else{
                return '120%';
            }
        }
    },
    ready: {
        x: '0%',
        transition: { duration: 400 }
    }
});

const PosedDataPanel = posed(StyledDataPanel)({
    mounted:{
        opacity: 0
    },    
    ready: {
        opacity: 1
    }
})

const DataPanel = ({ pose, color, position, title, content }) => {
    return(
        <PosedDataPanel pose={ pose } color={ color } position={ position }>
            <PosedDataContent pose={ pose } position={ position } className="Content">
                <PosedDataText position={ position }><h1>{ title }</h1></PosedDataText>
                <PosedDataText position={ position }><p>{ content }</p></PosedDataText>
                <button>Ver más</button>
            </PosedDataContent>
        </PosedDataPanel>
    );
};

export default DataPanel;