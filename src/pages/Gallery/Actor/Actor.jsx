import React from "react";

import styles from "./Actor.module.scss";

import Background from "../../../components/Background";
import ActorRibbon from "../ActorRibbon";
import ActorProfile from "../ActorProfile";

const Actor = ({ index, name, score, color, role, background }) => {
    return (
        <div className={styles.Container}>
            <ActorRibbon index={index} name={name} color={color.gradient} />
            <ActorProfile name={name} score={score} role={role} />
            <Background src={background} />
        </div>
    );
};

export default Actor;
