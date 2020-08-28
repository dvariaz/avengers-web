import React from "react";

import Background from "../../../../components/Background";
import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

const KnowhereSection = () => {
    return (
        <section className={`PageContent SlideContent`}>
            <div className="TextContainer">
                <h2>Nuevos equipos se unirán para luchar</h2>
                <h2>
                    contra la <strong>inminente amenaza</strong>
                </h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
            </div>

            <Background src="Backgrounds/Knowhere/Knowhere.jpg" />
        </section>
    );
};

export default KnowhereSection;
