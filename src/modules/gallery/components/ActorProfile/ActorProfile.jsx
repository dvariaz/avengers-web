import { motion } from "framer-motion";

// Styling
import classNames from "classnames";
import styles from "./ActorProfile.module.scss";

// Components
import ActorScore from "modules/gallery/components/ActorScore";

// Animation Variants
const navVariants = {
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      type: "tween",
    },
  },
  hidden: {
    x: -800,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      type: "tween",
    },
  },
};

const linkVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  hidden: {
    x: -10,
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

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
      <motion.nav
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navVariants}
        className={styles.Nav}
      >
        <motion.a variants={linkVariants} href="#wallpaper">
          Wallpaper
        </motion.a>
        <motion.a variants={linkVariants} href="#social">
          Social
        </motion.a>
        <motion.a variants={linkVariants} href="#photos">
          Photos
        </motion.a>
      </motion.nav>
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
