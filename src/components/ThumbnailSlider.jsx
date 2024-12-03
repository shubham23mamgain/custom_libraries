import { carouselImages } from "../data/carouselImages";
import Carousel, { Slider, SliderContainer, ThumsSlider } from "./carousel";

function ThumnailSlider() {
  const OPTIONS = { loop: false };
  return (
    <div>
      <h1> Thumb Nail Slider </h1>
      <div className=" 2xl:w-[70%] bg-background sm:w-[80%] w-[90%] mx-auto">
        <Carousel options={OPTIONS} className=" relative" isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img1}
            >
              <img
                src={carouselImages.img1}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img2}
            >
              <img
                src={carouselImages.img2}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img3}
            >
              <img
                src={carouselImages.img3}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img4}
            >
              <img
                src={carouselImages.img4}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img5}
            >
              <img
                src={carouselImages.img5}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img6}
            >
              <img
                src={carouselImages.img6}
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img7}
            >
              <img
                src={carouselImages.img7}
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img8}
            >
              <img
                src={carouselImages.img8}
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img9}
            >
              <img
                src={carouselImages.img9}
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={carouselImages.img10}
            >
              <img
                src={carouselImages.img10}
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </div>
  );
}
export default ThumnailSlider;
