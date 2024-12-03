/* eslint-disable react/prop-types */
// @ts-nocheck

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { cn } from "../utils";

const CarouselContext = createContext(undefined);
const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);
export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }
  return context;
};

const Carousel = ({
  children,
  options,
  className,
  activeSlider,
  isScale = false,
  isAutoPlay = false,
}) => {
  const carouselId = useId();
  const [slidesrArr, setSlidesArr] = useState([]);
  const plugins = [];

  if (activeSlider) {
    plugins.push(ClassNames());
  }

  if (isAutoPlay) {
    plugins.push(
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnMouseEnter: true,
        jump: false,
        stopOnInteraction: false,
      })
    );
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedThumbIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedThumbIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  // for scale animation

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const setTweenNodes = useCallback(
    (emblaApi) => {
      if (!isScale) return;
      tweenNodes.current = emblaApi.slideNodes().map((slideNode, index) => {
        const node = slideNode.querySelector(".slider_content");
        if (!node) {
          console.warn(`No .slider_content found for slide ${index}`);
        }
        return node;
      });
    },
    [isScale]
  );

  const setTweenFactor = useCallback(
    (emblaApi) => {
      if (!isScale) return;
      tweenFactor.current =
        TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    },
    [isScale]
  );

  const tweenScale = useCallback(
    (emblaApi, eventName) => {
      if (!isScale) return;
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          // Add null check here
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    },
    [isScale]
  );

  useEffect(() => {
    if (!emblaApi) return;
    if (isScale) {
      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);

      emblaApi
        .on("reInit", setTweenNodes)
        .on("reInit", setTweenFactor)
        .on("reInit", tweenScale)
        .on("scroll", tweenScale);
    }
  }, [emblaApi, tweenScale, isScale, setTweenNodes, setTweenFactor]);
  return (
    <CarouselContext.Provider
      value={{
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        selectedIndex,
        scrollSnaps,
        setSlidesArr,
        onDotButtonClick,
        scrollProgress,
        selectedSnap,
        snapCount,
        carouselId,
        isScale,
        emblaThumbsRef,
        onThumbClick,
        slidesrArr,
      }}
    >
      <div
        className={cn(className, "overflow-hidden  rounded-md ")}
        ref={emblaRef}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export const SliderContainer = ({ className, children }) => {
  return (
    <div
      className={cn("flex", className)}
      style={{ touchAction: "pan-y pinch-zoom" }}
    >
      {children}
    </div>
  );
};
export const Slider = ({ children, className, thumnailSrc }) => {
  const { isScale, setSlidesArr } = useCarouselContext();
  // console.log(thumnailSrc)

  const addImgToSlider = useCallback(() => {
    setSlidesArr((prev) => {
      // Prevent adding duplicate images
      return [...prev, thumnailSrc];
    });
  }, [setSlidesArr, thumnailSrc]);

  useEffect(() => {
    addImgToSlider();
  }, [addImgToSlider]);

  return (
    <div className={cn("min-w-0 flex-grow-0 flex-shrink-0", className)}>
      {isScale ? (
        <>
          <div className="slider_content">{children}</div>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export const SliderPrevButton = ({ children, className }) => {
  const { onPrevButtonClick, prevBtnDisabled } = useCarouselContext();
  return (
    <button
      className={cn("", className)}
      type="button"
      onClick={onPrevButtonClick}
      disabled={prevBtnDisabled}
    >
      {children}
    </button>
  );
};
export const SliderNextButton = ({ children, className }) => {
  const { onNextButtonClick, nextBtnDisabled } = useCarouselContext();
  return (
    <>
      <button
        className={cn("", className)}
        type="button"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        {children}
      </button>
    </>
  );
};
export const SliderProgress = ({ className }) => {
  const { scrollProgress } = useCarouselContext();
  return (
    <div
      className={cn(
        "  bg-gray-500 relative rounded-md h-2 justify-end items-center w-96 max-w-[90%] overflow-hidden",
        className
      )}
    >
      <div
        className="dark:bg-white bg-black absolute w-full top-0 -left-[100%] bottom-0"
        style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
      />
    </div>
  );
};

export const SliderSnapDisplay = ({ className }) => {
  const { selectedSnap, snapCount } = useCarouselContext();
  const prevSnapRef = useRef(selectedSnap);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setDirection(selectedSnap > prevSnapRef.current ? 1 : -1);
    prevSnapRef.current = selectedSnap;
  }, [selectedSnap]);

  return (
    <div
      className={cn(
        "mix-blend-difference overflow-hidden flex gap-1 items-center",
        className
      )}
    >
      <motion.div
        key={selectedSnap}
        custom={direction}
        initial={(d) => ({ y: d * 20, opacity: 0 })}
        animate={{ y: 0, opacity: 1 }}
        exit={(d) => ({ y: d * -20, opacity: 0 })}
      >
        {selectedSnap + 1}
      </motion.div>
      <span>/ {snapCount}</span>
    </div>
  );
};
export const SliderDotButton = ({ className, activeclass }) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick, carouselId } =
    useCarouselContext();
  return (
    <div className={cn("flex", className)}>
      <div className="flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`relative inline-flex  p-0 m-0 w-10 h-2 `}
          >
            <div className=" bg-gray-500/40  h-2 rounded-full w-10 "></div>
            {index === selectedIndex && (
              <AnimatePresence mode="wait">
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.04,
                    },
                  }}
                  layoutId={`hover-${carouselId}`}
                  className={cn(
                    "absolute z-[3] w-full h-full left-0 top-0 dark:bg-white bg-black rounded-full",
                    activeclass
                  )}
                />
              </AnimatePresence>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const useSelectedSnapDisplay = (emblaApi) => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

export const ThumsSlider = () => {
  const { emblaThumbsRef, slidesrArr, selectedIndex, onThumbClick } =
    useCarouselContext();
  // console.log(slidesrArr);

  return (
    <div className="overflow-hidden mt-2" ref={emblaThumbsRef}>
      <div className="flex flex-row gap-2">
        {slidesrArr.map((slide, index) => (
          <div
            key={`thumb-${index}`}
            className={`min-w-0 w-full xl:h-24 aspect-auto border-2 rounded-md ${
              index === selectedIndex
                ? "opacity-100"
                : "border-transparent opacity-30"
            }`}
            style={{ flex: "0 0 15%" }}
            onClick={() => onThumbClick(index)}
          >
            <motion.img
              src={slide}
              className="w-full h-full object-cover rounded-sm"
              width={400}
              height={400}
              alt={slide.alt || `Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
