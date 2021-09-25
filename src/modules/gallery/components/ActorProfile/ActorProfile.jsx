import { motion } from "framer-motion";

// Styling
import classNames from "classnames";
import styles from "./ActorProfile.module.scss";

// Components
import ActorScore from "modules/gallery/components/ActorScore";
import ActorGallery from "modules/gallery/components/ActorGallery";

// Animation Variants
const roleVariants = {
  visible: {
    x: 0,
  },
  hidden: {
    x: 250,
  },
};

const ActorProfile = ({ score, role, wallpapers, photos }) => {
  return (
    <section className={classNames("PageContent", styles.ProfileContent)}>
      <ActorGallery wallpapers={wallpapers} photos={photos} />
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
