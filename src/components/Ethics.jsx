import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../utils";

function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);
  useEffect(() => {
    if (!ref || !ref.current) return;
    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;
    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}
const slideAnimation = {
  variants: {
    full: { backgroundColor: "#008299" },
    partial: { backgroundColor: "#ffffff" },
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: false },
};

import { imagesSection } from "../data/imagesSection";

const Ethics = () => {
  const mainRef = useRef(null);
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(mainRef);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);
  console.log(carouselEndPosition);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  useEffect(() => {
    window.addEventListener("scroll", () => console.log(carouselEndPosition));
  }, []);
  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2;
        setCarouselEndPosition(-newPosition);
      }
    };
    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section ref={mainRef}>
        <div className="w-full mx-auto" style={{ height: "300vh" }}>
          <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div ref={carouselRef} className="flex gap-10" style={{ x }}>
              {imagesSection.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className="group relative h-[300px] w-[300px] overflow-hidden bg-neutral-200"
                >
                  <motion.img
                    key={item.id}
                    className="w-full flex-shrink-0 h-full object-cover"
                    src={item?.url}
                    alt={"img"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="group mb-20">
        <h1 className="text-[8vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
          Karma
        </h1>
      </footer>
    </>
  );
};

export default Ethics;
