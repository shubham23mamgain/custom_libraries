import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from "./carousel";
import { carouselImages } from "../data/carouselImages";
function ScaleSlider() {
  const OPTIONS = { loop: true };
  return (
    <>
      <div className="bg-background p-4">
        <Carousel options={OPTIONS} isScale={true}>
          <SliderContainer>
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[450px] sm:h-full h-[420px]">
                <img
                  src={carouselImages.img1}
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[450px] sm:h-full h-[420px]">
                <img
                  src={carouselImages.img2}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[450px] sm:h-full h-[420px]">
                <img
                  src={carouselImages.img3}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[450px] sm:h-full h-[420px]">
                <img
                  src={carouselImages.img4}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
          </SliderContainer>
          <SliderPrevButton className="absolute top-[50%] p-2 border-2 rounded-full left-4 dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronLeft className="w-8 h-8 " />
          </SliderPrevButton>
          <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[50%] dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronRight className="w-8 h-8" />
          </SliderNextButton>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default ScaleSlider;
