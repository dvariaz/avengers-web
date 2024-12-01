import { motion } from "motion/react";

import styles from "./GraphicElement.module.scss";

import GraphicIndicator from "modules/synopsis/components/GraphicIndicator";
import titleize from "titleize";

// Animation Variants
const elementVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const GraphicElement = ({ image, effect, color, size }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={elementVariants}
      className={styles.Container}
    >
      <img
        className={`${styles.Effect} ${styles[titleize(size)]}`}
        src={`${process.env.PUBLIC_URL}/assets/${effect}`}
        alt=""
      />
      <GraphicIndicator color={color} location={"Desconocido"} />
      <img
        className={`${styles.Element} ${styles[titleize(size)]}`}
        src={`${process.env.PUBLIC_URL}/assets/${image}`}
        alt=""
      />
    </motion.div>
  );
};

export default GraphicElement;
