import styles from "./Scroller.module.scss";
import colors from "settings/colors";

const Scroller = ({ current, links, onChange }) => {
  // Characters indexes
  const currentIndex = links.findIndex((link) => link.path === current);
  const previousIndex =
    currentIndex === 0 ? links.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % links.length;

  const handleBackward = () => {
    const previousLink = links[previousIndex].path;
    onChange(previousLink);
  };

  const handleForward = () => {
    let nextLink = links[nextIndex].path;
    onChange(nextLink);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Body}>
        <button
          onClick={handleBackward}
          style={{ background: colors[links[currentIndex].color].gradient }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
            alt="Anterior sección"
          />
        </button>
        <span>Scroll</span>
        <button
          onClick={handleForward}
          style={{ background: colors[links[currentIndex].color].gradient }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
            alt="Siguiente sección"
          />
        </button>
      </div>
    </div>
  );
};

export default Scroller;
