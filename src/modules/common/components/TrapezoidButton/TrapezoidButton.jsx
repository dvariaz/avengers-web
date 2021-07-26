import styles from "./TrapezoidButton.module.scss";

const TrapezoidButton = ({ to, children }) => {
  return (
    <>
      <svg className={styles.Button} viewBox="0 0 100 40">
        <a href={to} style={{ color: "white" }}>
          <path
            className={styles.Front}
            fill="transparent"
            stroke="white"
            strokeWidth="0.5"
            d="M 15 10 L 85 10 L 80 30 L 20 30 z"
          />
          <path
            className={styles.Back}
            stroke="white"
            strokeWidth="0.5"
            d="M 15 10 L 85 10 L 80 30 L 20 30 z"
          />
          <text x="50" y="20" textAnchor="middle" alignmentBaseline="middle">
            {children}
          </text>
        </a>
      </svg>
    </>
  );
};

export default TrapezoidButton;
