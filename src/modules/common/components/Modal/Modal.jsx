import { useRef } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";

// Styling
import classNames from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({
  isOpen,
  className,
  closeOnClickingBackground,
  onRequestClose,
  children,
}) => {
  const overlayRef = useRef();

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          ref={overlayRef}
          className={classNames(styles.Overlay, className)}
          onClick={(e) => {
            if (e.target === overlayRef.current && closeOnClickingBackground) {
              onRequestClose(e);
            }
          }}
        >
          {children}
        </div>
      )}
    </AnimatePresence>,
    document.querySelector("#modals")
  );
};

Modal.defaultProps = {
  isOpen: false,
  closeOnClickingBackground: false,
};

export default Modal;
