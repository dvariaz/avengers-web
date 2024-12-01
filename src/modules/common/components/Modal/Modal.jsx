import { useRef } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "motion/react";

// Styling
import classNames from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, className, children }) => {
  const overlayRef = useRef();

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div ref={overlayRef} className={classNames(styles.Overlay, className)}>
          {children}
        </div>
      )}
    </AnimatePresence>,
    document.querySelector("#modals")
  );
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
