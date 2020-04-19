import React from 'react';
import { NavLink } from 'react-router-dom';

const SynopsisLink = ({to, color, children}) => (
    <>
        <NavLink to={to} activeStyle= {{ color }}>{children}</NavLink>
    </>
);

export default SynopsisLink;