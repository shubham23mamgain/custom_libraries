import { ReactLenis } from "lenis/react";
export default function SimpleImageStacks() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Mocking anime is like mocking any other form of art
            </h1> */}

            <h1 className="text-[8vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
              Mocking anime is like mocking any other form of art
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <>
            <div className="sm:sticky sm:top-0  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://wallpapercave.com/wp/wp11152110.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[55%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-2  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images8.alphacoders.com/134/thumb-1920-1348853.png"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[60%]  align-bottom object-cover rounded-md [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-4  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://wallpapercat.com/w/full/8/a/e/118480-1920x1080-desktop-full-hd-your-name-background-photo.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[65%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-6  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://wallpapercave.com/wp/wp5083532.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[70%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-8  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://i.pinimg.com/736x/8c/7b/66/8c7b669419f0511465b96c92eac51301.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[75%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-12  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images3.alphacoders.com/132/1328396.png"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[80%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>

            <div className="sm:sticky sm:top-12  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://4kwallpapers.com/images/wallpapers/satoru-gojo-blue-3840x2160-16951.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[80%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>

            <div className="sm:sticky sm:top-12  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://e0.pxfuel.com/wallpapers/901/1006/desktop-wallpaper-anime-for-full-screen-cool-anime.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[80%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </>
        </section>

        <footer className="group bg-slate-950 pb-60">
          <h1 className="text-[8vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            it just shows you haven’t found the right one yet!
          </h1>
        </footer>
      </main>
    </ReactLenis>
  );
}
