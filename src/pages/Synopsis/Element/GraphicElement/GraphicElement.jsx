import React from "react";
import styled from "styled-components";

import "./GraphicElement.scss";

import GraphicIndicator from "./GraphicIndicator";

const GraphicElement = ({ image, effect, color, size }) => {
  return (
    <>
      <StyledGraphic size={size}>
        <img
          className="Element_Effect"
          src={`${process.env.PUBLIC_URL}/Assets/${effect}`}
        />
        <GraphicIndicator color={color} location={"Desconocido"} />
        <img
          className="Element"
          src={`${process.env.PUBLIC_URL}/Assets/${image}`}
        />
      </StyledGraphic>
    </>
  );
};

const StyledGraphic = styled.div`
  .Element {
    height: ${({ size }) => (size === "small" ? "250px" : "500px")};
  }

  .Element_Effect {
    height: ${({ size }) => (size === "small" ? "400px" : "500px")};
  }
`;

export default GraphicElement;
