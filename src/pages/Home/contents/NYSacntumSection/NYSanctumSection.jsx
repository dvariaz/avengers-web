import { motion } from "framer-motion";

import styles from "./NYSanctumSection.module.scss";

// Components
import Background from "modules/common/components/Background";
import TrapezoidButton from "modules/common/components/TrapezoidButton/index.js";

// Hooks
import useOnScreen from "modules/common/hooks/useOnScreen";

// Animation Generators
import {
  generateFadeIn,
  fadeInOrchestrator,
} from "modules/common/utils/animation-generators";

// Animation Variants
const containerVariants = fadeInOrchestrator();
const titleVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: -20 } });
const paragraphVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: 20 } });

const drStrangeVariants = generateFadeIn({
  enter: {
    y: 100,
  },
  exit: {
    y: 250,
  },
  fadeOpacity: false,
});

const NYSanctumSection = () => {
  const [ref, isVisible] = useOnScreen("10px", 0.5);

  return (
    <motion.section
      initial="exit"
      animate={isVisible ? "enter" : "exit"}
      className="PageContent Respect-TopBar Respect-SideBars SlideContent"
      ref={ref}
    >
      <motion.img
        className="Character"
        initial="exit"
        variants={drStrangeVariants}
        src={`${process.env.PUBLIC_URL}/assets/Backgrounds/NewYorkSanctum/DoctorStrange.png`}
      />
      <motion.h1 variants={titleVariants} className={styles.BigTitle}>
        DOCTOR STRANGE
      </motion.h1>
      <motion.div variants={containerVariants} className="TextContainer">
        <motion.h2 variants={paragraphVariants}>
          Y harán todo lo posible para salvar el futuro de la humanidad
        </motion.h2>
        <motion.div variants={paragraphVariants}>
          <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
        </motion.div>
      </motion.div>

      <Background src="Backgrounds/NewYorkSanctum/NewYorkSanctum.jpg" />
    </motion.section>
  );
};

export default NYSanctumSection;
