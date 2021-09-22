import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

// Styling
import styles from "./ActorScore.module.scss";

// Utils
import { renderStars } from "modules/gallery/utils/ranking";

// Animation Variants
const scoreVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const ActorScore = ({ score }) => {
  const [counter, setCounter] = useState(0);
  const mvCounter = useSpring(0, { stiffness: 150 });

  useEffect(() => {
    mvCounter.set(score);
    mvCounter.onChange((latest) => setCounter(latest));
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={scoreVariants}
      className={styles.Score}
    >
      <div className={styles.Number}>{counter.toFixed(1)}</div>
      <div className={styles.BackgroundNumber}>{counter.toFixed(1)}</div>
      <div className={styles.Stars}>{renderStars(score)}</div>
    </motion.div>
  );
};

export default ActorScore;
