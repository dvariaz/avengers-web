import { useHistory, useRouteMatch } from "react-router";
import { motion } from "motion/react";

// Styling
import styles from "./Actor.module.scss";
import colors from "@/settings/colors";

// Components
import Modal from "@/modules/common/components/Modal";
import Background from "@/modules/common/components/Background";
import ActorNav from "@/modules/gallery/components/ActorNav";
import ActorRibbon from "@/modules/gallery/components/ActorRibbon";
import ActorProfile from "@/modules/gallery/components/ActorProfile";
import PhotoGrid from "@/modules/common/components/PhotoGrid";

const Actor = ({
  index,
  id,
  basepath,
  name,
  score,
  color,
  role,
  background,
  wallpapers,
  photos,
}) => {
  const history = useHistory();
  const match = useRouteMatch("/galeria/:actor/:section");
  const { section } = match?.params || "";

  // Function to go to main actor's page
  const goToMain = () => {
    history.push(`/galeria` + basepath);
  };

  return (
    <div className={styles.Container}>
      <ActorRibbon index={index} name={name} color={colors[color].gradient} />
      <ActorNav id={id} />
      <ActorProfile score={score} role={role} />
      <Background src={background} objectPosition="60% center" fixed />

      {/* Photos Modal */}
      <Modal isOpen={section === "wallpapers" || section === "fotos"}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className={styles.ModalNav}>
            <img
              onClick={goToMain}
              className="icon large"
              src="/assets/Icons/Navigation/Close-Icon.svg"
              alt="Cerrar"
            />
          </div>
          <PhotoGrid images={section === "wallpapers" ? wallpapers : photos} />
        </motion.div>
      </Modal>
    </div>
  );
};

export default Actor;
