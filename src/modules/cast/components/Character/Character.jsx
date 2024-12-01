import { motion } from "motion/react";
import titleize from "titleize";

import styles from "./Character.module.scss";

import Background from "modules/common/components/Background";

// Animation variants
const transition = {
  type: "spring",
  damping: 20,
  stiffness: 80,
  duration: 0.3,
};

const imageContainerVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const titleVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const paragraphVariants = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

const descriptionVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      type: "tween",
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.05,
      type: "tween",
    },
  },
};

const Character = ({
  name,
  description,
  background,
  photo,
  position,
  color,
}) => {
  const imageVariants = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
    hidden: {
      x: 0,
      y: "100%",
      opacity: 0,
      transition,
    },
    exit: {
      x: position === "right" ? 100 : -100,
      opacity: 0,
    },
  };

  return (
    <>
      <div className={`${styles.Container} ${styles[titleize(position)]}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={descriptionVariants}
          className={`${styles.Content} Respect-Image`}
        >
          <motion.h1
            variants={titleVariants}
            className={styles.Title}
            style={{ borderColor: color.flat }}
          >
            {name.text}
          </motion.h1>

          <div className={styles.Description}>
            {description.split("\n").map((item, i) => (
              <motion.p variants={paragraphVariants} key={i}>
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={imageContainerVariants}
          className={`${styles.Image} ${styles[titleize(position)]}`}
        >
          <motion.img
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariants}
            transition={transition}
            src={`${process.env.PUBLIC_URL}/assets/${photo}`}
            alt=""
          />
        </motion.div>
      </div>
      <Background src={background} blur="5px" fixed />
    </>
  );
};

export default Character;
