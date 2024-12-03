import { carouselImages } from "../data/carouselImages";
import Carousel, {
  Slider,
  SliderContainer,
  SliderSnapDisplay,
} from "./carousel";

function NumberSlider() {
  const OPTIONS = { loop: false };
  return (
    <>
      <div className="px-20 py-10">
        <h1> Number Slider</h1>
        <Carousel options={OPTIONS} className="relative">
          <SliderContainer className="gap-2">
            <Slider className="w-[60%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img12}
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-[50%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img1}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-[50%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img2}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>

            <Slider className="w-[80%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img3}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-[50%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img6}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-[70%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
                <img
                  src={carouselImages.img8}
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className="absolute bottom-3 right-3 text-white rounded-lg  w-20 h-12 grid place-content-center font-semibold border-2 z-10 dark:bg-black bg-white">
            <SliderSnapDisplay className="mix-blend-difference" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default NumberSlider;
