import React from "react";

import styles from "./GraphicElement.module.scss";

import GraphicIndicator from "./GraphicIndicator";

const GraphicElement = ({ image, effect, color, size }) => {
    return (
        <div>
            <img
                className={styles.Effect}
                src={`${process.env.PUBLIC_URL}/assets/${effect}`}
                style={{ height: size === "small" ? "50%" : "75%" }}
            />
            <GraphicIndicator color={color} location={"Desconocido"} />
            <img
                className={styles.Element}
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                style={{ height: size === "small" ? "40%" : "60%" }}
            />
        </div>
    );
};

export default GraphicElement;
