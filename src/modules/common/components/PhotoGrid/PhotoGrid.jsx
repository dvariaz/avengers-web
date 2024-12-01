import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "motion/react";

// Styling
import styles from "./PhotoGrid.module.scss";

// Components
import Masonry from "react-masonry-css";

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

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const PhotoGrid = ({ images }) => {
  const [imageOnFullscreen, setImageOnFullscreen] = useState({
    id: "",
    alt: "",
    src: "",
    orientation: "",
  });

  const closeImage = () => {
    setImageOnFullscreen({
      id: "",
      src: "",
      alt: "",
      orientation: "",
    });
  };

  return (
    <AnimateSharedLayout type="crossfade">
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
            layoutId={image.id}
            variants={imageVariants}
            custom={{ index, length: images.length }}
            key={image.id}
            src={image.src}
            alt={image.description || "Imagen"}
            onClick={(e) => {
              // We calculate the image's orientation according to its dimensions
              const orientation =
                e.target.offsetWidth > e.target.offsetHeight
                  ? "horizontal"
                  : "vertical";
              setImageOnFullscreen({
                id: image.id,
                src: image.src,
                alt: image.alt,
                orientation,
              });
            }}
          />
        ))}
      </Masonry>
      <AnimatePresence>
        {imageOnFullscreen.id !== "" && (
          <div className={styles.Fullscreen}>
            <motion.img
              layoutId={imageOnFullscreen.id}
              src={imageOnFullscreen.src}
              alt={imageOnFullscreen.alt}
              className={styles.FullscreenImage}
              style={
                imageOnFullscreen.orientation === "horizontal"
                  ? { width: "90vw" }
                  : { height: "90vh" }
              }
            />
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={overlayVariants}
              className={styles.Overlay}
              onClick={closeImage}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default PhotoGrid;
