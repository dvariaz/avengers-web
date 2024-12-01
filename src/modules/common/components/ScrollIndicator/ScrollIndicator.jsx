import { motion } from "motion/react";

import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator = ({ visible }) => {
  const indicatorVariants = {
    visible: {
      opacity: 1,
      height: "80px",
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      exit="hidden"
      variants={indicatorVariants}
      className={styles.Container}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
        alt=""
      />
    </motion.div>
  );
};

export default ScrollIndicator;
