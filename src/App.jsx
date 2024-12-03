import { useState } from "react";
import OurTeam from "./components/OurTeam";
import InfoCards from "./components/InfoCards";
import { infoCards } from "./data/infoCards";
import FAQ from "./components/FAQ";
import OurPartners from "./components/OurPartners";
import MarqueeDemo from "./components/MarqueeMemo";
import Memories from "./components/Memories";
import HorizontalScroll from "./components/Ethics";
// import HoriScrollWithBannerText from "./components/HoriScroll";
import UnsplashGrid from "./components/MasonaryGrid";
import ConditionalGrid from "./components/ConditionalGrid";
import MultiLayoutAccordian from "./components/MultiLayoutAccordian";
import SingleLayoutAccordian from "./components/SingleLayoutAccordian";
import SimpleCarousel from "./components/SimpleCarousel";
import AlignCarousel from "./components/AlignCarousel";
import NumberSlider from "./components/NumberSlder";
import ScaleSlider from "./components/ScaleSlider";
import ThumnailSlider from "./components/ThumbnailSlider";
import AutoplaySlider from "./components/AutoplaySlider";
import AnimatedTab from "./components/AnimatedTabs";
import LoginRegisterTab from "./components/LoginRegisterTab";
import AnimatedImageTabs from "./components/AnimatedImageTabs";
// import ImageTabFramerCarousel from "./components/ImageTabFramerCarousel";

const App = () => {
  const [infoCardsIndex, setInfoCardsIndex] = useState(2);
  return (
    <div className="">
      <OurTeam />
      <FAQ />
      <Memories />
      <HorizontalScroll />
      <OurPartners />
      <div className="relative">
        <InfoCards
          items={infoCards}
          index={infoCardsIndex}
          setIndex={setInfoCardsIndex}
        />
      </div>
      <SingleLayoutAccordian />
      <MarqueeDemo />
      <UnsplashGrid />
      <ConditionalGrid />
      <MultiLayoutAccordian />
      {/*  a ratio b*/}
      <SimpleCarousel />
      <AlignCarousel />
      <NumberSlider />
      <ScaleSlider />
      <ThumnailSlider />
      <AnimatedTab />{" "}
      {/*  wobbly = false or true    and hover = false or true*/}
      <AutoplaySlider />
      <LoginRegisterTab />
      {/* <ImageTabFramerCarousel /> */}
      {/* <HoriScrollWithBannerText /> */}
      <AnimatedImageTabs />
    </div>
  );
};

export default App;
