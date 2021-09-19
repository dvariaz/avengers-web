import { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

//Styles
import styles from "./SynopsisNav.module.scss";

// Animation Variants
const navVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SynopsisNav = ({ current, elements, onChange }) => {
  const ref = useRef();

  const centerNavOnTarget = (target) => {
    const navMiddle = ref.current.offsetWidth / 2;

    ref.current.scrollLeft = target.offsetLeft - navMiddle;
  };

  const handleClick = (id, targetElement) => {
    centerNavOnTarget(targetElement);
    onChange(id);
  };

  const handleBackward = () => {
    let previousIndex = current === 0 ? elements.length - 1 : current - 1;
    const target = ref.current.children[previousIndex];
    const previousLink = elements[previousIndex].id;

    centerNavOnTarget(target);
    onChange(previousLink);
  };

  const handleForward = () => {
    const nextIndex = (current + 1) % elements.length;
    const target = ref.current.children[nextIndex];
    let nextLink = elements[nextIndex].id;

    centerNavOnTarget(target);
    onChange(nextLink);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "tween" }}
      variants={navVariants}
      className={styles.SynopsisNav}
    >
      <button onClick={handleBackward} className={styles.Controller}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Anterior sección"
        />
      </button>
      <div className={styles.Items} ref={ref}>
        {elements.map((element, index) => (
          <button
            key={element.name[0]}
            onClick={(e) => {
              handleClick(element.id, e.target);
            }}
            className={current === index ? styles.Active : ""}
            style={{
              background:
                current === index ? element.color.gradient : "transparent",
            }}
          >
            {element.name[0]}
          </button>
        ))}
      </div>
      <button onClick={handleForward} className={styles.Controller}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
          alt="Siguiente sección"
        />
      </button>
    </motion.div>
  );
};

SynopsisNav.defaultProps = {
  current: 0,
  elements: [],
};

SynopsisNav.propTypes = {
  current: PropTypes.number.isRequired,
  elements: PropTypes.array.isRequired,
  onBackward: PropTypes.func,
  onForward: PropTypes.func,
};

export default SynopsisNav;
