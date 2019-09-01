import React from 'react';

// TODO: Es posible que en los props del background reciba el nombre de la ruta, y obtenga la imagen a la que
// pertenece la ruta (Tal vez se necesite withRouter)

const Background = ({ src }) => {
    return (
        <>
            <img className="Background" src={ src } alt="Fondo"></img>
        </>
    );
}

export default Background;