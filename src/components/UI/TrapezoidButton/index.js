import React, { useState } from 'react';
import styled from 'styled-components';

import { navFont } from './../../../settings/mixins';

const TrapezoidButton = ({ to, children }) => {
    return (
        <>
            <StyledTrapezoidButton viewBox="0 0 100 40">
                <a href={ to } style={{ color: 'white'}}>
                    <path
                        id="Trapezoid-Front"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="0.5" 
                        d="M 15 10 L 85 10 L 75 30 L 25 30 z"
                    />
                    <path
                        id="Trapezoid-Back"
                        stroke="white"
                        strokeWidth="0.5" 
                        d="M 15 10 L 85 10 L 75 30 L 25 30 z"
                    />
                    <text x="50"
                        y="20"
                        textAnchor="middle"
                        alignmentBaseline="middle">
                    { children }
                    </text>
                </a>
            </StyledTrapezoidButton>
        </>
    )
}

const StyledTrapezoidButton = styled.svg`
    width: 250px;
    height: 100px;

    ${ navFont }

    font-size: 0.3em;

    #Trapezoid-Front {
        transform-origin: 50% 50%;
        transform: translate(0,-5px) scaleX(1.3) rotateX(-10deg);
        transition: transform 0.4s ease;
    }

    #Trapezoid-Back{
        fill: transparent;
        transition: fill 0.4s ease;
    }

    text {
        fill: white;
        transition: fill 0.4s ease;
    }

    &:hover {
        #Trapezoid-Front{
            transform: translate(0,0);
        }

        #Trapezoid-Back{
            fill: white;
        }
        
        text {
            fill: black;
        }
    }
`;

export default TrapezoidButton;