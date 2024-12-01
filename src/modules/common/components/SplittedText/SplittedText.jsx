import { motion } from "motion/react";

import styles from "./SplittedText.module.scss";

// Animation variants
const letterVariants = {
  visible: {
    opacity: 1,
    letterSpacing: "10px",
    y: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    letterSpacing: "-100px",
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.25,
      type: "tween",
    },
  },
};
export default function SplittedText({
  text, //A simple string to split
  depths, //A character based depth map with the same lenght of the text, composed by 'f' and 'b' letters, 'f' for front, 'b' for back
}) {
  //We divide the text into an array of letters
  const letters = Array.from(text);

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          variants={letterVariants}
          key={index}
          className={depths[index] === "f" ? styles.Front : styles.Back}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
