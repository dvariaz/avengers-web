import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import titleize from 'titleize';

import Background from '../../../components/Background';

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

const Character = ({ name, background, photo, position, color }) => {
    let [characterVisibility, setCharacterVisibility] = useState('hided');

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
                <p>Thanos es un supervillano ficticio que aparece en los cómics norteamericanos publicados por Marvel Comics. Creado por el escritor y artista Jim Starlin el personaje apareció por primera vez en The Invincible Iron Man # 55 (febrero de 1973).</p>
                <p>Su nombre es en parte un juego de palabras que hace referencia al término griego Θάνατος (Thánatos), que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos del Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.</p>
                <p>Se sabe que en algún momento, él ganó el control sobre el ejército mortal de los Chitauri, y levantó los seres conocidos como Gamora y Nebula a ser devotos y asesinos mortales. Thanos deseaba mucho las Piedras del Infinito, objetos de inmenso poder que mantenía considerable dominio sobre las diversas fuerzas que ocuparon el universo, y forjó varias alianzas con el fin de localizarlos. A través de muchos años de búsqueda, Thanos descubre una pista sobre la ubicación de la Orbe, el envío a Nebula y Gamora a las Tumbas de la Nube de Praxis bajo el mando de su aliado, el soldado Kree Korath. Nebula fue víctima de una trampa durante la misión, y Thanos, ninguno de tolerar el fracaso, prohibió a Gamora de rescatarla. Nebula se vio obligado a amputarse su propio brazo para poder escapar. La Orbe nunca fue recuperado, pero Thanos no dejó pasar el fracaso y reanudó su búsqueda.</p>
                
            </div>
            <PosedPhoto pose={ characterVisibility } className={ `CharacterRender ${ titleize(position) }` }>
                <img src={ `${process.env.PUBLIC_URL}/Assets/${photo}` }/>
            </PosedPhoto>

            <Background src={ background } blur="10px"/>
        </>
    )
}

export default Character;