import { motion } from "framer-motion";

import styles from "./TitanSection.module.scss";

// Components
import Background from "modules/common/components/Background";
import TrapezoidButton from "modules/common/components/TrapezoidButton/index.js";

// Animation Generators
import {
  generateFadeIn,
  fadeInOrchestrator,
} from "modules/common/utils/animation-generators";

// Hooks
import useOnScreen from "modules/common/hooks/useOnScreen";

// Animation Variants
const containerVariants = fadeInOrchestrator();
const titleVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: -20 } });
const paragraphVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: 20 } });

const thanosVariants = generateFadeIn({
  enter: { x: -250, y: 0 },
  exit: { x: -250, y: 200 },
  fadeOpacity: false,
});

const TitanSection = () => {
  const [ref, isVisible] = useOnScreen("10px", 0.5);

  return (
    <motion.section
      initial="exit"
      animate={isVisible ? "enter" : "exit"}
      className="PageContent Respect-TopBar Respect-SideBars SlideContent"
      ref={ref}
    >
      <motion.img
        className={`Character ${styles.Character}`}
        variants={thanosVariants}
        src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Titan/Thanos.png`}
      />
      <motion.h1 className={styles.BigTitle} variants={titleVariants}>
        THANOS
      </motion.h1>
      <motion.div variants={containerVariants} className="TextContainer">
        <motion.h2 variants={paragraphVariants}>
          El titán loco ha llegado a por las gemas
        </motion.h2>
        <motion.h2 variants={paragraphVariants}>
          <strong>El conquistador de mundos</strong>
        </motion.h2>
        <motion.div variants={paragraphVariants}>
          <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
        </motion.div>
      </motion.div>
      <Background src="Backgrounds/Titan/Titan.jpg" />
    </motion.section>
  );
};

export default TitanSection;
