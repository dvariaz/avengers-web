import React from "react";

import styles from "./Home.module.scss";

//Sections
import WakandaSection from "./contents/WakandaSection";
import TitanSection from "./contents/TitanSection/TitanSection";
import NYSanctumSection from "./contents/NYSacntumSection";

const HomePage = () => {
    return (
        <div className="Container SlidesContainer">
            <WakandaSection />
            <TitanSection />
            <NYSanctumSection />

            {/* <div className={`PageContent ${styles.SlideContent} ${styles.Center}`}>
                <h2>Nuevos equipos se unirán para luchar</h2>
                <h2>
                    contra la <strong>inminente amenaza</strong>
                </h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                <Background src="Backgrounds/GuardiansSpaceship.jpg" />
            </div> */}
        </div>
    );
};

export default HomePage;
