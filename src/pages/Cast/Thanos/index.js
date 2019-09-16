import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import Background from '../../../components/Background';

//Imagenes
import RenderImage from './../../../assets/Characters/Thanos/Render.png';
import BackgroundImage from './../../../assets/Characters/Thanos/Background.png';

const defaultStyle = {
    transition: 'transform 500ms ease, opacity 500ms ease',
    opacity: 0,
    transform: 'translateY(-500px)',
};
  
const transitionStyles = {
    entering: { transform: 'translateY(500px)', opacity: 0 },
    entered:  { transform: 'translateY(0px)', opacity: 1 },
    exiting:  { transform: 'translateY(0px)', opacity: 1 },
    exited:  { transform: 'translateY(500px)', opacity: 0 },
};

//TODO: Este componente puede hacerse generico
//TODO: Tratar de hacer las animaciones a pedal https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component

const ThanosPage = () => {
    let [ready, setReady] = useState(false);

    useEffect( () => {
        setReady(true);

        return () => {
            setReady(false);
        }
    }, []);

    return (
        <>
            <div className="PageContent Respect-Image">
                <h1 className="Title">Thanos</h1>
                <p>Thanos es un supervillano ficticio que aparece en los cómics norteamericanos publicados por Marvel Comics. Creado por el escritor y artista Jim Starlin el personaje apareció por primera vez en The Invincible Iron Man # 55 (febrero de 1973).</p>
                <p>Su nombre es en parte un juego de palabras que hace referencia al término griego Θάνατος (Thánatos), que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos del Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.</p>
                <p>Se sabe que en algún momento, él ganó el control sobre el ejército mortal de los Chitauri, y levantó los seres conocidos como Gamora y Nebula a ser devotos y asesinos mortales. Thanos deseaba mucho las Piedras del Infinito, objetos de inmenso poder que mantenía considerable dominio sobre las diversas fuerzas que ocuparon el universo, y forjó varias alianzas con el fin de localizarlos. A través de muchos años de búsqueda, Thanos descubre una pista sobre la ubicación de la Orbe, el envío a Nebula y Gamora a las Tumbas de la Nube de Praxis bajo el mando de su aliado, el soldado Kree Korath. Nebula fue víctima de una trampa durante la misión, y Thanos, ninguno de tolerar el fracaso, prohibió a Gamora de rescatarla. Nebula se vio obligado a amputarse su propio brazo para poder escapar. La Orbe nunca fue recuperado, pero Thanos no dejó pasar el fracaso y reanudó su búsqueda.</p>
                <Transition in={ ready } timeout={ 0 }>
                    {   (state) => (
                            <img className="CharacterRender Right" src={ RenderImage } style={{ ...defaultStyle, ...transitionStyles[state] }}/>
                        )
                    }
                </Transition>
            </div>
            <Background src={ BackgroundImage } />
        </>
    )
}

export default ThanosPage;