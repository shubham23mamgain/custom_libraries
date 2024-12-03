import Carousel, { Slider, SliderContainer, SliderProgress } from "./carousel";
import { carouselImages } from "../data/carouselImages";

function AlignCarousel() {
  const OPTIONS = { loop: true };
  return (
    <>
      <>
        <h1 className="sm:text-2xl text-xl py-4 sm:px-10 px-2">
          A Beautiful Align Carousel for your app.
        </h1>
        <Carousel className="bg-transparent sm:px-10 px-2" options={OPTIONS}>
          <SliderContainer className="gap-2">
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-3/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img1}
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[40%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img2}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[30%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img3}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>

            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-4/5 2xl:w-[80%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img4}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img5}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[400px] xl:h-[300px] h-full w-full">
                <img
                  src={carouselImages.img6}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-2">
            <SliderProgress />
          </div>
        </Carousel>
      </>
    </>
  );
}
export default AlignCarousel;
