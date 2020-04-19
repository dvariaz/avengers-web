import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

const PosedBackground = posed.img({
    enter:{
        filter: (props) => props.blur,
        transform: 'scale(1)',
    },
    exit: {
        filter: 'blur(50px)',
        transform: 'scale(1.5)',
    }
})

const Background = ({ src, blur }) => {
    let [ready, setReady] = useState(true);

    let blurProp = `blur(${blur || '0px'})`;

    useEffect( () => {
        setReady(true);

        return () => {
            setReady(false);
        }
    }, []);

    return (
        <PosedBackground pose={ ready ? 'enter' : 'exit' } className="Background" src={ `${process.env.PUBLIC_URL}/Assets/${src}` } alt="Fondo" blur={ blurProp }/>
    );
}

export default Background;