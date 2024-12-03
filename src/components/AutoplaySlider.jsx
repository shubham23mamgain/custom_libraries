import { carouselImages } from "../data/carouselImages";
import Carousel, { Slider, SliderContainer, SliderDotButton } from "./carousel";

function AutoplaySlider() {
  const OPTIONS = { loop: true };
  return (
    <>
      <>
        <h1 className="text-center text-4xl font-semibold pb-4">Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
          <SliderContainer className="gap-2">
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[400px] w-full">
                <img
                  src={carouselImages.img9}
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[400px] w-full">
                <img
                  src={carouselImages.img10}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[400px] w-full">
                <img
                  src={carouselImages.img11}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[400px] w-full">
                <img
                  src={carouselImages.img12}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </>
    </>
  );
}
export default AutoplaySlider;
