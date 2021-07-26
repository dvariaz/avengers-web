import PropTypes from "prop-types";

import styles from "./Preloader.module.scss";

const Preloader = ({ progress }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Preloader}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Avengers-Logo.svg`}
          className={styles.Logo}
          alt=""
        />
        <div
          style={{ width: `${progress * 100}%` }}
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
