import React from 'react';
import { Link } from '@reach/router';

const NavLink = (props) => (
    <>
        <Link { ...props }
            getProps={({ href, location }) => {
                let section = location.pathname.split('/')[1];
                let to = href.split('/')[1];
                let isCurrent = to === section;
                return {
                    style: {
                        borderBottomWidth: isCurrent  ? "2px" : "0px"
                    }
                };
            }}
        />
    </>
);

export default NavLink;