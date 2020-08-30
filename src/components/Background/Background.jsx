import React from "react";
import styled from "styled-components";

import styles from "./Background.module.scss";

const StyledBackground = styled.img`
    filter: ${(props) => props.blur};
`;

const Background = ({ src, blur }) => {
    let blurProp = `blur(${blur || "0px"})`;

    return (
        <StyledBackground
            className={styles.Background}
            src={`${process.env.PUBLIC_URL}/assets/${src}`}
            blur={blurProp}
        />
    );
};

export default Background;
