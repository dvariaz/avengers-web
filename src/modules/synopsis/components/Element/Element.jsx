import { motion } from "framer-motion";
import { useUserAgent } from "@oieduardorabelo/use-user-agent";

import styles from "./Element.module.scss";

// Hooks
import useOnScreen from "modules/common/hooks/useOnScreen";

// Components
import Background from "modules/common/components/Background";
import DataPanel from "modules/synopsis/components/DataPanel";
import GraphicElement from "modules/synopsis/components/GraphicElement";
import ScrollIndicator from "modules/common/components/ScrollIndicator";
import SplittedText from "modules/common/components/SplittedText";

// Animation variants
const titleVariants = {
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Element = ({
  id,
  name,
  synopsis,
  history,
  color,
  background,
  image,
  effect,
  size,
}) => {
  const [ref, scrollVisible] = useOnScreen("50px", 0.95);
  const details = useUserAgent();

  return (
    <>
      <div className={styles.Container} ref={ref}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={titleVariants}
          className={styles.Title}
        >
          <SplittedText text={name[0]} depths={name[1]} />
          <GraphicElement
            image={image}
            effect={effect}
            size={size}
            color={color.flat}
          />

          {details && details.device.type && (
            <ScrollIndicator
              style={{ position: "absolute", top: "-200px" }}
              visible={scrollVisible}
            />
          )}
        </motion.div>
      </div>
      <DataPanel
        color={color.flat}
        position={"left"}
        title={`Sinopsis ${name[0]}`}
        content={synopsis}
      />
      <DataPanel
        color="white"
        position={"right"}
        title={`Historia ${name[0]}`}
        content={history}
      />

      <Background src={background} blur="2px" fixed />
    </>
  );
};

export default Element;
