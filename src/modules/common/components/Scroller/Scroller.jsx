import styles from "./Scroller.module.scss";

const Scroller = ({ color, backward, forward }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Body}>
        <button onClick={backward} style={{ background: color }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
            alt="Anterior sección"
          />
        </button>
        <span>Scroll</span>
        <button onClick={forward} style={{ background: color }}>
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
