import { motion } from "motion/react";

// Styling
import classNames from "classnames";
import styles from "./ActorProfile.module.scss";

// Components
import ActorScore from "@/modules/gallery/components/ActorScore";

// Animation Variants
const roleVariants = {
  visible: {
    x: 0,
  },
  hidden: {
    x: 250,
  },
};

const ActorProfile = ({ score, role }) => {
  return (
    <section className={classNames("PageContent", styles.ProfileContent)}>
      <ActorScore score={score} />
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={roleVariants}
        className={styles.Role}
      >
        <span>{role.name}</span>
        <p>{role.movies} Películas</p>
      </motion.div>
    </section>
  );
};

export default ActorProfile;
