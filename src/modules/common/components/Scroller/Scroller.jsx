import styles from "./Scroller.module.scss";
import colors from "settings/colors";

//Hooks
import useCircularNavigation from "modules/common/hooks/useCircularNavigation";

const Scroller = ({ current, links, onChange }) => {
  const { currentItem, previousItem, nextItem } = useCircularNavigation(
    current,
    links
  );

  const handleBackward = () => {
    const previousLink = previousItem.path;
    onChange(previousLink);
  };

  const handleForward = () => {
    let nextLink = nextItem.path;
    onChange(nextLink);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Body}>
        <button
          onClick={handleBackward}
          style={{ background: colors[currentItem.color].gradient }}
        >
          <img
            src={"/assets/Icons/Navigation/ChevronArrow-Icon.svg"}
            alt="Anterior sección"
          />
        </button>
        <span>Scroll</span>
        <button
          onClick={handleForward}
          style={{ background: colors[currentItem.color].gradient }}
        >
          <img
            src={"/assets/Icons/Navigation/ChevronArrow-Icon.svg"}
            alt="Siguiente sección"
          />
        </button>
      </div>
    </div>
  );
};

export default Scroller;
