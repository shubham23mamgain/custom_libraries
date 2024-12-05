/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
export default function StickyHeroAnimation() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div className="mt-20 mb-96">
      <main ref={container} className="relative h-[200vh] bg-black  ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <footer className="group bg-[#06060e] pb-40 mb-20">
          <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Sticky Hero
          </h1>
          {/* <div className="bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div> */}
        </footer>
      </main>
    </div>
  );
}
const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
        Armando Alihandro <br /> Astrada
      </h1>
    </motion.section>
  );
};
const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white "
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <article className="container mx-auto relative z-10 ">
        <h1 className="text-6xl leading-[100%] py-10 font-semibold  tracking-tight ">
          Crusaders <br /> Journey to center
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="https://assets-prd.ignimgs.com/2024/04/05/top25wrestlers-blogroll-1712334924493.jpg"
            alt="img"
            className=" object-cover w-full rounded-md h-full"
          />
          <img
            src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2016/06/002_002_backstage_20140406hm_0149--096b9e45f11cb6f39f06d84f453a0031.jpg"
            alt="img"
            className=" object-cover w-full rounded-md h-full"
          />
          <img
            src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2016/06/021_022_SD_07222003rf_04010--6c1f53c6e6a83c65aae40260b0c0ea23.jpg"
            alt="img"
            className=" object-cover w-full rounded-md h-full"
          />
          <img
            src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2016/06/034_019_RAW_03161999_0001--b73a40c39f6f57aeadb5ce2bb4ae15cb.jpg"
            alt="img"
            className=" object-cover w-full rounded-md h-full"
          />
        </div>
      </article>
    </motion.section>
  );
};
