import React from "react";
import Delay from "react-delay";

import styles from "./Element.module.scss";

import Background from "../../../components/Background";
import DataPanel from "./DataPanel";
import GraphicElement from "./GraphicElement";

const Element = ({ name, synopsis, history, color, background, image, effect, size }) => {
    const splitWord = (word) => {
        let letters = Array.from(word[0]);
        let zinfo = word[1];

        return (
            <>
                {letters.map((letter, index) => (
                    <span key={index} className={zinfo[index] === "f" ? styles.Front : styles.Back}>
                        {letter}
                    </span>
                ))}
            </>
        );
    };

    return (
        <>
            <div className={styles.Title}>
                {splitWord(name)}
                <GraphicElement image={image} effect={effect} size={size} color={color.flat} />
            </div>

            <Delay wait={1000}>
                <DataPanel
                    color={color.flat}
                    position={"left"}
                    title={`Sinopsis ${name[0]}`}
                    content={synopsis}
                />
                <DataPanel
                    color="white"
                    position={"right"}
                    title={`Historia ${name[0]}`}
                    content={history}
                />
            </Delay>

            <Background src={background} blur="2px" />
        </>
    );
};

export default Element;
