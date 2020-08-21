import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: {
                    backgroundColor: isCurrent ? "red" : "blue"
                }
            };
        }}
    />
);

export default NavLink;