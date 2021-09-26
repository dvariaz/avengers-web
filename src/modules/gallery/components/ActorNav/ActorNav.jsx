import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Styling
import styles from "./ActorNav.module.scss";

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

const ActorNav = ({ id }) => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navVariants}
      className={styles.Nav}
      contentLabel="Galería de fotos"
    >
      <Link to={`/galeria/${id}/wallpapers`}>
        <motion.div variants={linkVariants}>Wallpaper</motion.div>
      </Link>

      <Link to={`/galeria/${id}/social`}>
        <motion.div variants={linkVariants}>Social</motion.div>
      </Link>

      <Link to={`/galeria/${id}/fotos`}>
        <motion.div variants={linkVariants}>Photos</motion.div>
      </Link>
    </motion.nav>
  );
};

export default ActorNav;
