import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import titleize from 'titleize';

import Background from '../../components/Background';

const PosedPhoto = posed.div({
    hided: {
        top: '100%',
        opacity: 0
    },
    shown: {
        top: '0%',
        opacity: 1
    },
});

const Title = styled.h1`
    padding-bottom: 30px;
    border-style: solid;
    border-color: ${ ({ color }) => color };
    border-width: 0px;
    border-bottom-width: 4px;
`;

const Character = ({ name, description, background, photo, position, color }) => {
    let [characterVisibility, setCharacterVisibility] = useState('hided');

    let descriptionLines = description.split('\n').map((item, i) => <p key={i}>{item}</p>);

    useEffect( () => {
        setCharacterVisibility('shown');

        return () => {
            setCharacterVisibility('hided');
        }
    }, []);

    return (
        <>
            <div className={`PageContent Respect-Image ${ titleize(position) }`}>
                <Title className="Title" color={ color }>{ name }</Title>
                { descriptionLines }
            </div>
            <PosedPhoto pose={ characterVisibility } className={ `CharacterRender ${ titleize(position) }` }>
                <img src={ `${process.env.PUBLIC_URL}/Assets/${photo}` }/>
            </PosedPhoto>

            <Background src={ background } blur="5px"/>
        </>
    )
}

export default Character;