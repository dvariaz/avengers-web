import React, { useRef } from "react";
import { motion } from "framer-motion";

// Components
import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

// Hooks
import useOnScreen from "../../../../hooks/useOnScreen";

// Animation Generators
import {
  generateFadeIn,
  generateOrchestrator,
} from "../../../../common/animation-generators";

// Animation Variants
const containerVariants = generateOrchestrator();
const paragraphVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: 20 } });

const KnowhereSection = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "10px", 0.5);

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
