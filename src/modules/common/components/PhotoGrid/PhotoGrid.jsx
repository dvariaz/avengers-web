import { motion } from "framer-motion";

// Styling
import styles from "./PhotoGrid.module.scss";

// Components
import Masonry from "react-masonry-css";

//TODO: Implement photo viewer with AnimatedSharedLayout

// Animation Variants
const imageVariants = {
  initial: {
    opacity: 0,
    transform: "perspective(600px) rotatey(-25deg) translateX(-100px)",
  },
  enter: ({ index }) => ({
    opacity: 1,
    transform: "perspective(600px) rotatey(0deg) translateX(0px)",
    transition: {
      duration: 0.3,
      delay: index / 25,
    },
  }),
  exit: ({ index, length }) => ({
    opacity: 0,
    transform: "perspective(600px) rotatey(25deg) translateX(100px)",
    transition: {
      duration: 0.15,
      delay: (length - index) / 25,
    },
  }),
};

const PhotoGrid = ({ images }) => {
  return (
    <Masonry
      breakpointCols={{
        default: 3,
        1200: 3,
        800: 2,
        500: 1,
      }}
      className={styles.Grid}
      columnClassName={styles.Column}
    >
      {images.map((image, index) => (
        <motion.img
          initial="initial"
          animate="enter"
          exit="exit"
          variants={imageVariants}
          custom={{ index, length: images.length }}
          key={image.id}
          src={image.src}
          alt={image.description || "Imagen"}
          onClick={(e) => console.log("Evento de imagen", e)}
        />
      ))}
    </Masonry>
  );
};

export default PhotoGrid;
