import { motion } from "motion/react";

// Components
import Background from "@/modules/common/components/Background";
import TrapezoidButton from "@/modules/common/components/TrapezoidButton/index.js";

// Hooks
import useOnScreen from "@/modules/common/hooks/useOnScreen";

// Animation Generators
import {
  generateFadeIn,
  fadeInOrchestrator,
} from "@/modules/common/utils/animation-generators";

// Animation Variants
const containerVariants = fadeInOrchestrator();
const paragraphVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: 20 } });

const KnowhereSection = () => {
  const [ref, isVisible] = useOnScreen("10px", 0.5);

  return (
    <motion.section
      initial="exit"
      animate={isVisible ? "enter" : "exit"}
      className="PageContent Respect-TopBar Respect-SideBars SlideContent"
      ref={ref}
    >
      <motion.div variants={containerVariants} className="TextContainer">
        <motion.h2 variants={paragraphVariants}>
          Nuevos equipos se unirán para luchar
        </motion.h2>
        <motion.h2 variants={paragraphVariants}>
          contra la <strong>inminente amenaza</strong>
        </motion.h2>
        <motion.div variants={paragraphVariants}>
          <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
        </motion.div>
      </motion.div>

      <Background
        src="Backgrounds/Knowhere/Knowhere.jpg"
        objectPosition="30% center"
      />
    </motion.section>
  );
};

export default KnowhereSection;
