import { motion } from "framer-motion";

import styles from "./GraphicElement.module.scss";

import GraphicIndicator from "./GraphicIndicator";
import titleize from "titleize";

const GraphicElement = ({ image, effect, color, size }) => {
  const elementVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

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
