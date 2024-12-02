//Sections
import WakandaSection from "./contents/WakandaSection";
import TitanSection from "./contents/TitanSection/TitanSection";
import NYSanctumSection from "./contents/NYSacntumSection";
import KnowhereSection from "./contents/KnowhereSection";

import "./Home.scss";

//TODO: Add an useScroll

const HomePage = () => {
  return (
    <div
      className="Container SlidesContainer"
      data-testid="home-sections-container">
      <WakandaSection />
      <TitanSection />
      <KnowhereSection />
      <NYSanctumSection />
    </div>
  );
};

export default HomePage;
