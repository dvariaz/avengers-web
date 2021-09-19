import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

//Styles
import styles from "./SynopsisNav.module.scss";
import colors from "settings/colors";
import classNames from "classnames";

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

const SynopsisNav = ({ current, links, onChange }) => {
  const ref = useRef();
  const currentIndex = links.findIndex((link) => link.path === current);

  useEffect(() => {
    if(currentIndex >= 0){
      const target = ref.current.children[currentIndex];
      centerNavOnTarget(target)
    }
  }, []);

  const centerNavOnTarget = (target) => {
    const navMiddle = ref.current.offsetWidth / 2;

    ref.current.scrollLeft = target.offsetLeft - navMiddle;
  };

  const handleClick = (path, targetElement) => {
    centerNavOnTarget(targetElement);
    onChange(path);
  };

  const handleBackward = () => {
    let previousIndex = currentIndex === 0 ? links.length - 1 : currentIndex - 1;
    const target = ref.current.children[previousIndex];
    const previousLink = links[previousIndex].path;

    centerNavOnTarget(target);
    onChange(previousLink);
  };

  const handleForward = () => {
    const nextIndex = (currentIndex + 1) % links.length;
    const target = ref.current.children[nextIndex];
    let nextLink = links[nextIndex].path;

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
        {links.map((link, index) => (
          <button
            key={link.name}
            onClick={(e) => {
              handleClick(link.path, e.target);
            }}
            className={classNames({[styles.Active]: link.path === current})}
            style={{
              background:
                link.path === current ? colors[link.color].gradient : "transparent",
            }}
          >
            {link.name}
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
  current: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onBackward: PropTypes.func,
  onForward: PropTypes.func,
};

export default SynopsisNav;
