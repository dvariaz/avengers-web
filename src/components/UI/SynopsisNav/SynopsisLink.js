import React from 'react';
import { Link } from '@reach/router';

const SynopsisLink = (props) => (
    <>
        <Link { ...props }
            getProps={({ href, location }) => {
                let section = location.pathname.split('/')[2];
                let to = href.split('/')[2];
                let isCurrent = to === section;
                return {
                    style: {
                        background: isCurrent  ? props.color : "transparent"
                    }
                };
            }}
        />
    </>
);

export default SynopsisLink;