import React, { Component } from 'react';
import StyledCastLink from './StyledCastLink';

const CastLink = ({ to, image, color, activeClassName, children }) => {
    const URL = `/cast/${to}/portada`;

    return(
        <>
            <StyledCastLink to={ URL } activeClassName={ activeClassName } image={ image } color={ color } activeClassName="active">
                { children }
            </StyledCastLink>
        </>
    );
};

export default CastLink;