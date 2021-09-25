import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Styling
import styles from "./ActorGallery.module.scss";

// Components
import Modal from "modules/common/components/Modal";
import PhotoGrid from "modules/common/components/PhotoGrid";

// Animation Variants
const navVariants = {
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      type: "tween",
    },
  },
  hidden: {
    x: -800,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      type: "tween",
    },
  },
};

const linkVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  hidden: {
    x: -10,
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const ActorGallery = ({ wallpapers, photos }) => {
  const [modalContent, setModalContent] = useState({
    open: false,
    content: "",
  });

  const openModal = (contentType) => () =>
    setModalContent({ open: true, content: contentType });

  const closeModal = () => setModalContent({ open: false, content: "" });

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navVariants}
        className={styles.Nav}
        contentLabel="Galería de fotos"
      >
        <motion.button variants={linkVariants} onClick={openModal("wallpaper")}>
          Wallpaper
        </motion.button>

        <motion.button variants={linkVariants} href="#social">
          Social
        </motion.button>

        <motion.button variants={linkVariants} onClick={openModal("gallery")}>
          Photos
        </motion.button>
      </motion.nav>

      <Modal
        isOpen={modalContent.open}
        onRequestClose={closeModal}
        closeOnClickingBackground
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          style={{ pointerEvents: "none" }}
        >
          <div>
            <button onClick={closeModal}>x</button>
          </div>
          <PhotoGrid
            images={modalContent.content === "wallpaper" ? wallpapers : photos}
          />
        </motion.div>
      </Modal>
    </>
  );
};

export default ActorGallery;
