import PropTypes from "prop-types";

import styles from "./Preloader.module.scss";

const Preloader = ({ progress }) => {
  return (
    <div
      className={styles.Container}
      data-testid="preloader">
      <div className={styles.Preloader}>
        <img
          src="/assets/Icons/Avengers-Logo.svg"
          className={styles.Logo}
          alt=""
        />
        <div
          style={{ width: `${(progress * 100) % 100}%` }}
          className={styles.ProgressBar}
        ></div>
      </div>
    </div>
  );
};

Preloader.defaultProps = {
  progress: 0,
};

Preloader.propTypes = {
  progress: PropTypes.number,
};

export default Preloader;
