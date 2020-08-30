import React from "react";

import styles from "./GraphicElement.module.scss";

import GraphicIndicator from "./GraphicIndicator";

const GraphicElement = ({ image, effect, color, size }) => {
    return (
        <div>
            <img
                className={styles.Effect}
                src={`${process.env.PUBLIC_URL}/assets/${effect}`}
                style={{ height: size === "small" ? "250px" : "500px" }}
            />
            <GraphicIndicator color={color} location={"Desconocido"} />
            <img
                className={styles.Element}
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                style={{ height: size === "small" ? "400px" : "500px" }}
            />
        </div>
    );
};

export default GraphicElement;
