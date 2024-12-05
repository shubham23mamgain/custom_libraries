import React, { useState } from "react";
import OurTeam from "../components/OurTeam";
import FAQ from "../components/FAQ";
import Memories from "../components/Memories";
import OurPartners from "../components/OurPartners";
import InfoCards from "../components/InfoCards";
import { infoCards } from "../data/infoCards";
import SingleLayoutAccordian from "../components/SingleLayoutAccordian";
import MarqueeDemo from "../components/MarqueeMemo";
import UnsplashGrid from "../components/MasonaryGrid";
import ConditionalGrid from "../components/ConditionalGrid";
import MultiLayoutAccordian from "../components/MultiLayoutAccordian";
import SimpleCarousel from "../components/SimpleCarousel";
import AlignCarousel from "../components/AlignCarousel";
import GetInTouch from "../components/GetInTouch";
import NumberSlider from "../components/NumberSlder";
import ScaleSlider from "../components/ScaleSlider";
import ThumnailSlider from "../components/ThumbnailSlider";
import AnimatedTab from "../components/AnimatedTabs";
import AutoplaySlider from "../components/AutoplaySlider";
import SimpleImageStacks from "../components/SimpleImageStacking";
import LoginRegisterTab from "../components/LoginRegisterTab";
import WhyChooseUs from "../components/WhyChooseUs";
import ImageTabFramerCarousel from "../components/ImageTabFramerCarousel";
import AnimatedImageTabs from "../components/AnimatedImageTabs";
import StackingCards from "../components/StackingCard";
import { LayoutGroup } from "framer-motion";
import ExpandableTag from "../components/ExpandableTag";
import StickyGallery from "../components/StickyGallery";
import StickyHeroAnimation from "../components/StickyHeroAnimation";

const HomePage = () => {
  const [infoCardsIndex, setInfoCardsIndex] = useState(2);
  return (
    <div>
      <OurTeam />
      <FAQ />
      <StickyGallery />
      <Memories />
      {/* <HorizontalScroll /> */}
      <StickyHeroAnimation />
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
      <GetInTouch />
      <NumberSlider />
      <ScaleSlider />
      <ThumnailSlider />
      <AnimatedTab />{" "}
      {/*  wobbly = false or true    and hover = false or true*/}
      <AutoplaySlider />
      <SimpleImageStacks />
      <LoginRegisterTab />
      <WhyChooseUs />
      <ImageTabFramerCarousel />
      <AnimatedImageTabs />
      {/* HoriScrollWithBannerText*/}
      <StackingCards />
      <div className="h-screen bg-gray-950 flex items-center justify-center gap-4">
        <LayoutGroup>
          {/* <h1 className="text-white font-bold">Our Numbers</h1> */}
          <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
          <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
          <ExpandableTag hoveredText="12,478" unhoveredText="10K+" />
        </LayoutGroup>
      </div>
    </div>
  );
};

export default HomePage;
