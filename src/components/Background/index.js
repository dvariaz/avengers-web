import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

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
        <PosedBackground pose={ ready ? 'enter' : 'exit' } className="Background" src={ `${process.env.PUBLIC_URL}/Assets/${src}` } alt="Fondo" />
    );
}

export default Background;