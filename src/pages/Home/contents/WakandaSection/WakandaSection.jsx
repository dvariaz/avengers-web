import { motion } from "framer-motion";

import styles from "./WakandaSection.module.scss";

// Components
import Background from "modules/common/components/Background";
import TrapezoidButton from "modules/common/components/TrapezoidButton/index.js";

// Hooks
import useOnScreen from "modules/common/hooks/useOnScreen";

// Animation Function Generators
import {
  generateFadeIn,
  fadeInOrchestrator,
} from "modules/common/utils/animation-generators";

// Animation Variants
const containerVariants = fadeInOrchestrator();
const titleVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: -20 } });
const paragraphVariants = generateFadeIn({ enter: { y: 0 }, exit: { y: 20 } });

const WakandaSection = () => {
  const [ref, isVisible] = useOnScreen("10px", 0.5);

  return (
    <motion.section
      initial="exit"
      animate={isVisible ? "enter" : "exit"}
      transition={{ duration: 0.8, delayChildren: 0.25 }}
      className="PageContent Respect-TopBar Respect-SideBars SlideContent"
      ref={ref}
    >
      <motion.img
        className="Character"
        variants={generateFadeIn({
          enter: { x: 0, y: 50 },
          exit: { x: 0, y: 200 },
          fadeOpacity: false,
        })}
        src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/CaptainAmerica.png`}
      />
      <motion.img
        className="Character"
        variants={generateFadeIn({
          enter: { x: 400, y: 0 },
          exit: { x: 400, y: 160 },
          fadeOpacity: false,
        })}
        src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackWidow.png`}
      />
      <motion.img
        className="Character"
        variants={generateFadeIn({
          enter: { x: -400, y: 0 },
          exit: { x: -400, y: 150 },
          fadeOpacity: false,
        })}
        src={`${process.env.PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackPanther.png`}
      />
      <motion.h1 className={styles.BigTitle} variants={titleVariants}>
        INFINITY WAR
      </motion.h1>
      <motion.div className="TextContainer" variants={containerVariants}>
        <motion.h2 variants={paragraphVariants}>
          PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS
        </motion.h2>
        <motion.p variants={paragraphVariants}>
          La pelicula más esperada del momento está aqui
        </motion.p>
        <motion.div variants={paragraphVariants}>
          <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
        </motion.div>
      </motion.div>

      <Background src="Backgrounds/Wakanda/Wakanda.jpg" />
    </motion.section>
  );
};

export default WakandaSection;
