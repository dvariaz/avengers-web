import React, { useState } from "react";

import "./TrapezoidButton.scss";

const TrapezoidButton = ({ to, children }) => {
  return (
    <>
      <svg className="TrapezoidButton" viewBox="0 0 100 40">
        <a href={to} style={{ color: "white" }}>
          <path
            id="Trapezoid-Front"
            fill="transparent"
            stroke="white"
            strokeWidth="0.5"
            d="M 15 10 L 85 10 L 75 30 L 25 30 z"
          />
          <path
            id="Trapezoid-Back"
            stroke="white"
            strokeWidth="0.5"
            d="M 15 10 L 85 10 L 75 30 L 25 30 z"
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
