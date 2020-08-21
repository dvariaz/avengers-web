import React, { useState, useEffect } from 'react';

import Background from '../../../components/Background';

//Imagenes
import RenderImage from './../../../assets/Characters/Thanos/Render.png';
import BackgroundImage from './../../../assets/Characters/IronMan/Background.jpg';


//TODO: Este componente puede hacerse generico
//TODO: Tratar de hacer las animaciones a pedal https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
//TODO: Mirar como animar al desmontar con react pose y react router

const IronManPage = () => {
    let [characterVisibility, setCharacterVisibility] = useState('hided');

    useEffect( () => {
        setCharacterVisibility('shown');

        return () => {
            setCharacterVisibility('hided');
        }
    }, []);

    return (
        <>
            <div className="PageContent Respect-Image">
                <h1 className="Title">Iron Man</h1>
                <p>Anthony Edward Stark, más conocido como Tony Stark, un millonario magnate empresarial estadounidense, playboy e ingenioso científico, sufre una grave lesión en el pecho durante un secuestro.</p>
                <p>Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva crea, en cambio, una armadura poderosa para salvar su vida y escapar del cautiverio.</p>
                <p>Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Industrias Stark.</p>
                
            </div>

            <Background src={ BackgroundImage } />
        </>
    )
}

export default IronManPage;