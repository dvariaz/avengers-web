import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

// TODO: Es posible que en los props del background reciba el nombre de la ruta, y obtenga la imagen a la que
// pertenece la ruta (Tal vez se necesite withRouter)

const PosedBackground = posed.img({
    enter:{
        filter: 'blur(0px)',
        transform: 'scale(1)',
    },
    exit: {
        filter: 'blur(10px)',
        transform: 'scale(1.5)',
    }
})

const Background = ({ src }) => {
    let [ready, setReady] = useState(true);

    useEffect( () => {
        setReady(true);

        return () => {
            setReady(false);
        }
    });

    return (
        <PosedBackground pose={ ready ? 'enter' : 'exit' } className="Background" src={ src } alt="Fondo"></PosedBackground>
    );
}

export default Background;