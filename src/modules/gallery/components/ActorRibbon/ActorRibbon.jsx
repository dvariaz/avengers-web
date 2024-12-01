import { motion } from "motion/react";

import styles from "./ActorRibbon.module.scss";

// Animation variants
const ribbonVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const rectangleVariants = {
  visible: {
    top: 0,
    transition: { duration: 1, type: "tween", when: "beforeChildren" },
  },
  hidden: {
    top: "100%",
    transition: { duration: 0.6, type: "tween", when: "beforeChildren" },
  },
};

const textVariants = {
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  hidden: {
    x: -100,
    transition: {
      duration: 0.25,
      type: "tween",
    },
  },
};

const dataVariants = {
  visible: {
    width: "auto",
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
  hidden: {
    width: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const ActorRibbon = ({ index, name, color }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={ribbonVariants}
      className={styles.Ribbon}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={dataVariants}
        className={styles.Text}
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants}
          className={styles.Index}
        >
          {index}
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants}
          className={styles.Name}
        >
          {name}
        </motion.h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={rectangleVariants}
        className={styles.Rectangle}
        style={{ background: color }}
      />
    </motion.div>
  );
};
export default ActorRibbon;
