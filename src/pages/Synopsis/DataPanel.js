import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./DataPanel.scss";
import { barSize } from "./../../settings/global";

const DataPanel = ({ color, position, title, content }) => {
  const variants = {
    mounted: {
      opacity: 0,
    },
    ready: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 5,
      },
    },
  };

  const textVariants = {
    mounted: {
      x: ({ position }) => {
        if (position === "left") {
          return "-120%";
        } else {
          return "120%";
        }
      },
    },
    ready: {
      x: "0%",
      transition: { duration: 400 },
    },
  };

  return (
    <motion.div initial="mounted" animate="ready" variants={variants}>
      <StyledDataPanel color={color} position={position} className="DataPanel">
        <motion.div className="Content">
          <motion.h1 variants={textVariants} position={position}>
            {title}
          </motion.h1>
          <motion.p variants={textVariants} position={position}>
            {content}
          </motion.p>
          <button>Ver más</button>
        </motion.div>
      </StyledDataPanel>
    </motion.div>
  );
};

const StyledDataPanel = styled.div`
  ${({ position }) => {
    if (position === "left") {
      return `left: ${barSize};top: ${barSize};`;
    }
    if (position === "right") {
      return `right: ${barSize};bottom: ${barSize};`;
    }
  }}

  .Content {
    &::before {
      background: ${(props) => props.color};
    }

    button {
      border-color: ${(props) => props.color};
    }
  }
`;

export default DataPanel;
