import React from "react";

import styles from "./ActorNav.module.scss";

const ActorNav = ({ actor }) => {
    return (
        <>
            <nav className={styles.ActorNav}>
                {actor}
                <div>
                    <a href="#">Search Button</a>
                    <a href="#">Share Button</a>
                </div>
            </nav>
        </>
    );
};

export default ActorNav;
