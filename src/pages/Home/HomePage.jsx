import React from "react";

import styles from "./Home.module.scss";

//Sections
import WakandaSection from "./contents/WakandaSection";
import TitanSection from "./contents/TitanSection/TitanSection";
import NYSanctumSection from "./contents/NYSacntumSection";
import KnowhereSection from "./contents/KnowhereSection";

//TODO: Add a IntersectionObserver and useScroll

const HomePage = () => {
    return (
        <div className="Container SlidesContainer">
            <WakandaSection />
            <TitanSection />
            <KnowhereSection />
            <NYSanctumSection />
        </div>
    );
};

export default HomePage;
