import styles from "./Actor.module.scss";

import Background from "modules/common/components/Background";
import ActorRibbon from "modules/gallery/components/ActorRibbon";
import ActorProfile from "modules/gallery/components/ActorProfile";

const Actor = ({ index, name, score, color, role, background }) => {
  return (
    <div className={styles.Container}>
      <ActorRibbon index={index} name={name} color={color.gradient} />
      <ActorProfile name={name} score={score} role={role} />
      <Background src={background} objectPosition="60% center" fixed />
    </div>
  );
};

export default Actor;
